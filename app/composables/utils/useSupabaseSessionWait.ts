export async function useSupabaseSessionWait() {
  const session = useSupabaseSession()
  if (session.value)
    return session.value

  // waits reactively until session.value is not null
  await until(session).toBeTruthy()
  return session.value
}