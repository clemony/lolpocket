export async function useSupabaseUserJwt(): Promise<JwtUser | null> {
  const client = useSupabaseClient()
  const user = (await client.auth.getUser()).data.user as JwtUser
  return user ?? null
}
