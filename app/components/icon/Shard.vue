<script setup lang="ts">
import { shardRegistry } from "#shared/constants/runes/shards"

const {
  id,
  class: className,
  dataPlacement = "top",
  dataSize,
  dataText,
  iconClass,
} = defineProps<{
  id?: number
  dataSize?: TooltipSize
  dataPlacement?: string
  dataText?: string
  class?: HTMLAttributes["class"]
  iconClass?: HTMLAttributes["class"]
}>()

const shard = computed(() =>
  shardRegistry.flatMap((o) => o.shards).find((s) => s.id === id)
)
</script>

<template>
  <UTooltip :class="cn('anchor rounded-full', className)">
    <ShardIcon v-if="id !== undefined" :id="id" :class="iconClass" />
    <slot />
  </UTooltip>
</template>
