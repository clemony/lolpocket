<script lang="ts" setup>
const { thumbnailSrc } = defineProps<{
  thumbnailSrc: string | null
}>()
</script>

<template>
  <div
    class="absolute inset-0 z-1 grid size-full place-items-center object-cover">
    <NuxtImg
      v-if="thumbnailSrc"
      :src="thumbnailSrc"
      fetchpriority="high"
      loading="eager"
      preset="card"
      class="size-full object-cover blur-sm brightness-90" />
    <Spinner class="absolute z-1 size-10 text-nc" />
  </div>
</template>
