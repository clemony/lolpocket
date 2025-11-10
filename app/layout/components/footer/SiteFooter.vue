<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    v-once
    :class="cn('isolate z-1 grid w-full auto-rows-max', className)">
    <SiteMap />

    <SiteFooterData
      class="
        z-10 h-20 max-h-20 min-h-20 overflow-hidden border-t border-t-2
        border-t-neutral py-5
      " />
  </div>
</template>
