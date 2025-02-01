import { jwtDecode } from 'jwt-decode'

export async function useSetAccount(session) {

  const ts = useTempStore()
 const as = useAccountStore()

    ts.sessionInfo = session
  ts.accessToken = session.access_token
  ts.refreshToken = session.refresh_token
  const decoded = jwtDecode<AuthRoleJwtPayload>(ts.accessToken)

  as.userId = session.user.id
  as.userRole = decoded.app_metadata.user_role
  useSetSummonerData(session.user.id)
  console.log('👑 - Hi', as.userRole)

}
