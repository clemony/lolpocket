<script lang="ts" setup>
import type { Pocket } from '@types'

const props = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const itemsLength = computed(() => {
  const count = ref(0)
  pocket.value.items.forEach((set) => {
    if (set.items.length)
      count.value++
  })
  return count
})
</script>

<template>
  <div
    v-tippy="`${itemsLength ? itemsLength : 'no'} item sets`"
    :class="cn('flex items-center gap-1.5', props.class)">
    <span class="dst font-mono text-xs">{{ itemsLength }}</span>
  </div>
</template>
