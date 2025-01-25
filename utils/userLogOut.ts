import { toast } from 'vue-sonner'

const router = useRouter()

export async function signOut() {
  const { auth } = useSupabaseClient()

  const { error } = await auth.signOut()
  console.log('😰 - Signed Out')

  useAccountStore().userRole = null
  useTempStore().sessionInfo = null
  router.push('/')
  toast.success('Successfully logged out')
}
