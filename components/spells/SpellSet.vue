<script lang="ts" setup>
const props = defineProps<{
  set: object
  pocket: pocket
  setIndex: number
}>()

const pocket = computed (() => {
  return props.pocket
})
// pocket.value.spells.sets.length = 0

const set = computed (() => {
  return props.set
})
function handleSpells(e, i) {
  console.log('💠 - handleSpells - i:', i)
  console.log('💠 - handleSpells - e:', e)
  console.log('💠 - set - set:', set)
  set.value[i] = e
}

function handleDefault() {
  pocket.value.spells.default = pocket.value.spells.sets[props.setIndex]
}
</script>

<template>
  <div class="flex pl-14 pr-8 items-center gap-3 group/cli  justify-end">
    <LazySpellPicker v-for="(spell, i) in props.set" :key="i" :selected-spell="spell" class="**:rounded-full rounded-full size-12 shadow-sm border-b3 border drop-shadow-xs" @update:spell="handleSpells($event, i)" />

    <button v-tippy="'Remove Set'" class="btn group/btn btn-ghost btn-xs btn-square  opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30" @click="removeSpellSet(pocket, props.set)">
      <icon name="x-sm" class="size-6 dst shrink-0 group-hover/btn:text-bc/100 text-bc/50" />
    </button>
    <label v-tippy="'Default Set'" class="rating rating-xs opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30 mb-0.5 has-checked:opacity-100">
      <input :key="props.setIndex" v-model="pocket.spells.default" type="radio" name="default-champ" class="mask mask-star-2 bg-neutral" aria-label="make champion default" :value="set" @change="handleDefault()" />
    </label>
  </div>
</template>