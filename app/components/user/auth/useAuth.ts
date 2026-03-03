import type { Provider } from "~/domain/lp/external/authProviders"

export async function useSignIn(provider: Provider) {
  const config = useRuntimeConfig()
  const client = useSupabaseClient()
  const { data, error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: config.public.authRedirect,
    },
  })
  if (error) {
    console.error("Error logging in with Discord:", error)
  }
}

export async function useSignInWithEmail(email: string, password: string) {
  const client = useSupabaseClient()
  const { error } = await client.auth.signInWithPassword({ email, password })
  if (error) {
    console.error("Error logging in with email:", error)
    return error
  }
  return null
}

export async function useSignUpNewUser(email: string, password: string) {
  const config = useRuntimeConfig()
  const client = useSupabaseClient()
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: config.public.newUserRedirect,
    },
  })
  if (error) {
    console.error("Error logging in with Discord:", error)
    return error
  }
}

export async function useResetPassword(email: string) {
  const client = useSupabaseClient()

  await client.auth.resetPasswordForEmail(email, {
    redirectTo: "http://example.com/account/update-password",
  })
}

export async function useChangePassword(password: string) {
  const client = useSupabaseClient()
  await client.auth.updateUser({ password })
}

export async function useSignOut() {
  const toast = useToast()
  const supabaseClient = useSupabaseClient()
  await supabaseClient.auth.signOut()
  console.log("Successfully logged out")
  toast.add({ title: "Successfully logged out" })
}

const signInWithOtp = async (email: string) => {
  const supabase = useSupabaseClient()
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  })
  if (error) console.log(error)
}
