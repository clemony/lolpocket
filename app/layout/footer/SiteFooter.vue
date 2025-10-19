<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    v-once
    :class="cn(' w-full isolate  grid auto-rows-max  z-1', className)">
    <SiteMap />

    <SiteFooterData
      class="z-10 max-h-20 h-20 overflow-hidden min-h-20 py-5 border-t border-t-2 border-t-neutral" />
  </div>
</template>
