<script lang="ts" setup>
const {
  color,
  id,
  class: className,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: string | number
  color?: boolean
}>()

/* :data-color="shardRegistry.sh[shardById[id]]." */
</script>

<template>
  <Icon

    :name="`shard:${id}`"
    :class="
      cn(
        'dxs drop-shadow-black/30',
        {
          'size-4.5!': ![5011, 5010, 5007].includes(
            typeof id === 'string' ? parseInt(id) : id,
          ),
          'size-3.75!': [5011, 5010, 5007].includes(
            typeof id === 'string' ? parseInt(id) : id,
          ),
        },
        className,
      )
    " />
</template>
