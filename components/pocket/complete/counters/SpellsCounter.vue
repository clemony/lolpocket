<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)

const spellsLength = computed (() => {
  return 1
})
</script>

<template>
  <div v-tippy="`${spellsLength ? spellsLength : 'no'} spells`" class="flex gap-2 items-center">
    <span class="dst font-mono text-1 opacity-60">{{ spellsLength }}</span>
  </div>
</template>