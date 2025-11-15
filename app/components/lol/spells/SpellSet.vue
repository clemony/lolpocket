<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'

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
      :class="cn('size-16 rounded-lg border border-b3/60', props.class)"
      @update:spell="handleSpells($event, i)" />

    <Grow />

    <button
      v-tippy="'Remove Set'"
      class="trash-button group/btn btn btn-square btn-ghost btn-xs"
      @click="removeSpellSet(pocket, props.set)">
      <icon
        name="trash"
        class="
          size-5 shrink-0 text-bc/50 dst
          group-hover/btn:text-bc/100
        " />
    </button>
  </div>
</template>
