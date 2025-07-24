<script setup lang="ts">
import { onKeyDown, onKeyUp } from '@vueuse/core'

const { abilities } = defineProps<{
  abilities: AbilityRecord
}>()

const emit = defineEmits(['update:ability'])
const loaded = ref(false)
const champAbilities = computed (() => abilities)
const selectedAbility = ref('P')

watch(() => champAbilities.value.P[0].name, (newVal) => {
  if (newVal)
    loaded.value = false
})

const keyDown = ref(false)

onKeyDown(['p', 'q', 'w', 'e', 'r'], (e) => {
  if (selectedAbility.value != e.key.toUpperCase()) {
    selectedAbility.value = e.key.toUpperCase()
    emit('update:ability', selectedAbility.value)
  }
  keyDown.value = true
})

onKeyUp(['p', 'q', 'w', 'e', 'r'], (e) => {
  keyDown.value = false
})
</script>

<template>
  <menu class="flex w-full h-20 items-center px-8 justify-between  gap-2.5 pointer-events-auto z-1">
    <Label
      v-for="(ability, i) in champAbilities"
      :key="i"
      :value="i"
      class="!p-0 aspect-square size-20 rounded-lg relative bg-b3 group shrink-0 !cursor-pointer **:pointer-events-none  hover:scale-110  transition-transform duration-300 "
      :class="{
        'scale-110 hover:scale-115 ': selectedAbility == i, '  drop-shadow-sm  shadow-sm ': loaded,
      }">
      <input
        v-model="selectedAbility"
        :value="i"
        type="radio"
        name="selected-ability"
        class="peer hidden"
        @change="emit('update:ability', selectedAbility)" />

      <Img
        :img="ability[0].icon"
        alt="passive icon"
        class="size-full rounded-lg pointer-events-none  duration-300 transition  grayscale contrast-80 opacity-70 group-hover:opacity-100 group-hover:contrast-100 group-hover:grayscale-0"
        :class="{ 'opacity-100 contrast-100 grayscale-0  ': selectedAbility == i, 'animate-in fade-in duration-500  ': loaded, 'animate-out  duration-500 fade-out-50': loaded }"
        @load="loaded = true" />

      <h3 class="absolute   !text-5 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:text-shadow-black/50  group-hover:drop-shadow-black/70 text-shadow-xs text-white/86 drop-shadow-sm  bottom-1 right-1.5">{{ i }}</h3>
    </Label>
  </menu>
</template>