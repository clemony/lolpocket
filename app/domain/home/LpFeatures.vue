<script setup lang="ts">
import { motion } from "motion-v"
import type { icon } from "~~/layers/ui/app/icon-index"

const data = [
  {
    title: "Calculate",
    icon: "i-ui-calc",
    description:
      "See how your chosen champion's abilities & stats are affected by your build choices. Learn the stats on each item & rune, plus how they interact. Sum the totals for each set in your pocket. Additionally, view how passives & actives affect those stats.",
  },
  {
    title: "Browse",
    icon: "i-lucide-library",
    description:
      "View a database of League champions, items, spells, & runes. Get the data you need for build completion all in one spot. Patch data is updated as soon as available. Stay on the cutting edge with the latest patch notes.",
  },
  {
    title: "Export & Share",
    icon: "i-lucide-git-compare-arrows",
    description:
      "Upload to the cloud, export to the League Client, or share your build with friends. Never forget the item set you were cooking up. Show some scrubs the ingredients for a real Master Dish™. If you just find that perfect item for slot 6, you know it'll work.",
  },
  {
    title: "Customize",
    icon: "i-lucide-dna",
    description:
      "Personal homepages can be customized with modules -- so you always have the most important data on hand. Access patch notes, favorite builds, your personal item and champion stats, friends, plus more! All from your own dashboard.",
  },
]
</script>

<template>
  <UPageSection
    :ui="{
      root: 'h-screen overflow-hidden p-16',
      title: 'text-[3.5rem]! font-bold text-nc',
      container: 'h-[80vh] max-w-full rounded-[2rem] bg-neutral text-nc',
    }"
    title="Pocket Tools"
    orientation="horizontal"
    variant="solid">
    <UPageFeature
      v-for="(item, i) in data"
      :key="item.title"
      orientation="vertical"
      :ui="{
        root: 'group/feature max-w-160',

        title: 'text-[1.5rem] text-nc',
        description: 'mt-3 text-md! leading-9! text-pretty text-p2',
        leadingIcon: 'text-p2 not-group-first/feature:size-5.5',
      }"
      :title="item.title"
      :icon="item.icon"
      :description="item.description" />
  </UPageSection>
</template>
