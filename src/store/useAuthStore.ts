import { create } from 'zustand'
import { Session, User } from '@supabase/supabase-js'

interface AuthState {
    user: User | null
    session: Session | null
    email: string
    password: string
    message: string
    setUser: (user: User | null) => void
    setSession: (session: Session | null) => void
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    setMessage: (message: string) => void
    clearCredentials: () => void
  }
  
  const useAuthStore = create<AuthState>((set) => ({
    user: null,
    session: null,
    email: '',
    password: '',
    message: '',
    setUser: (user) => set({ user }),
    setSession: (session) => set({ session }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setMessage: (message) => set({ message }),
    clearCredentials: () => set({ email: '', password: '' }),
  }))  

export default useAuthStore
