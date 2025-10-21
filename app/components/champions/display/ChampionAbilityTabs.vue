<script setup lang="ts">
import { onKeyDown, onKeyUp } from '@vueuse/core'

const { abilities, k } = defineProps<{
  abilities?: Ability[]
  k?: string
}>()

const emit = defineEmits(['update:ability'])
const champion = await import(
  `#shared/appdata/records/champions/${k}.ts`
)
const loaded = ref(false)
const champAbilities = computed(() => {
  console.log('🌱 - champion:', champion)
  if (!champion)
    return null

  return champion.default.abilities
})
console.log('🌱 - champAbilities:', champAbilities)
const selectedAbility = ref('P')
/*
watch(() => champAbilities.value.name, (newVal) => {
  if (newVal)
    loaded.value = false
}) */

const keyDown = ref(false)

onKeyDown(['p', 'q', 'w', 'e', 'r'], (e) => {
  if (selectedAbility.value !== e.key.toUpperCase()) {
    selectedAbility.value = e.key.toUpperCase()
    emit('update:ability', selectedAbility.value)
  }
  keyDown.value = true
})

onKeyUp(['p', 'q', 'w', 'e', 'r'], (e) => {
  keyDown.value = false
})

const gridCols = computed (() => `grid grid-cols-${champAbilities.value.length}`)
</script>

<template>
  <menu :class="cn('items-center justify-between gap-2 pointer-events-auto z-1', gridCols)">
    <Label
      v-for="(ability, i) in champAbilities"
      :key="i"
      base="btn"
      variant="neutral"
      size="sq-xl"
      :value="i"
      class=" w-full h-auto aspect-square p-0 overflow-hidden border-0 group !cursor-pointer **:pointer-events-none hover:scale-110 transition-transform duration-300"
      :class="{
        'scale-110 hover:scale-115 ': selectedAbility === ability.key }">
      <input
        v-model="selectedAbility"
        :value="i"
        type="radio"
        name="selected-ability"
        class="peer hidden"
        @change="emit('update:ability', selectedAbility)" />

      <Img
        :img="ability.icon"
        alt="passive icon"
        class="size-full  pointer-events-none duration-300 transition grayscale contrast-80 opacity-70 group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0"
        :class="{
          'opacity-100 contrast-100 grayscale-0  ': selectedAbility,
          'animate-in fade-in duration-500  ': loaded,
          'animate-out  duration-500 fade-out-50': loaded,
        }"
        @load="loaded = true" />

    </Label>
  </menu>
</template>
