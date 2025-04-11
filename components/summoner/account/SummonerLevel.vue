
<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const as = useAccountStore()
const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>



<template>
     <span :class="cn('', props.class)">{{ summoner.summonerLevel||  '0' || '' }}</span>
</template>

<style scoped>

</style>