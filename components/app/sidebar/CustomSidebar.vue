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
    // ss.isSidebarOpen = false
  }
}
</script>

<template>
  <div class="drawer w-screen  max-h-[95vh]" >
    <input id="main-drawer" v-model="ss.isSidebarOpen" :disabled="ss.sidebarDisabled" type="checkbox" class="drawer-toggle" />
    <div id="drawer-content" class="drawer-content  h-[95vh] min-h-[95vh]  max-h-[95vh]">
      <slot />
    </div>

    <div class="drawer-side h-screen  ">
      <!--       <label aria-label="close sidebar" class="drawer-overlay opacity-10 absolute z-20 inset-0 top-0 left-0" @click="ss.isSidebarOpen = false" @mouseover="ss.isSidebarOpen = false"> </label> -->

      <div
        ref="sheet"
        v-mouse-in-element="onMouseInSheet" class=" " :class="cn('pr-12 pl-6 bg-b1/90 backdrop-blur-md min-w-110 overflow-hidden border-box border-y-b3 border-r-b3/80 border-r !top-[5vh] absolute left-20 h-[95vh] min-h-[95vh]  max-h-[95vh]   ', props.class)"
      >
        <transition-slide group class="h-inherit max-h-inherit ">
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
