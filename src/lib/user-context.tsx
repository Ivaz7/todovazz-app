'use client'

import { createContext, useContext } from 'react'

interface UserContextValue {
  user_id: string
  name: string
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export function UserProvider({ children, value }: { children: React.ReactNode, value: UserContextValue }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within a UserProvider')
  return ctx
}
