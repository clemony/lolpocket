<script lang="ts" setup>
const props = defineProps<{
  item?: Item
}>()
const item = computed (() => {
  return props.item
})

const hasNicknames = computed(() => {
  if (!item.value.nickname)
    return false
  return Array.isArray(item.value.nickname) ? item.value.nickname.length > 0 : item.value.nickname.length > 0
})

const nicknames = computed (() => Array.isArray(item.value.nickname) ? item.value.nickname : item.value.nickname ? [item.value.nickname] : [])
</script>

<template>
  <p v-if="hasNicknames" class="text-1 ml-0.5 italic">
    a.k.a.
    <span v-for="(name, index) in nicknames" :key="index">{{ name }}</span>
  </p>
</template>