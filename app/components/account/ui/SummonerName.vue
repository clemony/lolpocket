<script setup lang="ts">
const { class: className, fallbackText = 'Summoner' } = defineProps<{
  class?: HTMLAttributes['class']
  fallbackText?: string
}>()
const as = useAccountStore()
const summoner = computed(() => {
  return as.userAccount ? as.userAccount : as.defaultUser
})
</script>

<template>
  <span :class="cn('', className)">
    {{ summoner.name || summoner.name || fallbackText || 'Summoner' || '' }}
  </span>
</template>

<style scoped>

</style>