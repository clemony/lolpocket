<script setup lang="ts">
const us = useUiStore()
const as = useAccountStore()
const route = useRoute()

watch(
  () => us.commandOpen,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const tabs = ref('nexus')
onMounted (() => {
  tabs.value = route.path
})
</script>

<template>
  <nav class="flex gap-4 fixed flex-nowrap top-0 left-0 w-screen h-16 items-center border-b border-b-b3/60 px-5 z-10 bg-b1/82 backdrop-blur-md">
    <NavBtn class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </NavBtn>
    <CommandSearch />
    <!--     <SidebarTitle /> -->

    <!-- <SummonerInGameToggle  /> -->
    <div class="grow justify-center items-center  flex">
    </div>

    <Tabs v-model:model-value="tabs" class="flex items-center self-center  py-0 overflow-y-visible" @update:model-value="navigateTo(tabs)">
      <IndicatorTabsList class="grid-cols-5 bg-transparent shadow-none inset-shadow-none border-none py-0 overflow-y-visible h-10">
        <IndicatorTabsTrigger value="/nexus" :class="{ 'btn-active': route.meta.section == 'nexus' }">
          Nexus
        </IndicatorTabsTrigger>
        <IndicatorTabsTrigger value="/summoner" :class="{ 'btn-active': route.meta.section == 'match' }">
          Summoner
        </IndicatorTabsTrigger>
        <IndicatorTabsTrigger value="/analytics/champions" class="" :class="{ 'btn-active': route.meta.section == 'analytics' }">
          Analytics
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="/backpack" :class="{ 'btn-active': route.path == '/backpack' }">
          Backpack
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger
          value="/calculator"
          :class="{ 'btn-active': route.path == '/calculator' }">
          Calculator
        </IndicatorTabsTrigger>
        <TabIndicator class="*:bg-b2/60 px-1" />
      </IndicatorTabsList>
      <LibraryMenu />
    </Tabs>
    <!--
    <NavBtn
      :class="{ 'btn-active': route.meta.section == 'about' }"
      @click="navigateTo('/docs')">
      Docs
    </NavBtn>    <SidebarAddPocket /> -->

    <AccountSidebar :account="as.userAccount" :summoner="as.userSummoner" />
  </nav>
</template>

<style scoped></style>
