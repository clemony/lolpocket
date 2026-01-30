<script setup lang="ts">
import { onKeyDown, onKeyUp } from '@vueuse/core'

const { abilities, k } = defineProps<{
  abilities?: Ability[]
  k?: string
}>()

const emit = defineEmits(['update:ability'])
const champion = await import(`#shared/records/champions/${k}.ts`)
const loaded = ref(false)
const champAbilities = computed(() => {
  console.log('🌱 - champion:', champion)
  if (!champion) return null

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

const gridCols = computed(() => `grid grid-cols-${champAbilities.value.length}`)
</script>

<template>
  <menu
    :class="
      cn('pointer-events-auto z-1 items-center justify-between gap-2', gridCols)
    "
  >
    <Label
      v-for="(ability, i) in champAbilities"
      :key="i"
      class="group aspect-square h-auto w-full cursor-pointer! overflow-hidden border-0 p-0 transition-transform duration-300 **:pointer-events-none hover:scale-110"
      base="btn"
      variant="neutral"
      size="sq-14"
      :value="i"
      :class="{
        'scale-110 hover:scale-115': selectedAbility === ability.key,
      }"
    >
      <input
        v-model="selectedAbility"
        class="peer hidden"
        :value="i"
        type="radio"
        name="selected-ability"
        @change="emit('update:ability', selectedAbility)"
      >

      <Img
        class="pointer-events-none size-full opacity-70 contrast-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0"
        :src="ability.icon"
        alt="passive icon"
        :class="{
          'opacity-100 contrast-100 grayscale-0': selectedAbility,
          'animate-in fade-in duration-500': loaded,
          'animate-out fade-out-50 duration-500': loaded,
        }"
        @load="loaded = true"
      />
    </Label>
  </menu>
</template>
