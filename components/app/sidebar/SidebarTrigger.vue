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
  <div ref="trigger" v-mouse-in-element="onMouseInTrigger" :class=" cn(' items-center pt-[6.9vh] w-full  flex-col gap-4 left-0 top-[5vh] flex  inset-0 bg-b1 flex-nowrap pb-2 z-40  outline-0 before:size-full before:top-0 before:left-0 before:bg-transparent before:absolute before:z-0 before:transition-all before:duration-400 before:max-w-[66px] max-w-[70px]', props.class)">
    <slot />
  </div>
</template>

<style scoped>

</style>