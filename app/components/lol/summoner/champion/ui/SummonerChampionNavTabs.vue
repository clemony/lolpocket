<script lang="ts" setup>
import { motion, useMotionValueEvent, useSpring, useTransform } from 'motion-v'

const { scrollY } = useScrollInject()

async function tabTransform() {
// Smooth sticky state (0 → not sticky, 1 → sticky)
  const stickyRaw = useMotionValue(0)
  const sticky = useSpring(stickyRaw, { damping: 18, mass: 0.7, stiffness: 180 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    stickyRaw.set(latest > 220 ? 1 : 0)
  })

  // Individual tab transforms
  const tabPaddingX = useTransform(sticky, [0, 1], ['3rem', '3rem'])

  // Nav container transforms
  const gap = useTransform(sticky, [0, 1], ['0.5rem', '0rem'])
  const translateY = useTransform(sticky, [0, 1], ['-6%', '-13%'])
  const translateX = useTransform(sticky, [0, 1], ['0%', '-0%'])
  const opacity = useTransform(sticky, [0, 1], ['1', '0.95'])

  return {
    sticky,
    stickyRaw,
    style: { gap, opacity, translateX },
    tabPaddingX,
    translateY
  }
}

const tt = await tabTransform()

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
    :style="tt?.style"
    :class="
      cn('relative z-3 flex h-15 w-fit items-end self-end justify-self-end border-b-0! transition-none *:select-none **:text-2',
      )
    ">
    <ChampionNavTab
      v-for="item, i in filteredItems"
      :key="i"

      :tab-transform
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
