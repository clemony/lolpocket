<script lang="ts" setup>
import { removeSpellSet } from "~/domain/pocket/modifyPocket"

const props = defineProps<{
  set: SpellSet
  pocket: Pocket
  setIndex: number
  class?: HTMLAttributes["class"]
}>()

const pocket = computed(() => props.pocket)
const setRef = computed(() => props.set)

const spellIds = computed(() => [setRef.value.d, setRef.value.f])

function handleSpells(e: number, i: number) {
  if (i === 0) setRef.value.d = e
  if (i === 1) setRef.value.f = e
}
</script>

<template>
  <div class="flex w-full items-center gap-4">
    <LazySpellPicker
      v-for="(spell, i) in spellIds"
      :key="i"
      :current-value="spell"
      :class="cn('size-16 rounded-lg border border-p3/60', props.class)"
      @update:spell="handleSpells($event, i)" />

    <Grow />

    <button
      v-tippy="'Remove Set'"
      class="trash-button group/btn btn btn-square btn-ghost btn-xs"
      @click="removeSpellSet(pocket, props.set)">
      <icon
        class="size-5 shrink-0 text-pc/50 ds-2xs group-hover/btn:text-pc/100"
        name="trash" />
    </button>
  </div>
</template>
