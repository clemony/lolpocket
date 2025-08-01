<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const ds = useDataStore()
const as = useAccountStore()
const us = useUiStore()
const client = useSupabaseClient()
const ix = useIndexStore()

const user = computed(() => {
  if (!as?.userAccount?.id || !as.userAccount.riot.puuid)
    return null

  const ss = useSummonerStore()

  return {
    account: as.userAccount,
    summoner: ss.getSummoner(as.userAccount.riot.puuid),
  }
})

provide<User>('user', user.value)
console.log('💠 - user:', user)

onMounted(async () => {
  document.documentElement.setAttribute(
    'data-theme',
    as.dataTheme ? as.dataTheme : 'midnight',
  )
  /*   useAuth() */
  await ix.loadPatch()
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
        const { fetchSummoner, summoner } = useSummoner(
          as.userAccount.riot.puuid,
        )
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
  <SidebarProvider
    id="app"
    :open="us.sidebarExpanded"
    style="--sidebar-width: 26rem; --sidebar-width-mobile: 26rem;">
    <AppNavbar />
    <!--     <LazyAppCommand /> -->
    <SidebarInset class="relative ">
      <div class="relative size-full  overflow-x-hidden overflow-y-auto ">
        <slot />
      </div>
      <NuxtLoadingIndicator
        color="var(--color-n1) !top-auto !bottom-0"
        :style="{
          top: 'auto',
          bottom: 0,
        }" />
    </SidebarInset>
    <UserSidebar
      side="right"
      variant="sidebar"
      collapsible="offcanvas" />
    <Toast
      position="bottom-right"
      :expand="true"
      :duration="8000" />
  </SidebarProvider>
</template>