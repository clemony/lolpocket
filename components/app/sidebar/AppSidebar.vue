<script setup lang="ts">

const as = useAccountStore()
const us = useUiStore()
const target = ref<HTMLElement>(null)

onClickOutside(target, event => handleSidebarClose(us.sidebarMenuOpen))


const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

<template>
  <div class="size-full " ref="target">
      <div class="inset-0 top-0 left-0 flex-nowrap overflow-x-hidden  overflow-y-scroll gap-2.5 flex  flex-col pr-3">
        <SidebarLabel>
          Summoner
        </SidebarLabel>

        <LazyCollapsibleSummoner />

        <SidebarLabel>
          Craft
        </SidebarLabel>

        <BackpackLink />

        <LazyCollapsiblePocket :summoner="summoner" />

        <CalculatorLink />

        <SidebarLabel>
          Learn
        </SidebarLabel>

        <LazyCollapsibleData />

        <SidebarLabel>
          Hextech Tools
        </SidebarLabel>

        <LazyCollapsibleSettings />
        <LazyCollapsibleInfo />
      </div>
  </div>
</template>

<style scoped></style>
