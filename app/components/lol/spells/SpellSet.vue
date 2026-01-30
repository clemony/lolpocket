<script lang="ts" setup>
const props = defineProps<{
  set: object
  pocket: Pocket
  setIndex: number
  class?: HTMLAttributes['class']
}>()

const pocket = computed(() => {
  return props.pocket
})

const set = computed(() => {
  return props.set
})
function handleSpells(e, i) {
  set.value[i] = e.name
}
</script>

<template>
  <div class="flex w-full items-center gap-4">
    <LazySpellPicker
      v-for="(spell, i) in props.set"
      :key="i"
      :selected-spell="spell"
      :class="cn('border-b3/60 size-16 rounded-lg border', props.class)"
      @update:spell="handleSpells($event, i)"
    />

    <Grow />

    <button
      v-tippy="'Remove Set'"
      class="trash-button group/btn btn btn-square btn-ghost btn-xs"
      @click="removeSpellSet(pocket, props.set)"
    >
      <icon
        class="text-bc/50 dst group-hover/btn:text-bc/100 size-5 shrink-0"
        name="trash"
      />
    </button>
  </div>
</template>
