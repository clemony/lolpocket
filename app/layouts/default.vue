<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const as = useAccountStore()
const us = useUiStore()
const client = useSupabaseClient()
const ix = useIndexStore()

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

    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->
    <!-- [ inset id is for Teleports] -->
    <SidebarInset
      :class="cn('inset-wrapper relative size-full   *:z-1  overflow-y-auto')">
      <slot />
    </SidebarInset>
    <NuxtLoadingIndicator
      color="var(--color-n1) !top-auto !bottom-0"
      :style="{
        top: 'auto',
        bottom: 0,
      }" />
    <Toast
      position="bottom-right"
      :expand="true"
      :duration="8000" />

    <UserSidebar
      side="right"
      variant="sidebar"
      collapsible="offcanvas" />
  </SidebarProvider>
</template>