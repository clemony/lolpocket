<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()

// TODO hookup to supbase with public data &  useSummoner
const text = computed(() => {
  console.log('💠 -as().publicData:', as().publicData)
  as().publicData.title = 'Pocket Pet'
  return as().publicData?.title ?? 'Pocket Player'
})
console.log('💠 - text:', text)
</script>

<template>
  <span
    v-if="text"
    :class="
      cn('antialiased lowercase flex items-center leading-0 ', className)
    ">
    <slot />
    {{ text ?? null }}
  </span>
</template>

<style scoped></style>
