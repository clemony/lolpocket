<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"
import { itemKey } from "../build/useCommandGroups"

const { items } = defineProps<{
  items: CommandGroup
}>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
</script>

<template>
  <div v-if="items" class="w-full p-3">
    <slot>
      <UUser
        size="xl"
        :ui="{ root: 'mb-2 ml-1', name: 'mb-1', wrapper: 'pr-6' }"
        :name="items.label"
        :description="items.description" />
    </slot>
    <div class="flex flex-col gap-1">
      <CommandButton
        v-for="item in items.items"
        :key="itemKey(item)"
        :item="item"
        @update:open="emit('update:open', item)" />
    </div>
  </div>
</template>
