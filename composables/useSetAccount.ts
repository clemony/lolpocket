import { jwtDecode } from 'jwt-decode'

export async function useSetAccount(session) {
  const ts = useTempStore()
  const as = useAccountStore()

  ts.sessionInfo = session
  const decoded = jwtDecode<AuthRoleJwtPayload>(session.access_token)
  as.userId = session.user.id
  as.userRole = decoded.app_metadata.user_role
  console.log('👑 - Hi', as.userRole)

  useSetSummonerData()
}
