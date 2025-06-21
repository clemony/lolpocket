<script setup lang="ts">
const { account, class: className, regionId } = defineProps<{
  class?: HTMLAttributes['class']
  account?: UserAccount
  regionId?: string
}>()

const { data } = await useFetch<Record<string, string>>('/api/region-index')

const region = computed(() => {
  return account ? data.value[account.riot.region.toLowerCase()] : regionId
})
</script>

<template>
  <span :class="cn('', className)">{{ region || 'Runeterra' || '' }}</span>
</template>
