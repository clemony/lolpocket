<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'
const { runes, pocket } = defineProps<{
  runes: Rune[]
  pocket: Pocket
}>()

const rs = useRuneStore()
const set = computed(() => pocket.runes[rs.selectedRuneSet])
</script>

<template>
  <Field title="Keystone" class="  h-28   w-114 max-w-114 relative">
    <RadioGroup
      v-model="set.keystone"  class="w-114">
      <transition-slide group class=""
          :class="cn(
          'min-w-114 place-items-center w-114 max-w-114 !grid overflow-hidden relative flex-nowrap rounded-xl  py-4   size-full rounded-xl  **:select-none', `grid-cols-${runes.length ?? 3}`
      )">
        <label
          v-for="rune in runes" :key="rune.id"
          v-tippy="rune.name"
          class=" rounded-full opacity-75  hover:opacity-100 hover:grayscale-0  group/r border-transparent relative cursor-pointer tldr-30  grid place-items-center shrink-0 size-22 aspect-square"
          :class="cn(
            {'to-b1/40 rounded-full  opacity-100 scale-115  grayscale-0': set.keystone == rune.key}, ``
      )">
          <RadioGroupItem
            type="radio"
            name="keystone"
            :value="rune.key"
            class="absolute hidden peer"
            :checked="rune.key == set[0].runes[0]" />
          <Img
            :img="`/img/runes/${set[0].path}/${rune.key}.webp`"
            :alt="rune.name"
            class="absolute drop-shadow-sm drop-shadow-black/40   opacity-0 group-hover/r:opacity-90 duration-400  transition-all shrink-0   h-19 w-auto " :class="{ 'opacity-100': set.keystone == rune.key }" />
          <Img
            :img="`/img/runes/${set[0].path}/${rune.key}_grayscale.webp`"
            :alt="rune.name"
            class="h-19 w-auto   drop-shadow-sm   shrink-0 absolute contrast-150 brightness-90 opacity-100  group-hover/r:opacity-0 duration-400 transition-all " :class="{ 'opacity-0': set.keystone == rune.key }" />

        </label>


     </transition-slide>
<!--
      <div  class="size-full grid grid-cols-3 py-4">
        <Placeholder v-for="i in 3" :key="i" class="size-18 rounded-full place-self-center" />
      </div> -->
    </RadioGroup>
  </Field>
</template>

<style scoped>

</style>