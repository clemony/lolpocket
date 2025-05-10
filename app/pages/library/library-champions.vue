<script setup lang="ts">
import { AnimatePresence, LayoutGroup, motion } from 'motion-v'

definePageMeta({
  name: 'champion-library',
  path: '/library/champions',
  title: 'Champions',
  section: 'library',
})
</script>

<template>
  <NuxtLayout v-slot="{ champions }" name="champions-layout" class=" after:size-full after:pointer-events-none after:absolute after:top-36 after:rounded-t-[4rem] after:border-x-40 after:border-t-40 after:border-b1 after:z-0 after:scale-x-102 after:-left-0">
    <LayoutGroup>
      <KeepAlive>
        <motion.div
          layout
          class="absolute items-start h-fit inset-0 top-0 pt-50 left-0  pb-8 user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(150px,1fr))] auto-rows-min gap-x-1.5 gap-y-1  overflow-auto overflow-x-hidden rounded-lg">
          <motion.div
            v-for="champion in champions"
            :key="champion.id"
            layout>
            <LazyChampionInfoPopover :champion-key="champion.key" class="champion w-full" @click.right.prevent :hydrate-on-visible="true"/>
          </motion.div>
        </motion.div>
      </KeepAlive>
    </LayoutGroup>
  </NuxtLayout>
</template>

<style scoped></style>
