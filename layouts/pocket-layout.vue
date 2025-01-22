<script lang="ts" setup>
  import type { HTMLAttributes } from 'vue'

  const props = defineProps<{
    col1Size?: string
    col2Size?: string
    class?: HTMLAttributes['class']
  }>()
</script>

<template>
  <main class="size-screen max-h-screen min-h-screen">
    <LayoutSpacer class="!h-20" />
    <slot name="header" />
    <div class="h-3 w-full" />

    <div class="inset-0 overflow-hidden max-h-inherit h-[85vh]">
      <slot />
    </div>
  </main>
</template>

<style scoped></style>
