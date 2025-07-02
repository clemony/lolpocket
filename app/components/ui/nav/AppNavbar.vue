<script setup lang="ts">

const { signInOpen } = defineProps<{
signInOpen: boolean
}>()

const route = useRoute()
const userNavRef = ref(null)
const userNav = ref(null)

const emit = defineEmits(['reset:sign-in'])
watch(() => signInOpen, (newVal) => {
console.log("💠 - watch - newVal:", newVal)
if (newVal){
  userNav.value = 'signIn'
}
}
)

watch(() => userNav.value, (newVal) => {
console.log("💠 - watch - newVal:", newVal)
if (!newVal){

emit('reset:sign-in')
}
}
)

const { width} = useElementBounding(userNavRef)

watch(
  () => userNav.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const settingsOpen = ref(false)
const pinsOpen = ref(false)
</script>

<template>
<nav  class=" w-full justify-between    flex fixed flex-nowrap top-0 inset-x-0 w-screen h-16 items-center border-b border-b-b3/60 px-2  z-10">
  <div class="size-full absolute top-0 left-0 inset-0  bg-b1/88 backdrop-blur-md" :class="{ '!bg-b1/50': route.path == '/' }"/>

    <NavigationMenu disablePointerLeaveClose>
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

            <LazyNavigationMenuContent @focus-outside.prevent class="">
              <component :is="item.component"
              @open:pins="pinsOpen = true">

              </component>
            </LazyNavigationMenuContent>
          </NavigationMenuItem>
        </template>

      </NavigationMenuList>
      <NavigationMenuViewport  class="!mt-2  w-(--reka-navigation-menu-viewport-width) h-(--reka-navigation-menu-viewport-height) " />
    </NavigationMenu>



  <NavigationMenu disable-pointer-leave-close  ref="userNavRef" v-model:model-value="userNav"  class="justify-end">
    <NavigationMenuList class="justify-end px-1">

    <NavigationMenuItem v-for="item in userLinks" :key="item.name.toString()"  :value="item.name">

    <NavigationMenuTrigger :arrow="false">
      <hicon :name="item.icon.name"  :class="cn('dst shrink-0', item.icon.class)"/>
    </NavigationMenuTrigger>


            <LazyNavigationMenuContent @focus-outside.prevent class="0">
<component :is="item.component" @open:sign-in="userNav = 'signIn'"/>
            </LazyNavigationMenuContent>
          </NavigationMenuItem>

        <NavigationMenuLink as-child class="ml-2 mr-2.5">
    <CommandSearch />
  </NavigationMenuLink>


  <LazyAccountMenu  @open:settings="settingsOpen = true"  />

      </NavigationMenuList>

      <NavigationMenuViewport align="end" :class="cn('pt-4 -translate-x-1  w-(--reka-navigation-menu-viewport-width) h-(--reka-navigation-menu-viewport-height)', {'rounded-tr-none': userNav == 'signIn'})"
      :style="{
        left: `calc(((var(--reka-navigation-menu-viewport-width) - ${width}) * -1))`
      }"/>
    </NavigationMenu>

  </nav>


      <!-- <SummonerName class="normal-case font-medium" /> -->
    <LazySettingsSheet v-model:open="settingsOpen"/>
    <LazyPocketPinEditor  v-model:open="pinsOpen"/>

</template>

<style scoped></style>
