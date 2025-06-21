<script setup lang="ts">
const us = useUiStore()
const as = useAccountStore()
const route = useRoute()
console.log('💠 - as:', as.userAccount)

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
</script>

<template>
  <nav class="flex gap-4 fixed flex-nowrap top-0 left-0 w-screen h-16 items-center border-b border-b-b3/60 px-5 z-10 bg-b1/88 backdrop-blur-md" :class="{ '!bg-b1/50': route.path == '/' }">
    <Btn class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </Btn>

    <NavigationMenu>
      <NavigationMenuList>
        <template v-for="item in navLinks" :key="item.name">
          <NavigationMenuItem v-if="item.link">
            <NavigationMenuLink @click="item.link ? navigateTo(item.link) : null">
              {{ item.name }}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem v-else-if="item.links">
            <NavigationMenuTrigger>
              {{ item.name }}
            </NavigationMenuTrigger>

            <LazyNavigationMenuContent class="min-w-90 min-h-90">
              <component :is="item.component" />
            </LazyNavigationMenuContent>
          </NavigationMenuItem>
        </template>
      </NavigationMenuList>
    </NavigationMenu>

    <Grow />
    <!-- -->

    <CommandSearch /><!--
    <SidebarAddPocket /> -->
    <!-- <SummonerInGameToggle  /> -->
    <AccountSidebar :account="as.userAccount" />
  </nav>
</template>

<style scoped></style>
