<script lang="ts" setup>
const props = defineProps<{
  item?: Item
}>()
const item = computed (() => {
  return props.item
})

const tier = computed (() => {
  if (!item.value.tier)
    return

  // const t = /trinket/
  // : item.value.itemlimit.match(t) ? 'Trinket'
  return item.value.itemlimit == 'Starter' ? 'Starter' : item.value.name == 'Control Ward' ? 'If you want it, buy it yourself.' : item.value.tags.includes('Consumable') ? 'Consumable' : item.value.tier == 3 ? 'Legendary' : item.value.tier == 2 ? 'Epic' : item.value.tier == 1 ? 'Basic' : null
})
</script>

<template>
  <p v-if="tier" class="text-2 mt-1">
    {{ tier }}
  </p>
</template>