<script setup lang="ts">
import { LayoutGroup, motion } from 'motion-v'

definePageMeta({
  name: 'champions',
  title: 'Champions',
  section: 'library',
  icon1: 'lol-champ',
})
const cs = useChampStore()
const { baseTileByChampKey } = await useIndexLookup()
const {championKeys, filteredKeys} = useChampionFilter(cs.championFilter)
</script>

<template>
  <NuxtLayout  name="champions-layout" class=" after:size-full after:pointer-events-none after:absolute after:top-36 after:rounded-t-[4rem] after:border-x-40 after:border-t-40 after:border-b1 after:z-0 after:scale-x-102 after:-left-0">

        <transition-slide as="div" group
          class="absolute items-start h-fit inset-0 top-0 pt-50 left-0  pb-8 user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(150px,1fr))] auto-rows-min gap-x-1.5 gap-y-1  overflow-auto overflow-x-hidden rounded-lg">
   
          <div
            v-for="key in championKeys"
            :key="key" class="max-w-96">
  <Dialog>
    <DialogTrigger class="size-full">

      <ChampionTile bg-size="140%" :url="getSplash(baseTileByChampKey(key))" :name="key" text class="min-h-64" object-position="50% -2rem" />
         
    </DialogTrigger>
            <LazyChampionInfoPopover :champion-key="key" class="champion w-full" hydrate-on-interact @click.right.prevent />
  </Dialog>
          </div>
        </transition-slide>
  </NuxtLayout>
</template>

<style scoped></style>
