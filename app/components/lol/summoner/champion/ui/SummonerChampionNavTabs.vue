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
  const tabPaddingX = useTransform(sticky, [0, 1], ['3rem', '1.6rem'])

  // Nav container transforms
  const gap = useTransform(sticky, [0, 1], ['0.5rem', '0rem'])
  const translateY = useTransform(sticky, [0, 1], ['-6%', '-13%'])
  const translateX = useTransform(sticky, [0, 1], ['0%', '8%'])
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
  {
    name: 'summoner-region-slug-champion_key',
    title: computed (() => champNameByKey(ui().openChampionTab)),
    championKey: ui().openChampionTab,
  },
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
      :justify-start="item.name === 'summoner-region-slug-champion_key'"
      @click="navigateTo({ name: item.name, params: { champion_key: ui().openChampionTab } })">
      <template
        v-if="item.championKey">
        <ChampionIcon
          :k="String(ui().openChampionTab)"
          class="mr-3 size-5.5 rounded-full" />
        <span :class="cn({ 'grow text-start': item.name !== 'summoner-region-slug-champion_key' })">
          {{ item.title }}
        </span>
      </template>
      <template v-else>
        {{ item.title }}
      </template>
      <template
        v-if="item.championKey"
        #btn>
        <Button
          size="sq-5"
          variant="ghost"
          hover="secondary"
          class="absolute right-2.5 z-10 grid aspect-square size-5 shrink-0 translate-y-1.75 place-items-center p-0 opacity-30 after:absolute after:size-10 hover:opacity-100"
          @click="navigate()">
          <Icon
            name="x"
            class="size-3 **:stroke-[2.8]" />
        </Button>
      </template>
    </ChampionNavTab>
  </motion.nav>
</template>
