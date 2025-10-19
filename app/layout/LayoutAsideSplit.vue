<script lang="ts" setup>
const { fullWidth, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  fullWidth?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex size-full flex-col z-auto space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0',
        className,
      )
    ">
    <aside class=" sticky z-2 top-40 self-start w-1/5">
      <div class="max-h-[calc(100vh-5.5rem)] pr-2 pl-0.5 overflow-x-visible scrollbar-none overflow-y-auto">
        <slot name="aside"></slot>
      </div>
    </aside>
    <div class="flex-1 size-full  p-0.5">
      <div :class="cn('space-y-12  pb-12', { 'lg:max-w-4xl': !fullWidth })">
        <slot />
      </div>
    </div>
  </div>
</template>
