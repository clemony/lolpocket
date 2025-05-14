<script setup lang="ts">
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'

const { pocket, puuid, champions } = defineProps<{
  pocket: Pocket
  puuid: string
  champions: ChampionLite[]
}>()

definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  section: 'pocket',
})

/* const {loading, ready, forceReload} = useSummonerMastery(puuid) */

const activePocket = computed (() => pocket)
</script>

<template>
  <LayoutGroup>
    <motion.div :layout="true" class="  grid grid-flow-row auto-cols-auto  h-fit grid-cols-[repeat(auto-fill,minmax(80px,1fr))]  px-14 w-full  pt-28 pb-3 inset-0   gap-3 ">
      <template
        v-for="champion in champions"
        :key="champion.id">
        <Champion
          :class="{ 'inset-shadow-sm inset-shadow-black not-[.checkbox]:**:contrast-110 not-[.checkbox]:**:opacity-65 not-[.checkbox]:**:grayscale border scale-90 border-neutral/60 relative': pocket.champions.includes(champion.key) }"
          :url="champion.splash" :name="champion.key" class="hover-ring ">
          <slot />

          <input
            v-model="activePocket.champions" type="checkbox" :value="champion.key" class="absolute tldr-30 opacity-0 scale-0 checkbox checkbox-neutral rounded-full drop-shadow-sm top-0 right-0 z-1" :class="{ 'scale-100 opacity-100': pocket.champions.includes(champion.key) }" />
        </Champion>
      </template>
    </motion.div>
  </LayoutGroup>
</template>

<style scoped></style>
