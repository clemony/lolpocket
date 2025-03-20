
<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const as = useAccountStore()
const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

</script>

<template>
     <span :class="cn('', props.class)">{{ summoner.region ||  'Runeterra' || '' }}</span>
</template>

