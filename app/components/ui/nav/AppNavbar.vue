<script setup lang="ts">
const route = useRoute()
const userNavRef = ref(null)
const userNav = ref(null)
const as = useAccountStore()

const { toggleSignIn } = inject('signIn', {
  signInOpen: ref(false),
  toggleSignIn: () => {},
})

watch(() => userNav.value, (newVal) => {
  if (!newVal) {
    toggleSignIn()
  }
})
const { width } = useElementBounding(userNavRef)

const settingsOpen = ref(false)
const pinsOpen = ref(false)
const adminOpen = ref(false)

function resetInbox(e) {
  if (!as.userAccount)
    return

  if (e == 'Messages') {
    as.userAccount.inbox.newNotifications = 0
  }
  if (e == 'Notifications') {
    as.userAccount.inbox.newMessages = 0
  }
}

function verifySignIn() {
  if (!as.currentSession?.session)
    userNav.value = 'signIn'
}
</script>

<template>
  <nav class=" w-full justify-between    flex fixed flex-nowrap top-0 inset-x-0 w-screen h-(--navbar-height) items-center border-b border-b-b3/60 px-3  z-10">
    <div class="size-full absolute top-0 left-0 inset-0  bg-b1/88 backdrop-blur-md" :class="{ '!bg-b1/50': route?.path == '/' }" />

    <NavigationMenu disable-pointer-leave-close>
      <NavigationMenuList class="gap-x-2">
        <NavigationMenuLink class="btn !btn-square btn-ghost size-12" @click="navigateTo('/')">
          <h3 class="dst select-none !tracking-normal bg-transparent">
            LP
          </h3>
        </NavigationMenuLink>

        <template v-for="item in navLinks" :key="item.name">
          <NavigationMenuItem v-if="item.link">
            <NavMenuLink @click="item.link ? navigateTo(item.link) : null">
              {{ item.name }}
            </NavMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem v-else-if="item.links">
            <NavigationMenuTrigger>
              {{ item.name }}
            </NavigationMenuTrigger>

            <LazyNavigationMenuContent class="" @focus-outside.prevent>
              <component
                :is="item.component"
                @open:pins="pinsOpen = true">
              </component>
            </LazyNavigationMenuContent>
          </NavigationMenuItem>
        </template>
      </NavigationMenuList>

      <NavigationMenuViewport class="!mt-2  w-(--reka-navigation-menu-viewport-width) h-(--reka-navigation-menu-viewport-height) " />
    </NavigationMenu>

    <NavigationMenu ref="userNavRef" v-model:model-value="userNav" :disable-click-trigger="isDesktop()" disable-pointer-leave-close class="justify-end">
      <NavigationMenuList class="justify-end px-1 z-1">
        <NavigationMenuItem v-for="item in userLinks" :key="item.name.toString()" :value="item.name">
          <NavigationMenuTrigger :arrow="false" @click="isDesktop() ? navigateTo('/backpack') : null">
            <hicon :name="item.icon.name" :class="cn('dst shrink-0', item.icon.class)" />
          </NavigationMenuTrigger>

          <LazyNavigationMenuContent class="0" @focus-outside.prevent>
            <component :is="item.component" @open:sign-in="verifySignIn()" @open:pins="pinsOpen = true" />
          </LazyNavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuLink as-child class="ml-2 mr-2.5">
          <CommandSearch />
        </NavigationMenuLink>

        <LazyAccountMenu :nav="userNav" @open:settings="settingsOpen = true" @open:admin="adminOpen = true" />
      </NavigationMenuList>

      <NavigationMenuViewport
        align="end"
        wrapper-class="pt-4 z-0"
        :class="cn(' translate-x-1   translate-y-2', { '': userNav == 'signIn' })"
        :style="{
          left: `calc(((var(--reka-navigation-menu-viewport-width) - ${width}) * -1))`,
        }" />
    </NavigationMenu>
  </nav>


  <LazySettingsSheet v-model:open="settingsOpen" hydrate-on-interact />

  <LazyPocketPinEditor v-model:open="pinsOpen" />

  <LazyAdminSheet
    v-if="as && as.userAccount?.role === 'admin'"
    v-model:open="adminOpen"
    :account="as.userAccount" />
</template>

<style scoped></style>
