<script setup lang="ts">

const us = useUiStore()
const as = useAccountStore()
const route = useRoute()
const userNav = ref(null)


const { width} = useElementBounding(userNav)

watch(
  () => us.commandOpen,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const tabs = ref('/nexus')

function handleMenu() {
  if (tabs.value.charAt(0) != '/')
    return
  navigateTo(tabs.value)
}

const settingsOpen = ref(false)
const pinsOpen = ref(false)
</script>

<template>
<nav  class=" w-full justify-between    flex fixed flex-nowrap top-0 inset-x-0 w-screen h-14 items-center border-b border-b-b3/60 px-2  z-10">
  <div class="size-full absolute top-0 left-0 inset-0  bg-b1/88 backdrop-blur-md" :class="{ '!bg-b1/50': route.path == '/' }"/>

    <NavigationMenu disablePointerLeaveClose>
      <NavigationMenuList class="gap-x-2">
    <NavMenuLink class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </NavMenuLink>


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

            <LazyNavigationMenuContent @focus-outside.prevent class="min-w-90 min-h-90">
              <component :is="item.component"
              @open:pins="pinsOpen = true">

              </component>
            </LazyNavigationMenuContent>
          </NavigationMenuItem>
        </template>

      </NavigationMenuList>
      <NavigationMenuViewport  class="!mt-2" />
    </NavigationMenu>



  <NavigationMenu disablePointerLeaveClose  ref="userNav"  class="justify-end">
    <NavigationMenuList class="justify-end ">


    <NavigationMenuItem v-for="item in userLinks" :key="item.name.toString()">

    <NavigationMenuTrigger :arrow="false">
      <icon :name="item.icon.name"  :class="cn('dst shrink-0', item.icon.class)"/>
    </NavigationMenuTrigger>


            <LazyNavigationMenuContent @focus-outside.prevent class="min-w-90 min-h-90">
<component :is="item.component"/>
            </LazyNavigationMenuContent>
          </NavigationMenuItem>

        <NavigationMenuLink as-child class="ml-2 mr-4">
    <CommandSearch />
  </NavigationMenuLink>


  <LazyAccountMenu  @open:settings="settingsOpen = true"  />
      </NavigationMenuList>

      <NavigationMenuViewport align="end" class=" !mt-1 w-(--reka-navigation-menu-viewport-width) h-(--reka-navigation-menu-viewport-height) !right-0 absolute"
      :style="{
        left: `calc((var(--reka-navigation-menu-viewport-width) - ${width}) * -1)`
      }"/>
    </NavigationMenu>

  </nav>


      <!-- <SummonerName class="normal-case font-medium" /> -->
    <LazySettingsSheet v-model:open="settingsOpen"/>
    <LazyPocketPinEditor  v-model:open="pinsOpen"/>

</template>

<style scoped></style>
