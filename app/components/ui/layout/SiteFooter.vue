<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <div :class="cn(' w-full isolate  grid auto-rows-max  z-1', className)">
    <SiteMap />

    <HomeFooter class="z-10 max-h-26 h-26 overflow-hidden min-h-26 py-5 border-t border-t-2 border-t-neutral" />
  </div>
</template>