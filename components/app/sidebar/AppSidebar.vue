<script setup lang="ts">
const as = useAccountStore()
const us = useUiStore()
const target = ref<HTMLElement>(null)

onClickOutside(target, event => handleSidebarClose('menu'))

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

<template>
  <div ref="target" class="size-full ">
    <SidebarTitle>
      <LazyLightSidebarSearch />
    </SidebarTitle>
    <div class="inset-0 top-0 pt-5 left-0 flex-nowrap overflow-x-hidden  overflow-y-scroll gap-2.5 flex  flex-col px-3">
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

      <LazyCollapsibleInfo />
    </div>
  </div>
</template>

<style scoped></style>
