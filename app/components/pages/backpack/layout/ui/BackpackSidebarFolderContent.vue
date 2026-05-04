<script lang="ts" setup>
import { VueDraggable } from "vue-draggable-plus"
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

const { item, collapsed } = defineProps<{
  item: PocketButton
  collapsed?: boolean
}>()
</script>

<template>
  <div
    class="before:pointer-events-nonea fter:pointer-events-none relative before:absolute before:h-[calc(100%-var(--spacing)*2)] before:w-2 before:border-l before:border-l-p3 after:absolute after:bottom-2 after:left-0 after:h-2 after:w-12">
    <VueDraggable
      v-if="item.children && item.children?.length"
      class="grid w-full auto-rows-fr gap-y-0.5 py-1 pl-1"
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

    <UButton
      v-bind="toolbarItems.new"
      size="sm"
      block
      variant="ghost"
      :ui="{
        base: 'mt-1',
        label: 'text-xs',
        leadingIcon: '**:stroke-[2.4]'
      }" />
  </div>
</template>
