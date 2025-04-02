<script setup lang="ts">
const props = defineProps<{
  data: any
  champion: Champion
}>()

const emit = defineEmits(['update:ability'])
const data = computed (() => props.data)
console.log('💠 - data:', data)
const champion = computed (() => props.champion)
const spells = computed (() => {
  return data.value[3][champion.value.id].spells
})

const selectedAbility = ref(null)

const kbd = computed (() => {
if (selectedAbility.value == data.value[3][champion.value.id].passive)
return 'P'
const find = spells.value.findIndex(s => s == selectedAbility.value)
const l = ['Q', 'W', 'E', 'R']
return l[find ]
})
onMounted (() => {
  selectedAbility.value = data.value[3][champion.value.id].passive
})
</script>

<template>
  <div class="flex gap-10 w-full">
    <div class="grid  gap-3 h-104 justify-between">
      <label v-tippy="data[3][champion.id].passive.name" class="aspect-square size-18 rounded-lg shadow-sm dropd-shadow-sm">
        <input v-model="selectedAbility" type="radio" class="peer hidden" :value="data[3][champion.id].passive" />
        <Image
          :image="`/img/passive/${data[3][champion.id].passive.image.full.replace('.png', '.webp')}`" alt="passive icon" class="size-full rounded-lg " />

      </label>
      <label v-for="(ability, i) in spells" :key="i" v-tippy="ability.name" class="aspect-square size-18 rounded-lg shadow-sm dropd-shadow-sm">
        <Image
          :image="`/img/ability/${ability.image.full.replace('.png', '.webp')}`" alt="passive icon" class="size-full rounded-lg " />
        <input v-model="selectedAbility" type="radio" class="peer hidden" :value="ability" />
      </label>
    </div>
    <AbilityDescription v-if="selectedAbility && kbd" :ability="selectedAbility" :champion="champion" :kbd="kbd"/>
  </div>
</template>