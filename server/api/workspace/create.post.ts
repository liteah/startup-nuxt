export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    if (!session?.user?.id)
      throw createError({ statusCode: 401, message: 'Unauthorized' })

    const body = await readBody(event)
    if (!body?.name?.trim())
      throw createError({ statusCode: 400, message: 'Workspace name is required' })

    const workspace = await prisma.workspace.create({
      data: {
        name: body.name.trim(),
        avatar: body.avatar?.trim() || null,
        plan: 'FREE',
        creatorId: session.user.id,
        members: {
          create: {
            userId: session.user.id,
            role: 'OWNER',
          },
        },
      },
      include: {
        members: true,
      },
    })

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        memberships: {
          include: {
            workspace: {
              include: {
                members: true,
              },
            },
          },
        },
      },
    })

    if (!user)
      throw createError({ statusCode: 404, message: 'User not found' })

    return {
      ok: true,
      workspace,
      workspaces: user.memberships.map(m => m.workspace),
    }
  }
  catch (error: any) {
    console.error('[Workspace Create Error]:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to create workspace',
    })
  }
})
