<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <div :class="cn(' w-full grid auto-rows-max before:bg-neutral before:z-0 before:fixed before:h-[30vh] before:w-full before:bottom-0 before:left-0 z-5', className)">
    <SiteMap />

    <HomeFooter class="z-10 h-26 min-h-26 py-5 border-t border-t-2 border-t-neutral" />
  </div>
</template>