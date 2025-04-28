<script setup lang="ts">
const us = useUiStore()
const route = useRoute()

watch(
  () => us.commandOpen,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <nav class="flex fixed flex-nowrap top-0 left-0 w-screen h-16 items-center border-b border-b-b3/60 px-5 z-10 bg-b1/82 backdrop-blur-md">
    <NavBtn class=" btn-square" @click="navigateTo('/')">
      <h3 class="dst select-none !tracking-normal bg-transparent">
        LP
      </h3>
    </NavBtn>
    <span class="h-full w-9" />

    <SidebarTitle />
    <div class="grow justify-center items-center  flex">
    </div>

    <NavBtn :class="{ 'btn-active': route.meta.section == 'nexus' }" @click="navigateTo('/nexus')">
      Nexus
    </NavBtn>
    <NavBtn :class="{ 'btn-active': route.meta.section == 'match' }" @click="navigateTo('/summoner')">
      Summoner
    </NavBtn>
    <NavBtn class="" :class="{ 'btn-active': route.meta.section == 'analytics' }" @click="navigateTo('/analytics/champions')">
      Analytics
    </NavBtn>

    <NavBtn :class="{ 'btn-active': route.path == '/backpack' }" @click="navigateTo('/backpack')">
      Backpack
    </NavBtn>

    <NavBtn
      :class="{ 'btn-active': route.path == '/calculator' }"
      @click="navigateTo('/calculator')">
      Calculator
    </NavBtn>

    <LibraryMenu />
    <!--
    <NavBtn
      :class="{ 'btn-active': route.meta.section == 'about' }"
      @click="navigateTo('/docs')">
      Docs
    </NavBtn> -->

    <CommandSearch />
    <!--     <NavBtn v-tippy="'Settings'" class="disabled:btn-neutral, disabled:**:!text-nc disabled:hover:opacity-80" :class="{ 'btn-neutral **:!text-nc **:opacity-100 pointer-events-none': us.settingsOpen }" @click="handleSidebarOpen('settings')">
      <icon name="gear-solid" class=" dst opacity-70 size-4.75" />
    </NavBtn> -->
    <SidebarDropdown />
  </nav>
</template>

<style scoped></style>
