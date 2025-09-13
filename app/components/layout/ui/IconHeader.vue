<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <header

    :class="cn('relative gap-6 flex flex flex-nowrap   items-center  w-fit max-w-120 max-h-22 h-22', className)">
    <!-- icon -->

    <span class="relative size-fit *:size-20">
      <slot name="icon" />

    </span>
    <div class="flex flex-col w-full ">
      <!-- header pre-text -->
      <div
        class="inline-flex max-h-4   **:text-3   dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
        <slot name="pre-header" />
      </div>
      <div class="flex items-center justify-between w-full gap-8 mb-3 max-h-12 ">
        <!-- header name -->

        <slot name="title" />
      </div>

      <!-- header sub-text -->
      <div
        class="inline-flex max-h-4   **:text-3   dst flex-nowrap text-nowrap lowercase gap-4 pl-0.5 font-normal">
        <slot name="subheader" />
      </div>
    </div>
  </header>
</template>