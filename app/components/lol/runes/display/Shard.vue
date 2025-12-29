<script setup lang="ts">
import { shardColor } from '~~/shared/constants/runes/shard-color'
import { shardObject } from '~~/shared/records/shards'

const {
  id,
  base = 'btn',
  class: className,
  dataPlacement = 'top',
  dataSize,
  dataText,
  iconClass,
  on,
  size = 'c-10',
  variant = 'base'
} = defineProps<{
  id: number | null
  dataSize?: TooltipSize
  dataPlacement?: string
  dataText?: string
  class?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
  variant?: LabelVariants['variant']
  hover?: LabelVariants['hover']
  base?: LabelVariants['base']
  size?: LabelVariants['size']
  on?: LabelVariants['on']
}>()

const shard = computed(() =>
  shardObject.flatMap(o => o.shards).find(s => s.id === id),
)
</script>

<template>
  <Label
    data-tip="shard"
    :data-id="shard?.id"
    :data-size
    :data-text
    :data-placement
    :class="cn('relative', labelVariants({ base, on, hover, size, variant }), className)">
    <ShardIcon
      :id
      :class="iconClass" />
    <slot />
  </Label>
</template>
