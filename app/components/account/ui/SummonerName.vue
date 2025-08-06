<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
}>()
const name = computed(() => {
  if (summoner)
    return summoner.name

  const as = useAccountStore()
  return as.userAccount?.riot?.name ?? 'Summoner'
})
</script>

<template>
  <span
    v-if="name"
    :class="cn('antialiased flex items-center lowercase leading-0 ', className)">
    {{ name ?? null }}
  </span>
</template>

<style scoped>

</style>