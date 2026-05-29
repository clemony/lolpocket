function authUrl(configuredUrl: string, fallbackPath: string) {
  const config = useRuntimeConfig()
  const fallbackOrigin = config.public.baseUrl || "http://localhost:8080"
  const parsed = new URL(configuredUrl || fallbackPath, fallbackOrigin)
  const path = `${parsed.pathname}${parsed.search}${parsed.hash}`
  const origin = import.meta.client ? window.location.origin : fallbackOrigin

  return new URL(path, origin).toString()
}

export async function useSignIn(provider: SbProviderKey<string>) {
  const config = useRuntimeConfig()
  const client = useSupabaseClient()
  const redirectTo = authUrl(config.public.authRedirect, "/auth/redirect")
  const { data, error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
      skipBrowserRedirect: true
    }
  })
  if (error) {
    console.error("Error logging in with Discord:", error)
    return
  }

  if (!data.url) {
    console.error("Supabase did not return an OAuth redirect URL", data)
    return
  }

  if (import.meta.client) {
    const expectedVerifierCookie = `${config.public.supabase.cookiePrefix}-code-verifier`
    const cookieNames = document.cookie
      .split(";")
      .map((cookie) => cookie.trim().split("=")[0])
      .filter(Boolean)

    console.group("Supabase OAuth PKCE debug")
    console.log("provider:", provider)
    console.log("window.location.origin:", window.location.origin)
    console.log("redirectTo:", redirectTo)
    console.log("provider URL:", data.url)
    console.log("expected verifier cookie:", expectedVerifierCookie)
    console.log(
      "has expected verifier cookie:",
      cookieNames.includes(expectedVerifierCookie)
    )
    console.log("cookie names:", cookieNames)
    console.log("document.cookie:", document.cookie)
    console.groupEnd()

    window.location.assign(data.url)
    /*     window.setTimeout(() => {
    }, 20000) */
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
      emailRedirectTo: authUrl(config.public.newUserRedirect, "/welcome")
    }
  })
  if (error) {
    console.error("Error logging in with Discord:", error)
    return error
  }
}

export async function useResetPassword(email: string) {
  const client = useSupabaseClient()

  await client.auth.resetPasswordForEmail(email, {
    redirectTo: "http://example.com/account/update-password"
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
  navigateTo("/")
  console.log("Successfully logged out")
  toast.add({ title: "Successfully logged out", orientation: "horizontal" })
}

const signInWithOtp = async (email: string) => {
  const config = useRuntimeConfig()
  const supabase = useSupabaseClient()
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: authUrl(config.public.authRedirect, "/auth/redirect")
    }
  })
  if (error) console.log(error)
}
