<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { queueDictionary, queues } from '~~/data/records/queues'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  queueId: number
}>()

const queue = computed(() => {
  const foundQueue = queues.find(q => q.queueId == props.queueId)
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