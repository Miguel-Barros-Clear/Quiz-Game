'use client'

import { useContext, createContext, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const localData = {
      user: localStorage.getItem('user'),
      token: localStorage.getItem('token'),
    }

    const routes = {
      public: [
        '/',
        '/login',
        '/register',
      ],
      private: [
        '/game',
        '/ranking',
      ],
    }

    if (!localData.user || !localData.token) {
      if (routes.private.includes(pathname)) {
        router.push('/login')
      }
    } else {
      if (routes.public.includes(pathname)) {
        router.push('/game')
      }
    }
  }, [pathname, router])

  return (
    <AuthContext.Provider value={{
      user: (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : ''),
      token: (localStorage.getItem('token') ? localStorage.getItem('token') : '')
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
