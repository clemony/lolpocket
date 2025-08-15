<script setup lang="ts">
import { navLinks } from '~/routes'

const route = useRoute()
const userNav = shallowRef(null)
const as = useAccountStore()

const pinsOpen = shallowRef(false)

/* function resetInbox(e) {
  if (!as.userAccount)
    return

  if (e == 'Messages') {
    as.userAccount.inbox.newNotifications = 0
  }
  if (e == 'Notifications') {
    as.userAccount.inbox.newMessages = 0
  }
}
 */
function verifySignIn() {
  if (!as?.userAccount?.id)
    userNav.value = 'signIn'
}
</script>

<template>
  <nav
    class="w-full absolute !py-0 flex flex-nowrap top-0 inset-x-0 w-full h-(--navbar-height)   items-center px-3  z-10">
    <div
      class="size-full absolute top-0 left-0 inset-0  bg-gradient-to-r from-transparent to-b1/30 backdrop-blur-lg"
      :class="{ '!bg-b1/50': route?.path == '/', '': route?.path.match(/\/summoner\/.*/) || route?.path.match(/\/pocket\/.*/) }" />

    <NuxtLink
      class="btn !btn-square btn-ghost size-12 mr-4"
      to="/">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </NuxtLink>

    <NavigationMenu
      :skip-delay-duration="500"
      :disable-click-trigger="isDesktop()">
      <NavigationMenuList class="gap-x-2">
        <template
          v-for="item in navLinks"
          :key="item.name">
          <NavigationMenuItem v-if="item.link">
            <NavMenuLink @click="item.link ? navigateTo(item.link) : abortNavigation">
              {{ item.name }}
            </NavMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem v-else-if="item.links">
            <NavigationMenuTrigger
              :arrow="false"
              @click="isDesktop() ? navigateTo(item.link) : abortNavigation">
              {{ item.name }}
            </NavigationMenuTrigger>
            <component
              :is="item.component"

              @open:sign-in="verifySignIn()" />
          </NavigationMenuItem>
        </template>

        <NavigationMenuViewport
          class="translate-y-3 w-(--reka-navigation-menu-viewport-width) h-(--reka-navigation-menu-viewport-height)  ">
        </NavigationMenuViewport>

        <NavigationMenuIndicator class="-translate-y-1 drop-shadow-xs scale-150" />
      </NavigationMenuList>
    </NavigationMenu>
    <Grow />
    <SidebarTriggerPanel />
  </nav>

  <LazyPocketPinEditor v-model:open="pinsOpen" />
</template>

<style scoped></style>
