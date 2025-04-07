<script setup lang="ts">
const props = defineProps<{
  champion: Champion
}>()
const emit = defineEmits(['update:ability'])

const champion = computed (() => props.champion)
console.log('💠 - props.champion:', props.champion)
const spells = computed (() => {
  return champion.value.spells
})

const selectedAbility = ref(null)

const kbd = computed (() => {
  if (selectedAbility.value == champion.value.passive)
    return 'P'
  const find = spells.value.findIndex(s => s == selectedAbility.value)
  const l = ['Q', 'W', 'E', 'R']
  return l[find]
})
onMounted (() => {
  selectedAbility.value = champion.value.passive
})
</script>

<template>
  <div class="flex gap-10 w-full">
    <div class="grid  gap-3 h-104 justify-between">
      <label v-tippy="champion.passive.name" class="aspect-square size-18 rounded-lg shadow-sm drop-shadow-sm relative cursor-pointer inset-shadow-sm ring-check">
        <input v-model="selectedAbility" type="radio" class="peer hidden" :value="champion.passive" />
        <Image
          :image="`/img/passive/${champion.passive.image.full.replace('.png', '.webp')}`" alt="passive icon" class="size-full pointer-events-none rounded-lg " />

      </label>
      <label v-for="(ability, i) in spells" :key="i" v-tippy="ability.name" class="aspect-square size-18 rounded-lg shadow-sm drop-shadow-sm cursor-pointer inset-shadow-sm ring-check">
        <Image
          :image="`/img/ability/${ability.image.full.replace('.png', '.webp')}`" alt="passive icon" class="size-full rounded-lg pointer-events-none " />
        <input v-model="selectedAbility" type="radio" class="peer hidden" :value="ability" />
      </label>
    </div>
    <AbilityDescription v-if="selectedAbility && kbd" :ability="selectedAbility" :champion="champion" :kbd="kbd" />
  </div>
</template>