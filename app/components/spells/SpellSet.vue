<script lang="ts" setup>
const props = defineProps<{
  set: object
  pocket: Pocket
  setIndex: number
  class?: HTMLAttributes['class']
}>()

const pocket = computed (() => {
  return props.pocket
})

const set = computed (() => {
  return props.set
})
function handleSpells(e, i) {
  set.value[i] = e.name
}
</script>

<template>
  <div class="flex  items-center gap-4  w-full ">
    <LazySpellPicker v-for="(spell, i) in props.set" :key="i" :selected-spell="spell" :class="cn('rounded-lg size-16  border-b3/60 border ', props.class)" @update:spell="handleSpells($event, i)" />

    <Grow />

    <button v-tippy="'Remove Set'" class="btn trash-button group/btn btn-ghost btn-xs btn-square  " @click="removeSpellSet(pocket, props.set)">
      <icon name="trash" class="size-5 dst shrink-0 group-hover/btn:text-bc/100 text-bc/50" />
    </button>
  </div>
</template>