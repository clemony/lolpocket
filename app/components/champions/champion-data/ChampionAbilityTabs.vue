<script setup lang="ts">
import { onKeyDown, onKeyUp } from '@vueuse/core'

const { abilities } = defineProps<{
  abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
}>()

const champAbilities = computed (() => abilities)
const emit = defineEmits(['update:ability'])
const selectedAbility = ref('P')



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
  <Tabs v-model:model-value="selectedAbility" class="grid w-full " activation-mode="manual" @update:model-value="emit('update:ability', selectedAbility)">
    
    <IndicatorTabsList class="grid grid-cols-5 gap-1 place-items-center    h-16 w-88   bg-transparent border-0 shadow-none pointer-events-auto z-1 p-0 m-0">
      <IndicatorTabsTrigger v-for="(ability, i) in champAbilities" :key="i" :value="i" class="!p-0 aspect-square size-16 rounded-lg relative shadow-sm drop-shadow-xs bg-b2/40 shrink-0 cursor-pointer focus:!outline-0 transition-all duration-150 drop-shadow-sm  shadow-sm focus:!ring-0 focus:!ring-offset-0">
          <Img
            :img="ability[0].icon" alt="passive icon" class="size-full rounded-lg pointer-events-auto border border-neutral/80   grayscale contrast-80 opacity-70 group-hover/img:opacity-100 group-hover/img:contrast-100 group-hover/img:grayscale-0" :class="{ 'opacity-100 contrast-100 grayscale-0  ': selectedAbility == i }" />
       
        <kbd class="bg-b2 absolute border border-neutral/80 size-5 -left-0 -top-0 grid place-items-center shadow-sm rounded-md kbd-md brightness-94 aspect-square text-2" :class="{ 'inset-shadow-sm inset-shadow-black/50 bg-b3 ': keyDown && selectedAbility == i }">{{ i }}</kbd>
      </IndicatorTabsTrigger>
    </IndicatorTabsList>
  </Tabs>
</template>