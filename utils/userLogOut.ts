export async function signOut() {
  const client = useSupabaseClient()
  await client.auth.signOut()
}
