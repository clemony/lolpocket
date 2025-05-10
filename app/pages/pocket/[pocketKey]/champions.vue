<script setup lang="ts">
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'


definePageMeta({
  name: 'champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  section: 'pocket',
})

const {pocket, puuid, champions}= defineProps<{
  pocket: Pocket
  puuid: string
  champions: ChampionLite[]
}>()


/* const {loading, ready, forceReload} = useSummonerMastery(puuid) */

</script>

<template>
  <LayoutGroup>
      <motion.div  :layout="true"  class="  grid grid-flow-row auto-cols-auto  h-fit grid-cols-[repeat(auto-fill,minmax(70px,1fr))]  px-18 w-full  pt-2 pb-3 inset-0   gap-3 ">
        <template
          v-for="champion in champions"
          :champ-key="champion.key">
          <Champion
          :class="{'grayscale': pocket.champions.children.map(c => c.key).includes(champion.key)}"
   :champ-key="champion.key"  :name="champion.key"  class="hover-ring ">
            <slot />

            <input
              v-model="pocket.champions.children" type="checkbox" :value="champion" class="hidden" />
          </Champion>
        </template>
      </motion.div>

  </LayoutGroup>


</template>

<style scoped></style>
