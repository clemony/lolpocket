import { jwtDecode } from 'jwt-decode'
import { toast } from 'vue-sonner'

export async function useSetAccount(session) {
  console.log('💠 - useSetAccount - session:', session)
  if (!session) {
    return
  }

  const as = useAccountStore()
  const decoded = jwtDecode<AuthRoleJwtPayload>(session.access_token)

  await decoded

  const name: userAccount['name'] = session.user.user_metadata.custom_claims.global_name || session.user.user_metadata.name || 'Summoner'

  const image = () => {
    if (session.user.user_metadata.custom_claims.global_name) {
      return session.user.user_metadata.custom_claims.global_name
    }
    else if (session.user.user_metadata.name) {
      return session.user.user_metadata.name
    }
  }

  as.userAccount.name = name
  as.userAccount.image = ref(null)
  as.userAccount.role = decoded.app_metadata.user_role
  as.userAccount.id = session.user.id
  as.userAccount.session = session
  as.userAccount.accessToken = session.access_token
  as.userAccount.refreshToken = session.refresh_token

  const riot = useSetSummonerData(session.user.id)
  console.log('💠 - useSetAccount - riot:', riot)
  console.log('👑 - Hi', as.userAccount.role)
  console.log('💠 - useSetAccount - as.userAccount:', as.userAccount)
}
