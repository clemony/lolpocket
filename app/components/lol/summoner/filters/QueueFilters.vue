<script setup lang="ts">
const store = useMatchFilters()
const { filter } = storeToRefs(store)

const queueModel = computed({
  get: () => filter?.value.queue,
  set: val => store.setFilter('queue', val),
})
const queues = [
  {
    label: 'All',
    value: 0
  },
  {
    label: 'Solo',
    value: 420
  },
  {
    label: 'Flex',
    value: 440
  },
  {
    label: 'Normal',
    value: 400
  },
]
</script>

<template>
  <UTabs
    v-model:model-value="queueModel"
    class="h-10 w-full"
    :default-value="0"
    :items="queues" />
</template>
