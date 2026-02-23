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

    <UButton
      label="'Remove Set'"
      size="xs"
      icon="i-trash"
      @click="removeSpellSet(pocket, props.set)">
    </UButton>
  </div>
</template>
