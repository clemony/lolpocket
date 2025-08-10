<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const client = useSupabaseClient()

onMounted(() => {
  document.documentElement.setAttribute(
    'data-theme',
    as()?.dataTheme ?? 'daylight',
  )
  ix().loadPatch()
})

client.auth.onAuthStateChange(async (event, session) => {
  if (event === 'INITIAL_SESSION' && session) {
    await hydrateUser(session)
  }
  else if (event === 'SIGNED_OUT') {
    as().resetUserAccount()
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

      if (as().userAccount.riot.puuid) {
        const { fetchSummoner, summoner } = useSummoner(
          as().userAccount.riot.puuid,
        )
        fetchSummoner()
      }
    }
    router.push('/nexus')
    location.reload()
  }
})

const floatingSidebar = ref(false)
watch(() => route.path, (newVal) => {
  const route1 = /\/summoner\/.*/
  console.log('💠 - watch - newVal:', newVal)

  if (route.path.match(route1))
    floatingSidebar.value = true

  else floatingSidebar.value = false
  console.log('💠 - floatingSidebar.value :', floatingSidebar.value)
}, { immediate: true })
console.log('💠 - (as().userAccount:', (as().userAccount))
</script>

<template>
  <SidebarProvider
    id="app"
    class="bg-tint-b2/40 overflow-hidden "
    :open="us().sidebarExpanded"
    style="--sidebar-width: 26rem; --sidebar-width-mobile: 26rem; --sidebar-icon-width:4rem;">
    <AppNavbar />

    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->
    <!-- [ inset id is for Teleports] -->
    <SidebarInset
      :class="cn('inset-wrapper relative size-full overflow-hidden min-h-screen overflow-y-auto max-w-screen *:z-1  ', { 'min-w-screen w-screen': floatingSidebar })">
      <slot />
    </SidebarInset>
    <NuxtLoadingIndicator
      style="
      top: auto;
      bottom: 0;
    background: repeating-linear-gradient(to right, var(--color-b1) 0%, rgb(52, 205, 254) 50%, var(--color-neutral) 100%);
    " />
    <Toast
      position="bottom-right"
      :expand="true"
      :duration="8000" />
    <UserSidebar
      side="right"
      :floating="floatingSidebar"
      :variant="floatingSidebar ? 'sidebar' : 'sidebar'"
      collapsible="offcanvas" />
    <!--  -->
  </SidebarProvider>
</template>