<script setup lang="ts">
const { class: className, noTag, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  noTag?: boolean
  summoner?: Summoner
}>()

const summonerLevel = computed(() => {
  if (summoner) {
    return summoner.level
  }

  else {
    const as = useAccountStore()
    return as.userSummoner?.level
  }
})
</script>

<template>
  <span :class="cn('flex items-center lowercase leading-0 antialiased', className)">

    {{ !noTag ? 'lv. ' : null }}{{ summonerLevel || '0' || '' }}
  </span>
</template>

<style scoped>

</style>