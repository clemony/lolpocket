<script setup lang="ts">
const { class: className, url } = defineProps<{
  url: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label :class="cn('shadow-sm drop-shadow-sm size-full overflow-hidden', className)">

    <ChampionSplash v-if="url != '/img/lp/192.webp'" :url="url" alt="pocket icon" class=" pointer-events-none  size-full " />
    <div v-else class="size-full bg-gradient-to-br from-neutral/80 to-neutral grid place-items-center text-nc font-semibold text-4 dst">
      LP
    </div>

  </label>
</template>

<style scoped></style>
