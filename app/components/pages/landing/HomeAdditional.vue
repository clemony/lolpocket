<script setup lang="ts">
import { motion } from 'motion-v'
import { itemVariants, wrapperVariants } from './variants'

const { progressY } = defineProps<{
  progressY: number
}>()

const wrapper = useTemplateRef<HTMLElement | null>('wrapper')

const data = [
  {
    title: 'Calculate',
    icon: 'carbon:function-math',
    text: 'See how your chosen champion\'s <b>abilities & stats</b> are affected by your build choices. Learn the stats on each <b>item & rune</b> and how they interact. Sum the totals for each set in your pocket. Additionally, view how passives & actives affect those stats.',
  },
  {
    title: 'Browse',
    icon: 'iconoir:glasses',
    text: 'View a database of League champions, items, spells, & runes. Get the data you need for build completion all in one spot. Patch data is updated as soon as available. Stay on the cutting edge with the latest patch notes.',
  },
  {
    title: 'Export & Share',
    icon: 'iconoir:git-pull-request',
    text: 'Upload to the cloud, export to the League Client, or share your build with friends. Never forget the item set you were cooking up. Show some scrubs the ingredients for a real Master Dish™. If you just find that perfect item for slot 6, you <i>know</i> it\'ll work.',
  },
  {
    title: 'Customize',
    icon: 'hugeicons:dna-01',
    text: 'Personal homepages can be customized with modules -- so you always have the most important data on hand. Access patch notes, favorite builds, your personal item and champion stats, friends, plus more! All from your own dashboard.',
  },
]
</script>

<template>
  <div
    ref="wrapper"
    class="relative z-2 h-[80vh] w-full items-center justify-center bg-b1">
    <div
      class="
        bgneutral z-20 m-auto flex grid h-[98%] w-[95%] grid-cols-2 items-center
        gap-10 overflow-hidden rounded-3xl px-10 text-nc
      ">
      <div
        class="
          wp-77% relative grid size-full justify-items-center overflow-hidden
          py-20
        ">
        <motion.h2
          :style="{
            transform: `translateY(${Math.round(progressY * 100) / 100}%)`,
          }"
          class="text-xs4 absolute h-full pr-14"
          :transition="{ type: 'inertia' }">
          Additional Tools.
        </motion.h2>
      </div>

      <div class="wp-82% grid h-full grow items-center justify-start py-22">
        <motion.div
          v-for="(item, i) in data"
          :key="item.title"
          :ref="`item${i}`"
          :variants="itemVariants"
          initial="hidden"
          while-in-view="visible"
          :transition="{
            type: 'spring',
            visualDuration: 0.5,
            bounce: 0.2,
          }"
          :in-view-options="{
            amount: 0.8,
          }"
          class="">
          <div class="mb-5 flex w-full items-center gap-5">
            <icon
              v-if="item.icon"
              :name="item.icon"
              class="size-7 justify-self-center stroke-[0.5] text-nc" />

            <h3 class="grow text-3xl! font-semibold! text-nc">
              {{ item.title }}
            </h3>
          </div>

          <p
            class="text-lg/loose font-light text-pretty text-nc"
            v-html="item.text" />
        </motion.div>
      </div>
    </div>

    <div class="wp-17% min-w-32 shrink" />
  </div>
</template>
