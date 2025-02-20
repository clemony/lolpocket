<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ss = useSidebarStore()
const sheet = ref(null)

function onMouseInSheet({ isOutside }) {
  ss.isOutsideSheet = isOutside
  if (!isOutside && !ss.sidebarDisabled && !ss.isDragging) {
    ss.isSidebarOpen = true // ✅ Keeps sidebar open when hovering trigger
  }
  if (ss.isDragging) {
    ss.isSidebarOpen = false
  }
}
</script>

<template>
  <div class="drawer w-screen h-screen z-30">
    <input id="main-drawer" v-model="ss.isSidebarOpen" :disabled="ss.sidebarDisabled" type="checkbox" class="drawer-toggle" />
    <div id="drawer-content" class="drawer-content">
      <slot />
    </div>

    <div class="drawer-side size-screen  " :class="{ 'hidden pointer-events-none': ss.isDragging }">
      <!--   <div class="relative max-h-screen w-full h-screen">
      <label aria-label="close sidebar" class="drawer-overlay absolute z-60 inset-0 top-0 left-0" @click="ss.isSidebarOpen = false" @mouseover="ss.isSidebarOpen = false"> </label>
    </div> -->

      <div
        ref="sheet"
        v-mouse-in-element="onMouseInSheet" class=" " :class="cn('pl-19 pr-13 bg-b1/90 backdrop-blur-md min-w-110  border-r-b2 border-r !top-[5vh] absolute left-20 h-[95vh] shadow-[5px_0px_8px_0px_#00000007] rounded-r-lg', props.class)"
      >
        <transition-slide group>
          <component :is="ss.sidebarComponent" v-if="ss.sidebarComponent != null" :key="ss.sidebarComponent" class="pt-2" />
          <SidebarUser v-else />
        </transition-slide>
      </div>
    </div>
  </div>
</template>

<!--    slot =>
  <sidebarwrapper>

     <sidebartrigger></sidebartrigger>

  </sidebarwrapper>

    <sidebarcontent></sidebarcontent> -->

<style scoped>

</style>
