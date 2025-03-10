<script setup lang="ts">
import { toast } from 'vue-sonner'

const ts = useTempStore()
const as = useAccountStore()
const ds = useDataStore()
const appConfig = useAppConfig()
const useHead = useHeader()

const router = useRouter()
const route = useRoute()
// const history = router.options.history;

const client = useSupabaseClient()
client.auth.onAuthStateChange(async (event, session) => {
  console.log('💠 - client.auth.onAuthStateChange - session:', session)
  console.log('💠 - client.auth.onAuthStateChange - event:', event)
  if (event === 'INITIAL_SESSION') {
    setUserAccount(session)
  }
  else if (event === 'SIGNED_OUT') {
    as.userAccount = defaultUser
    console.log('😰 - Signed Out')
    if (route.path != '/') {
      router.push('/')
    }
    else {
      location.reload()
    }
    toast.success('Successfully logged out')
  }
  else {
    const { data, error } = await client.auth.setSession({ access_token: as.userAccount.accessToken, refresh_token: as.userAccount.refreshToken })
    as.userAccount.accessToken = data.session.access_token
    as.userAccount.refreshToken = data.session.refresh_token
    as.userAccount.session = data.session
  }
})

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  getPatch()
})
</script>

<template>
  <NuxtLayout>
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<style></style>
