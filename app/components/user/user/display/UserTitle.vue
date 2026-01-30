<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner | Partial<Summoner>
}>()

// @todo hookup to supbase with public data &  useSummoner
const text = computed(() => {
  console.log('💠 -as().account:', as().account)
  as().account.title = 'Pocket Pet'
  return as().account?.title ?? 'Pocket Player'
})
console.log('💠 - text:', text)
</script>

<template>
  <span
    v-if="text"
    :class="cn('flex items-center leading-0 lowercase antialiased', className)"
  >
    <slot />
    {{ text ?? null }}
  </span>
</template>

<style scoped></style>
