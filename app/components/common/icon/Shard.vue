<script setup lang="ts">
const {
  id,
  class: className,
  dataPlacement = "top",
  dataSize,
  dataText,
  iconClass,
} = defineProps<{
  id: number | null
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
  <Label
    data-type="shard"
    :data-id="shard?.id"
    :data-size
    :data-text
    :data-placement
    :class="cn('anchor rounded-full', className)">
    <ShardIcon v-if="id !== null" :id="id" :class="iconClass" />
    <slot />
  </Label>
</template>
