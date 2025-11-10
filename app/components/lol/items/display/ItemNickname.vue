<script lang="ts" setup>
const { item } = defineProps<{
  item?: Item
}>()
</script>

<template>
  <p
    v-if="item.nicknames.length"
    class="ml-0.5 text-1 italic">
    a.k.a.
    <span
      v-for="(name, index) in item.nicknames"
      :key="index">{{ name }}</span>
  </p>
</template>