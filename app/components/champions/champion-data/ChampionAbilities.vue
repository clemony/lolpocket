<script setup lang="ts">
const {abilities} = defineProps<{
  abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
}>()

const selectedAbility = ref('P')

const emit = defineEmits(['update:ability'])



</script>

<template>
  <Tabs class="flex w-full"  v-model:model-value="selectedAbility" @update:model-value="emit('update:ability', selectedAbility)">
    <IndicatorTabsList class="grid grid-cols-5  w-80 h-fit  justify-between bg-transparent border-0 shadow-none pointer-events-auto z-1 p-0 m-0">

      <IndicatorTabsTrigger v-for="(ability, i) in abilities" :key="i" v-tippy="ability[0].name" :value="i"  class="!p-0 aspect-square size-14 rounded-lg relative shadow-sm drop-shadow-sm  shrink-0 cursor-pointer  transition-all duration-150 drop-shadow-sm  shadow-sm  grayscale contrast-80 opacity-70 hover:opacity-100 hover:contrast-100 hover:grayscale-0" :class="{'opacity-100 contrast-100 grayscale-0 inset-shadow-sm ': selectedAbility == i}">
        <Image
          :image="ability[0].icon" alt="passive icon" class="size-full rounded-lg pointer-events-none " />
      </IndicatorTabsTrigger>
      <ImageTabIndicator class="" contrast/>
    </IndicatorTabsList>
  </Tabs>
</template>