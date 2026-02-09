<script setup lang="ts">
const {
  id,
  variant = 'base',
  base = 'btn',
  class: className,
  dataPlacement = 'top',
  dataSize,
  dataText,
  iconClass,
  on,
  size = 'c-10',
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
  shardRegistry.flatMap(o => o.shards).find(s => s.id === id)
)
</script>

<template>
  <Label
    data-type="shard"
    :data-id="shard?.id"
    :data-size
    :data-text
    :data-placement
    :class="
      cn(
        'relative',
        labelVariants({ base, on, hover, size, variant }),
        className,
      )
    ">
    <ShardIcon
      v-if="id !== null"
      :id="id"
      :class="iconClass" />
    <slot />
  </Label>
</template>
