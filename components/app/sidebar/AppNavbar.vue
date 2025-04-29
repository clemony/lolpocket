<script setup lang="ts">
const us = useUiStore()
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
  <nav class="flex fixed flex-nowrap top-0 left-0 w-screen h-16 items-center border-b border-b-b3/60 px-5 z-10 bg-b1/82 backdrop-blur-md">
    <NavBtn class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </NavBtn>
<SidebarAddPocket  />
    <SidebarTitle />

<!-- <SummonerInGameToggle  /> -->
    <div class="grow justify-center items-center  flex">
    </div>

    <Tabs v-model:model-value="tabs" class="flex  py-0 overflow-y-visible" @update:model-value="navigateTo(tabs)">
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
    </Tabs>
    <LibraryMenu />
    <!--
    <NavBtn
      :class="{ 'btn-active': route.meta.section == 'about' }"
      @click="navigateTo('/docs')">
      Docs
    </NavBtn> -->

    <!--     <ContrastCommandSearch /> -->
    <NavBtn v-tippy="`${getDeviceKey()} K`" class="btn-sm btn-square  ml-3 mr-1 ">
      <icon name="search-sm" class="-mt-px shrink-0 size-8.25 " />
    </NavBtn>
    <NavBtn v-tippy="'Settings'" class=" btn-sm mr-3 btn-square disabled:hover:opacity-80" :class="{ 'btn-active  **:opacity-100 pointer-events-none': us.settingsOpen }" @click="handleSidebarOpen('settings')">
      <icon name="gear-solid" class=" dst opacity-70 size-5" />
    </NavBtn>
    <SidebarDropdown />
  </nav>
</template>

<style scoped></style>
