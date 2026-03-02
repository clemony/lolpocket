import type { AuthError } from '@supabase/supabase-js'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const { useSupabaseClientMock } = vi.hoisted(() => ({
  useSupabaseClientMock: vi.fn(),
}))

mockNuxtImport('useSupabaseClient', () => useSupabaseClientMock)

describe('useSignInWithEmail', () => {
  const signInWithPassword = vi.fn()

  beforeEach(() => {
    signInWithPassword.mockReset()
    useSupabaseClientMock.mockReturnValue({
      auth: {
        signInWithPassword,
      },
    })
  })

  it('passes user credentials to Supabase auth', async () => {
    signInWithPassword.mockResolvedValue({ data: { user: null, session: null }, error: null })

    const { useSignInWithEmail } = await import('~/components/user/auth/useAuth')
    const error = await useSignInWithEmail('user@example.com', 'Pass1234!')

    expect(signInWithPassword).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'Pass1234!',
    })
    expect(error).toBeNull()
  })

  it('returns the Supabase auth error when login fails', async () => {
    const authError = { message: 'Invalid login credentials' } as AuthError
    signInWithPassword.mockResolvedValue({ data: { user: null, session: null }, error: authError })

    const { useSignInWithEmail } = await import('~/components/user/auth/useAuth')
    const error = await useSignInWithEmail('user@example.com', 'wrong-password')

    expect(error).toBe(authError)
  })
})
