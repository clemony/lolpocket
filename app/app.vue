<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'img/favicon.png',
    },
  ],
})

const as = useAccountStore()
const client = useSupabaseClient()
const router = useRouter()
const route = useRoute()
const ix = useIndexStore()
const appConfig = useAppConfig()

const signInOpen = ref<boolean>(false)

const toggleSignIn = useToggle(signInOpen)

const signIn = Symbol('signIn') as InjectionKey<{
  signInOpen: Ref<boolean>
  toggleSignIn: () => void
}>
watch(() => signInOpen.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
provide(signIn, {
  signInOpen,
  toggleSignIn,
} as const)

const user = computed (() => {
  if (!as.currentSession.session || !as.userAccount.riot.puuid)
    return null

  const ss = useSummonerStore()

  return {
    account: as.userAccount,
    summoner: ss.getSummoner(as.userAccount.riot.puuid),
  }
})

provide<User>('user', user.value)
console.log("💠 - user:", user)

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  /*   useAuth() */
  const us = useUiStore()
  const ix = useIndexStore()
  ix.loadDefaults()
})

client.auth.onAuthStateChange(async (event, session) => {
  console.log('💠 Auth change:', event)

  if (event === 'INITIAL_SESSION' && session) {
    console.log(
      `💠 - client.auth.onAuthStateChange - "INITIAL_SESSION":`,
      'INITIAL_SESSION',
    )
    await hydrateUser(session)
  }
  else if (event === 'SIGNED_OUT') {
    as.resetUserAccount()
    if (route.path !== '/')
      router.push('/')
    else location.reload()
  }
  else if (event === 'SIGNED_IN' && session) {
    const { data } = await client.auth.setSession({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    })

    if (data.session) {
      await hydrateUser(data.session)

      if (as.userAccount.riot.puuid) {
        const { fetchSummoner, summoner } = useSummoner(as.userAccount.riot.puuid)
        fetchSummoner()
        console.log('💠 - client.auth.onAuthStateChange - summoner:', summoner)
      }
    }
    router.push('/')
    location.reload()
  }
})
</script>

<template>
  <div id="app" vaul-drawer-wrapper class="flex flex-nowrap h-screen w-screen overflow-hidden bg-b1" :class="{ '!bg-b2/10': route.name == 'card' }">
<!--     <button class="btn mt-36" @click="toggleSignIn()">
      hihihihi
    </button> -->

    <AppNavbar />

    <LazyAppCommand />

    <div class="flex h-screen min-h-screen w-full overflow-hidden relative grow">
      <div class="inset-0 left-0 top-0 z-0 absolute" :class="{ 'overflow-y-auto ': route.path != '/' }">
        <Toast
          position="top-right"
          :expand="true"
          :duration="Infinity" />

        <LazyNuxtPage
          :transition="{
            name: 'global-page-transition',
            mode: 'out-in',
          }" />
      </div>
    </div>

    <NuxtLoadingIndicator color="var(--color-n1) bottom-0" />
  </div>
</template>

<style></style>
