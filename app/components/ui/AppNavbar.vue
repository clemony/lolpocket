<script setup lang="ts">
const us = useUiStore()
const as = useAccountStore()
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
  <nav class="flex gap-4 fixed flex-nowrap top-0 left-0 w-screen h-16 items-center border-b border-b-b3/60 px-5 z-10 bg-b1/88 backdrop-blur-md">
    <Btn class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </Btn>
    <CommandSearch /><!--
    <SidebarAddPocket /> -->
    <!-- <SummonerInGameToggle  /> -->
    <Grow />
    <!-- -->
    <IndicatorMenubar v-model:model-value="tabs" @update:model-value="handleMenu()">
      <IndicatorTabsList class=" **:text-3  bg-transparent shadow-none inset-shadow-none border-none py-0 overflow-y-visible h-10" :class="{ 'grid-cols-6': as.userAccount.session, 'grid-cols-5': !as.userAccount.session }">
        <IndicatorTabsTrigger value="/nexus">
          Nexus
        </IndicatorTabsTrigger>
        <IndicatorTabsTrigger value="/summoner">
          Summoner
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="/backpack">
          Backpack
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger
          value="/calculator">
          Calculator
        </IndicatorTabsTrigger>

        <IndicatorMenu
          value="library">
          <IndicatorMenuTrigger>
            Library
          </IndicatorMenuTrigger>
          <NestedMenu :routes="libraryLinks" :align-offset="-8">
            <PatchNotesLink />
          </NestedMenu>
        </IndicatorMenu>

        <IndicatorMenu
          v-if="as.userAccount.session"
          value="data">
          <IndicatorMenuTrigger>
            <SummonerName class="capitalize" />
          </IndicatorMenuTrigger>
          <NestedMenu :routes="dataRoutes" :align-offset="-15" class="!ml-4">
            <PredictionsLink />
          </NestedMenu>
        </IndicatorMenu>

        <TabIndicator class="*:bg-b2/60 px-1" />
      </IndicatorTabsList>
    </IndicatorMenubar>

    <AccountSidebar :account="as.userAccount" />
  </nav>
</template>

<style scoped></style>
