<script setup lang="ts">
import { onKeyDown, onKeyUp } from '@vueuse/core'

const { abilities } = defineProps<{
  abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
}>()

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
  <Tabs v-model:model-value="selectedAbility" class="grid w-full gap-y-3 " activation-mode="manual" @update:model-value="emit('update:ability', selectedAbility)">
    <div class="grid grid-cols-5 gap-3 place-items-center w-full justify-around">
    </div>
    <IndicatorTabsList class="grid grid-cols-5 gap-2.5  w-80 h-fit  justify-between bg-transparent border-0 shadow-none pointer-events-auto z-1 p-0 m-0">
      <IndicatorTabsTrigger v-for="(ability, i) in abilities" :key="i" :value="i" class="!p-0 aspect-square size-14 rounded-lg relative shadow-sm drop-shadow-xs  shrink-0 cursor-pointer focus:!outline-0 transition-all duration-150 drop-shadow-sm  shadow-sm focus:!ring-0 focus:!ring-offset-0">
        <div class="size-full  rounded-lg pointer-events-none  grayscale contrast-80 opacity-70 group-hover/img:opacity-100 group-hover/img:contrast-100 group-hover/img:grayscale-0" :class="{ 'opacity-100 contrast-100 grayscale-0  ': selectedAbility == i }">
          <Image
            :image="ability[0].icon" alt="passive icon" class="size-full rounded-lg pointer-events-auto border border-neutral/80" />
        </div>
        <kbd class="bg-b2 absolute border border-neutral/80 size-5 -left-0 -top-0 grid place-items-center shadow-sm rounded-md kbd-md brightness-94 aspect-square text-2" :class="{ 'inset-shadow-sm inset-shadow-black/50 bg-b3 ': keyDown && selectedAbility == i }">{{ i }}</kbd>
      </IndicatorTabsTrigger>
      <ImageTabIndicator class="gap-2.5" contrast />
    </IndicatorTabsList>
  </Tabs>
</template>