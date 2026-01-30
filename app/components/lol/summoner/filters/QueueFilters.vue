<script setup lang="ts">
const queueModel = computed({
  get: () => s_matches().filter?.queue,
  set: val => s_matches().setFilter('queue', val),
})
watch(() => s_matches().filter, (v) => {
  console.log('💠 - watch - newVal:', v)
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
  <UTabs v-model:model-value="queueModel" class="h-9 w-full" :default-value="0" :items="queues" />
</template>
