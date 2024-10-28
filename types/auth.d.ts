declare module '#auth-utils' {
  interface User {
    id: string
    name: string
    email: string
    avatar: string
    userId: string
    plan: 'FREE' | 'PRO' | 'ULTIMATE'
    credit: number
    googleId?: string
    githubId?: string
  }

  interface UserSession {
    loggedInAt: Date
  }

  interface SecureSessionData {
    apiToken: string
  }
}

export { }
