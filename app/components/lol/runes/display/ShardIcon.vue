<script lang="ts" setup>
import { shardColor } from '~~/shared/constants/runes/shard-color'

const { id, class: className, color } = defineProps<{
  class?: HTMLAttributes['class']
  id: string | number
  color?: boolean
}>()
</script>

<template>
  <Icon
    :data-color="shardColor[id]"
    :name="`shard:${id}`"
    :class="cn('dxs drop-shadow-black/30',
               {
                 '!size-4.5': ![5011, 5010, 5007].includes(typeof id === 'string' ? parseInt(id) : id),
                 '!size-3.75': [5011, 5010, 5007].includes(typeof id === 'string' ? parseInt(id) : id),
               },
               className)" />
</template>