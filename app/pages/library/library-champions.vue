<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { motion } from 'motion-v'

definePageMeta({
  name: 'champion-library',
  path: '/library/champions',
  title: 'Champions',
  section: 'library',
})

const target = ref(null)
const { y } = useScroll(target)
const quote = ref(null)
onMounted (() => {
  quote.value = getQuote()
})

const ds = useDataStore()
</script>

<template>
  <NuxtLayout name="champions-layout">
    <div class="relative grow">
      <!-- <div class="w-full flex items-center pt-24 pl-8 pr-16 pb-12">
        <span class="w-6 h-full" />
        <motion.p
          v-if="y > 80" class="w-fit text-nowrap overflow-x-hidden text-left flex justify-start items-center font-light mb-px  italic text-1"
          :initial="{ opacity: 0, width: 0, translate: '0px 20px' }"
          :animate="{ opacity: 1, width: '100%', translate: '0 0' }"
          :transition="{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.3,
            duration: 0.5,
            staggerChildren: 10 }">
          {{ quote }}
        </motion.p>
        <Grow />
      </div> -->
      <div ref="target" class="inset-0 top-0 left-0 absolute  overflow-y-auto">
        <div class="flex items-center w-full pr-16 pl-8 gap-8 pt-22">
          <h1 class="!text-9 tracking-tight">
            Champions
          </h1>
          <p
            class="text-4 drop-shadow-text items-center px-2 font-serif tracking-wide text-nowrap flex ">
            {{ quote }}
          </p>
        </div>
        <ChampionList class="gap-3  tldr-30 " />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
