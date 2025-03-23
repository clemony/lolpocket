<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
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
  <div v-tippy="`${itemsLength ? itemsLength : 'no'} item sets`" class="flex gap-2.5 items-center">
    <span class="dst font-mono text-1 opacity-60 -mr-2">{{ itemsLength }}</span>
  </div>
</template>