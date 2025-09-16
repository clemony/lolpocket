<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex  flex-col z-auto space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0',
        className,
      )
    ">
    <aside
      class="size-full p-0.5 max-w-1/5 overflow-x-hidden overflow-y-auto sticky top-49">
      <slot name="aside"></slot>
    </aside>
    <div class="flex-1 lg:max-w-4xl p-0.5">
      <div class="space-y-12">
        <slot />
      </div>
    </div>
  </div>
</template>
