<script lang="ts" setup>
const route = useRoute()
const ss = useSidebarStore()

const ModuleDrawer = defineAsyncComponent(() => import('components/summoner/modules/ModuleDrawer.vue'))
const SidebarUser = defineAsyncComponent(() => import('components/summoner/sidebar/SidebarUser.vue'))

watch(
  () => ss.sidebarComponent,
  (newVal) => {
    if (newVal == null) {
      ss.sidebarComponent = SidebarUser
    }
  },
)
</script>

<template>
  <div class=" grid grid-cols-[66px_auto]">
    <SidebarTrigger>
      <button
        class=" aspect-square size-12 mb-8 rounded-full !pointer-events-auto !cursor-pointer grayscale hover:grayscale-0 shadow-sm drop-shadow-sm  transition-all duration-300 "
        :class="{ 'grayscale-0  !brightness-115 !contrast-85 !opacity-90': ss.isSidebarOpen }"
      >
        <SummonerIcon />
      </button>

      <SidebarNav :model-value="summonerLinks" />

      <transition-slide class="size-full pt-6 flex flex-col items-center gap-4 " group>
        <button
          v-if="route.name == 'Board'"
          v-tippy="'Modules'"
          class="btn  size-14  pointer-events-auto btn-square  rounded-full hover:bg-b2/85 drawer-button "
          :class="{ 'bg-b2/85': ss.isSidebarOpen && ss.sidebarComponent == ModuleDrawer }"
          @mouseenter="ss.sidebarComponent = ModuleDrawer" @mouseleave="ss.onSidebarButtonLeave()"
        >
          <icon name="ph:squares-four-light" class="size-6.5 dst " />
        </button>

        <button v-if="route.name == 'Board'" v-tippy="'Put away all modules'" class="btn  size-14  pointer-events-auto   rounded-full hover:bg-b2/85 drawer-button " @click="resetModules()">
          <icon name="hugeicons:clean" class="size-6.5 shrink-0 dst " />
        </button>
      </transition-slide>
    </SidebarTrigger>
    <NuxtPage
      :transition="{
        name: 'push-up',
        mode: 'out-in',
      }"
    />
  </div>

  <Sidebar />
</template>

<style scoped>

</style>