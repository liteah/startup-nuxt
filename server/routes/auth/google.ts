export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const googleId = user.id?.toString() || user.sub?.toString()
    const email = user.email
    const name = user.name || user.given_name
    const avatar = user.picture

    await handleOAuthUser(event, {
      id: googleId,
      name,
      email,
      avatar,
      provider: 'google',
    })
    await setUserSession(event, {
      loggedInAt: new Date(),
    })
    return sendRedirect(event, '/')
  },
})
