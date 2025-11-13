export async function useSupabaseUserJwt(): Promise<any> {
  const client = useSupabaseClient();
  const user = (await client.auth.getUser()).data.user;
  return user ?? null;
}
