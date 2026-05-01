<script lang="ts" setup>
import { VueDraggable } from "vue-draggable-plus"
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"

const { item, collapsed } = defineProps<{
  item: PocketButton
  collapsed?: boolean
}>()
</script>

<template>
  <VueDraggable
    v-if="item.children && item.children?.length"
    :class="
      cn('grid w-full auto-rows-fr gap-y-0.5 py-1 pl-1', {
        'border-l border-l-p3': !collapsed
      })
    "
    :model-value="item.children"
    :group="{ name: 'pocket' }">
    <PocketFolderButton
      v-for="(child, ix) in item.children"
      :key="ix"
      :item="child"
      @update:label="
        (e: string) =>
          pocketStore().updatePocketName(String(child.pocket?.key), e)
      " />
  </VueDraggable>
  <div
    v-else
    :class="
      cn('grid w-full auto-rows-fr gap-y-0.5 py-1 pl-1', {
        'border-l border-l-p3': !collapsed
      })
    "
    class="flex w-full items-center border-l border-l-p3 py-3 pl-6">
    <span class="text-xs italic">Empty</span>
  </div>
</template>
