<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    v-once
    :style="{ height: '498px' }"
    :class="cn('bottom-0 z-1 mb-0 grid w-full auto-rows-max', className)"
  >
    <SiteMap />

    <SiteFooterData
      class="border-t-neutral z-10 h-20 max-h-20 min-h-20 overflow-hidden border-t-2 py-5"
    />
  </div>
</template>
