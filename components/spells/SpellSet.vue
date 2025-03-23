<script lang="ts" setup>
const props = defineProps<{
  set: Array<Spell>
pocket: pocket
setIndex: number
}>()

function handleSpells(e, i) {
  console.log('💠 - handleSpells - i:', i)
  console.log(e)
  console.log('💠 - set:', props.set)
  props.set[i] = e
}

function handleDefault(){
  props.pocket.spells.default = props.pocket.spells.sets[props.setIndex]
  console.log(props.pocket.spells.default)
}
</script>

<template>
  <div class="flex pl-14 pr-8 items-center gap-3 group/cli  justify-end">
    <LazySpellPicker v-for="(spell, i) in props.set" :key="i" :selected-spell="spell" @update:spell="handleSpells($event, i)" class="**:rounded-full rounded-full size-12 shadow-sm border-b3 border drop-shadow-xs"/>



            <button v-tippy="'Remove Set'" class="btn group/btn btn-ghost btn-xs btn-square  opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30" @click="removeSpellSet(pocket, props.set)">
              <icon name="x-sm" class="size-6 dst shrink-0 group-hover/btn:text-bc/100 text-bc/50" />
            </button>
            <label v-tippy="'Default Set'" class="rating rating-xs opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30 mb-0.5 has-checked:opacity-100">
              <input :key="props.setIndex" v-model="pocket.spells.default" type="radio" name="default-champ" class="mask mask-star-2 bg-neutral" aria-label="make champion default" :value="set" @change="handleDefault()" />
            </label>
  </div>
</template>