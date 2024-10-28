export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user }) {
    const githubId = user.id?.toString()
    const email = user.email
    const name = user.name
    const avatar = user.avatar_url
    await handleOAuthUser(event, {
      id: githubId,
      name,
      email,
      avatar,
      provider: 'github',
    })
    await setUserSession(event, {
      loggedInAt: new Date(),
    })
    return sendRedirect(event, '/')
  },
})
