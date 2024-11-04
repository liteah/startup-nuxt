declare module '#auth-utils' {
  interface User {
    id: string
    name: string
    email: string
    avatar: string
    userId: string
    workspace: Workspace
    googleId?: string
    githubId?: string
  }

  interface UserSession {
    loggedInAt: Date
    workspace?: Workspace
  }

  interface SecureSessionData {
    apiToken: string
  }

  interface Workspace {
    id: string
    name: string
    avatar?: string
    plan: 'FREE' | 'PRO' | 'ULTIMATE'
    createdAt: Date
    updatedAt: Date
    creatorId: string
    members: WorkspaceMember[]
  }

  interface WorkspaceMember {
    id: string
    userId: string
    workspaceId: string
    role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
    user: {
      name: string
      email: string
      avatar?: string
    }
    createdAt: Date
    updatedAt: Date
  }

  interface WorkspaceInvitation {
    id: string
    email: string
    workspaceId: string
    role: 'OWNER' | 'ADMIN' | 'MEMBER'
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED'
    createdAt: Date
    expiresAt: Date
  }
}

export {}
