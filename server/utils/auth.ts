export async function handleOAuthUser(event: any, userData: {
  id: string
  name: string
  email: string
  avatar: string
  provider: 'google' | 'github'
}) {
  const { id, name, email, avatar, provider } = userData

  let user = await prisma.user.findFirst({
    where: {
      OR: [
        { [`${provider}Id`]: id },
        { email },
      ],
    },
  })

  if (user) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        [`${provider}Id`]: id,
        name: name || user.name,
        email,
        avatar: avatar || user.avatar,
      },
    })
  }
  else {
    user = await prisma.user.create({
      data: {
        [`${provider}Id`]: id,
        name,
        email,
        avatar,
        emailVerified: new Date(),
        plan: 'FREE',
        credit: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name ?? '',
      email: user.email ?? '',
      avatar: user.avatar ?? '',
      plan: user.plan as 'FREE' | 'PRO' | 'ULTIMATE',
      credit: user.credit,
      userId: user.id,
      googleId: user.googleId ?? undefined,
      githubId: user.githubId ?? undefined,
    },
    loggedInAt: new Date(),
  })

  const to = getCookie(event, 'loginRedirect') || '/'
  setCookie(event, 'loginRedirect', '')
  return sendRedirect(event, to)
}
