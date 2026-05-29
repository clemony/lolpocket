<script lang="ts" setup>
import { useDragDropManager } from "@dnd-kit/vue"
import { useBackpackGhost } from "~/domain/backpack/composables/useBackpackGhost"
import { asPocket } from "~/domain/backpack/utils/typeAssert"

const manager = useDragDropManager()
const {
  current,
  currentStyle,
  source,
  sourceButton,
  sourceCount,
  sourceItem,
  sourceOpen,
  state,
  targetLabel
} = useBackpackGhost(manager)
</script>

<template>
  <div
    v-if="state.active && source"
    :title="targetLabel ? `Move to ${targetLabel}?` : undefined"
    class="pointer-events-none absolute z-50 shrink-0"
    :style="currentStyle">
    <UButton
      v-if="current?.listType === 'sidebar'"
      variant="highlight"
      :is-dragging="true"
      v-bind="sourceButton"
      :ui="{
        base: 'w-full shrink-0 grow gap-2.5 bg-p1/80 inset-ring! inset-ring-p2! backdrop-blur-sm'
      }">
      <template #trailing>
        <UBadge
          v-if="sourceCount && sourceCount > 0"
          size="xs"
          color="neutral"
          :label="sourceCount" />
        <Icon
          v-if="sourceOpen !== undefined"
          :name="sourceOpen ? 'i-down' : 'i-up'"
          class="size-4.5" />
      </template>
    </UButton>

    <LazyPocketCardGhost
      v-else-if="current?.listType === 'grid' && sourceItem"
      :pocket="asPocket(sourceItem)" />
  </div>
</template>
