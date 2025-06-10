<script setup lang="ts">

const { pocket, puuid} = defineProps<{
  pocket: Pocket
  puuid: string
}>()

definePageMeta({
  name: 'pocket champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  section: 'pocket',
  search: false,
})

/* const {loading, ready, forceReload} = useSummonerMastery(puuid) */

const activePocket = computed (() => pocket)

const ix = useIndexStore()
</script>

<template>
  <div class="size-full  pt-26 ">
    <div class="flex gap-8 dst pb-9 px-13 items-center **:align-bottom">
    <h1 class="text-9">Champions</h1>
<ChampionQuote class="font-serif" />
  </div>
    <div  class="  grid grid-flow-row auto-cols-auto  grid-cols-[repeat(auto-fill,minmax(80px,1fr))]  px-14 w-full pb-3 inset-0   gap-3 ">

        <ChampionIcon
        v-for="champion in ix.champions"
        :key="champion.id"
          :class="{ ' not-[.checkbox]:**:contrast-110 not-[.checkbox]:**:opacity-65 not-[.checkbox]:**:grayscale border scale-90 border-neutral/60 relative': pocket.champions.includes(champion.key) }" :id="champion.id" class="hover-ring  rounded-lg size-26 ">
          <slot />

          <input
            v-model="activePocket.champions" type="checkbox" :value="champion.key" class="absolute tldr-30 opacity-0 scale-0 checkbox checkbox-neutral rounded-full drop-shadow-sm top-0 right-0 z-1" :class="{ 'scale-100 opacity-100': pocket.champions.includes(champion.key) }" />
        </ChampionIcon>
      </div>
    </div>
</template>

<style scoped></style>
