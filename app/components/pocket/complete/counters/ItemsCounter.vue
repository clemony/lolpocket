<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
    class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const itemsLength = computed (() => {
  if (pocket.value.items.sets.length == 1 && !pocket.value.items.sets[0].items.length) {
    return 0
  }
  else {
    return pocket.value.items.sets.length
  }
})
</script>

<template>
  <div v-tippy="`${itemsLength ? itemsLength : 'no'} item sets`"   :class="cn('flex gap-1.5 items-center', props.class)">
    <span class="dst font-mono text-1 ">{{ itemsLength }}</span>
  </div>
</template>