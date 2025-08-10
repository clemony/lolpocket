<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const floatingSidebar = ref(false)
watch(() => route.path, (newVal) => {
  const route1 = /\/summoner\/.*/
  console.log('💠 - watch - newVal:', newVal)

  if (route.path.match(route1))
    floatingSidebar.value = true

  else floatingSidebar.value = false
  console.log('💠 - floatingSidebar.value :', floatingSidebar.value)
}, { immediate: true })
</script>

<template>
  <SidebarProvider
    id="app"
    :open="us().sidebarExpanded"
    style="--sidebar-width: 26rem; --sidebar-width-mobile: 26rem;">
    <AppNavbar />

    <!--     <LazyAppCommand /> after:absolute after:bottom-0 after:w-full after:h-1/4 after:bg-neutral after:z-0 -->
    <!-- [ inset id is for Teleports] -->
    <SidebarInset
      :class="cn('inset-wrapper relative size-full overflow-hidden  *:z-1  ', { 'min-w-screen w-screen': floatingSidebar })">
      <LazyNuxtPage>
      </LazyNuxtPage>
    </SidebarInset>

    <UserSidebar
      side="right"
      :floating="floatingSidebar"
      :variant="floatingSidebar ? 'sidebar' : 'sidebar'"
      collapsible="offcanvas" />
  </SidebarProvider>
</template>