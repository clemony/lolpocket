<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="us.sidebarExpanded" as="div"
      :exit="{ width: 0, height: 0, opacity: 0 }"
      :transition="{ duration: 0.1, ease: 'easeInOut' }" class="group-disabled:opacity-70 grow justify-end absolute flex gap-2 dst  tracking-wide items-center  group-disabled:text-bc/60 group-not-disabled:text-bc/80 flex" :class="cn('right-11 text-[0.73rem] ', props.class)">
      <slot />
    </Motion>
  </AnimatePresence>
</template>