import type { Provider, Session } from '@supabase/supabase-js'
import { toast } from 'vue-sonner'

// TODO env var url
export async function useSignIn(provider: Provider) {
  const client = useSupabaseClient()
  const { data, error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `http://localhost:8080/redirect`,
    },
  })
  if (error) {
    console.error('Error logging in with Discord:', error)
  }
}

export async function useSignInWithEmail(email: string, password: string) {
  const client = useSupabaseClient()
  const { data, error } = await client.auth.signInWithPassword({
    email: 'valid.email@supabase.io',
    password: 'example-password',
  })
  if (error) {
    console.error('Error logging in with email:', error)
  }
}

async function useSignUpNewUser(email: string, password: string) {
  const client = useSupabaseClient()
  const { data, error } = await client.auth.signUp({
    email,
    options: {
      emailRedirectTo: `http://localhost:8080/welcome`,
    },
    password,
  })
  if (error) {
    console.error('Error logging in with Discord:', error)
  }
}

export async function useResetPassword(email: string) {
  const client = useSupabaseClient()

  await client.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://example.com/account/update-password',
  })
}

export async function useChangePassword(password: string) {
  const client = useSupabaseClient()
  await client.auth.updateUser({ password })
}

export async function useSignOut() {
  const supabaseClient = useSupabaseClient()
  await supabaseClient.auth.signOut()
  as().loggedIn = false
  console.log('Successfully logged out')
  toast.success('Successfully logged out')
}
