<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  match: any
}>()

const match = computed (() => {
  return props.match
})
const queue = computed(() => {
  const foundQueue = queues.find(q => q.queueId == match.value.queueId)
  if (!foundQueue)
    return null

  // Get the map replacement
  return foundQueue.map === 'Summoner\'s Rift'
    ? queueDictionary[0][foundQueue.description] || foundQueue.description
    : foundQueue.description
})
</script>

<template>
  <Primitive v-bind="props">
    {{ queue }}
  </Primitive>
</template>