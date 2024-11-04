import type { Workspace } from '#auth-utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface OAuthUserData {
  id: string
  name: string
  email: string
  avatar: string
  provider: 'google' | 'github'
}

export async function handleOAuthUser(event: any, userData: OAuthUserData) {
  const { id, name, email, avatar, provider } = userData

  let user = await prisma.user.findFirst({
    where: {
      OR: [
        { [`${provider}Id`]: id },
        { email },
      ],
    },
    include: {
      memberships: {
        include: {
          workspace: true,
        },
      },
    },
  })

  if (!user) {
    const transaction = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          [`${provider}Id`]: id,
          name,
          email,
          avatar,
          emailVerified: new Date(),
        },
      })

      const workspace = await tx.workspace.create({
        data: {
          name: `${name || email.split('@')[0]}'s Workspace`,
          creatorId: newUser.id,
          plan: 'FREE',
          members: {
            create: {
              userId: newUser.id,
              role: 'OWNER',
            },
          },
        },
        include: {
          members: true,
        },
      })

      return { user: newUser, workspace }
    })

    user = await prisma.user.findUniqueOrThrow({
      where: { id: transaction.user.id },
      include: {
        memberships: {
          include: {
            workspace: true,
          },
        },
      },
    })
  }
  else {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        [`${provider}Id`]: id,
        name: name || user.name,
        email,
        avatar: avatar || user.avatar,
      },
      include: {
        memberships: {
          include: {
            workspace: true,
          },
        },
      },
    })
  }

  const defaultWorkspace = user.memberships[0]?.workspace as Workspace

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name ?? '',
      email: user.email ?? '',
      avatar: user.avatar ?? '',
      userId: user.id,
      googleId: user.googleId ?? undefined,
      githubId: user.githubId ?? undefined,
      workspace: defaultWorkspace,
    },
    loggedInAt: new Date(),
  })

  const to = getCookie(event, 'loginRedirect') || '/'
  setCookie(event, 'loginRedirect', '')
  return sendRedirect(event, to)
}
