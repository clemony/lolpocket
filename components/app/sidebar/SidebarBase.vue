<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'

const emit = defineEmits(['update:hovered', 'update:open', 'update:component'])

const trigger = ref(null)

const ss = useSidebarStore()
function onMouseInTrigger({ isOutside }) {
  ss.isOutsideTrigger = isOutside
}
</script>

<template>
  <div class="h-screen w-full relative">
    <Sheet id="sheet" v-model:open="ss.isSidebarOpen">
      <div ref="trigger" v-mouse-in-element="onMouseInTrigger" class="  items-center pt-[6.9vh]  flex-col gap-4  flex absolute inset-0 bg-b1 flex-nowrap pb-2  !z-65  outline-0 ">
        <slot />

      <!-- sheet here -->
      </div>
    </Sheet>
  </div>
</template>

<style scoped>

</style>
