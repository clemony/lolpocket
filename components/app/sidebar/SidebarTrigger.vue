<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const trigger = ref(null)

const ss = useSidebarStore()
function onMouseInTrigger({ isOutside }) {
  ss.isOutsideTrigger = isOutside
}
</script>

<template>
  <div class=" h-[95vh] z-10 min-h-[95vh] mt-[5.8vh] max-h-[95vh] relative bg-b1 transition-all" duration-400>
    <div ref="trigger" v-mouse-in-element="onMouseInTrigger" :class=" cn(' items-center h-[95vh] min-h-[95vh]  pt-6  max-h-[95vh] w-full  flex-col gap-4 left-0  flex absolute  inset-0 bg-b2/40 flex-nowrap pb-2   outline-0  max-w-[70px]', props.class)">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>