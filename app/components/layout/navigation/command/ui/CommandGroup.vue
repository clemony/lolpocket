<script lang="ts" setup>
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"
import { itemKey } from "../build/useCommandGroups"

const {
  items,
  ui,
  class: className
} = defineProps<{
  items: CommandGroup
  ui?: CommandItem["ui"]
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits<{
  "update:open": [item: CommandItem]
}>()
</script>

<template>
  <div v-if="items" :class="cn('w-full py-2', className)">
    <slot>
      <UUser
        size="xl"
        :ui="{
          root: cn('ml-1.25 py-2', items.description ? 'mb-1' : ''),
          name: 'mb-1',
          wrapper: 'pr-6'
        }"
        :name="items.label"
        :description="items.description ?? undefined" />
    </slot>
    <div class="flex flex-col gap-1">
      <CommandButton
        v-for="item in items.items"
        :key="itemKey(item)"
        :ui
        :value="item.value"
        :item="item"
        @update:open="emit('update:open', item)" />
    </div>
  </div>
</template>
