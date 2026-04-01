<script lang="ts" setup>
import type { CommandItem } from "../build/useCommandGroups"

const { items } = defineProps<{
  items: CommandItem[]
}>()
console.log("🥸 - items:", items)
</script>

<template>
  <div class="grid w-full grid-cols-3">
    <div v-for="(item, i) in items" :key="i" class="grid w-full">
      <div class="w-full">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
