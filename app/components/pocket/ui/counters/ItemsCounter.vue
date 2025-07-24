<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const itemsLength = computed (() => {
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
    :class="cn('flex gap-1.5 items-center', props.class)">
    <span class="dst font-mono text-1 ">{{ itemsLength }}</span>
  </div>
</template>