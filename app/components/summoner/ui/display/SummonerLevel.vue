<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { class: className, summoner, as = 'span', noTag } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  noTag?: boolean
  summoner?: Summoner
  as?: string
}>()

const summonerLevel = computed(() => {
  if (summoner) {
    return summoner.level
  }

  else {
    const as = useAccountStore()
    return as.account.level
  }
})
</script>

<template>
  <Primitive
    :as="as"
    :class="cn('flex items-center lowercase leading-0 antialiased', className)">
    {{ !noTag ? 'lv. ' : null }}{{ summonerLevel || '0' || '' }}
  </Primitive>
</template>

<style scoped>

</style>