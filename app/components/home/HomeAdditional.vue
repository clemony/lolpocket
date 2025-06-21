<script setup lang="ts">
import { motion } from 'motion-v'
import { itemVariants, wrapperVariants } from './variants'

const { progressY } = defineProps<{
  progressY: number
}>()

const wrapper = ref<HTMLElement | null>(null)

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
  <div ref="wrapper" class="bg-neutral text-nc @container relative z-0  h-[80vh] w-full flex overflow-hidden  items-center justify-center px-10">
    <div class="border-b1 ring-offset-b1 absolute z-20 m-auto size-[95%] rounded-3xl border inset-shadow-sm ring-1 ring-b1 ring-offset-50" />

    <div class="size-full grid wp-47% justify-items-center relative py-20">
      <motion.h2
        :style="{ transform: `translateY(${progressY}%)` }"
        class="text-14 absolute pr-14 h-full"
        :transition="{ type: 'inertia' }">
        Additional Tools.
      </motion.h2>
    </div>

    <div class="flex h-full wp-53% items-center">
      <div
        class="grid items-center wp-77%  grow justify-start ">
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
          class="grid -translate-y-[40px] p-6">
          <div class="mb-5 grid w-full items-center ">
            <icon
              v-if="item.icon"
              :name="item.icon"
              class="size-14 justify-self-center stroke-[0.5]" />

            <h3 class="!text-7 grow !font-semibold">
              {{ item.title }}
            </h3>
          </div>

          <p
            class="text-pretty leading-loose font-light text-4 " v-html="item.text" />
        </motion.div>

        <div />
      </div>

      <div class="min-w-32 wp-17% shrink" />
    </div>
  </div>
</template>

<style>

</style>
