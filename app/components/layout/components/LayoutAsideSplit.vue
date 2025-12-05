<script lang="ts" setup>
const { fullWidth, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  fullWidth?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn('z-auto flex size-full flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12',
        className,
      )
    ">
    <aside class="sticky top-40 z-2 w-1/5 self-start">
      <div
        class="
          scrollbar-none max-h-[calc(100vh-5.5rem)] overflow-x-visible
          overflow-y-auto pr-2 pl-0.5
        ">
        <slot name="aside"></slot>
      </div>
    </aside>
    <div class="size-full flex-1 p-0.5">
      <div :class="cn('space-y-12 pb-12', { 'lg:max-w-4xl': !fullWidth })">
        <slot />
      </div>
    </div>
  </div>
</template>
