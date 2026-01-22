<script lang="ts" setup>
import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion-v'

const { scrollY } = useScrollInject()

// const tt = await tabTransform()

const items = [
  {
    name: 'summoner-region-slug',
    title: 'Match History',
  },
  { name: 'summoner-region-slug-champions', title: 'Champions', },

  { name: 'summoner-region-slug-pockets', title: 'Pockets', },
  { name: 'summoner-region-slug-live', title: 'Live', }
]
const filteredItems = computed (() => !ui().openChampionTab ? items.filter(i => i.name !== 'summoner-region-slug-champion_key') : items)

const route = useRoute()
function navigate() {
  if (route.name === 'summoner-region-slug-champion_key')
    navigateTo({ name: 'summoner-region-slug-champions' })
  ui().openChampionTab = null
}
</script>

<template>
  <motion.nav
    role="tablist"
    :class="
      cn('relative z-3 flex h-15 w-fit items-end self-end justify-self-end border-b-0! transition-none *:select-none **:text-sm',
      )
    ">
    <ChampionNavTab
      v-for="item, i in filteredItems"
      :key="i"
      :route-name="item.name"
      @click="navigateTo({ name: item.name, params: { champion_key: ui().openChampionTab } })">
      <Icon
        v-if="route.name === 'summoner-region-slug-champion_key' && item.name === 'summoner-region-slug-champions'"
        name="left"
        class="absolute -left-6 size-3.75 **:stroke-[2.4]" />
      {{ item.title }}
    </ChampionNavTab>
  </motion.nav>
</template>
