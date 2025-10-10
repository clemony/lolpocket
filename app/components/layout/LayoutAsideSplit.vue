<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
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
    <aside
      class="p-0.5 w-full max-w-1/5 overflow-x-hidden scrollbar-hidden overflow-y-auto sticky top-49">
      <slot name="aside"></slot>
    </aside>
    <div class="flex-1 size-full max-h-[84vh] overflow-y-auto p-0.5">
      <div class="space-y-12 lg:max-w-4xl pb-12">
        <slot />
      </div>
    </div>
  </div>
</template>
