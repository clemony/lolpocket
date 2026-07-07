<script lang="ts" setup>
import { motion } from "motion-v"

import type { TableColumn } from "@nuxt/ui"
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui"
import { description } from "valibot"
import { isMobile } from "~~/layers/lib/shared/utils/device"

const UUser = resolveComponent("UUser")
definePageMeta({
  title: "Champions",
  description: "Discover in depth champion data for each played.",
  icon: "i-lp-champ-circle", //"i-lp-champ",
  class: "**:stroke-[1.6]", //"scale-90 -mb-0.25",
  keepalive: true,
  search: false,
  order: 1,
})
const { summoner } = storeToRefs(sSession())

const { mastery } = storeToRefs(sData())
const data = computed(() => {
  if (!mastery.value) return

  return Object.values(mastery.value)?.sort((a, b) =>
    a?.totalPoints && b?.totalPoints ? b?.totalPoints - a?.totalPoints : -1
  )
})
const query = shallowRef<string>("")

const direction = computed(() => (isMobile() ? "vertical" : "horizontal"))
const open = shallowRef<boolean>(false)
const toggleOpen = useToggle(open)
watch(
  () => open.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <motion.div ref="body" class="z-auto flex w-full max-w-[1100px] grow">
    <div class="z-auto flex w-full grow flex-col gap-8 pt-12">
      <div class="flex items-center gap-4">
        <LazyUInput
          v-model:model-value="query"
          placeholder="Search..."
          icon="i-search"
          size="lg"
          :ui="{
            root: 'w-full max-w-80 grow',
            base: 'rounded-4xl bg-p0/50 inset-shadow-sm inset-ring-p2',
          }">
          <template v-if="query" #trailing>
            <KbdClear
              :kbds="user().hotkeys?.subSearch"
              :model-value="query"
              @clear-input="query = ''" />
          </template>
        </LazyUInput>
        <LazyQueueFilters />
        <LazyMatchPositionFilter />
      </div>
      <h1>Mastery</h1>
      <div
        class="flex w-full max-w-full items-center justify-center rounded-6xl bg-p0 py-8">
        <div class="w-full max-w-3xl">
          <UCarousel
            ref="carousel"
            v-slot="{ item }"
            arrows
            align="start"
            :ui="{
              root: 'my-auto max-h-max w-full',
              viewport: 'flex h-full items-center justify-start px-8 py-1',
              container: 'flex w-full max-w-full items-center justify-start',
              item: 'grid max-w-48 basis-1/5 items-center justify-center pl-0',
            }"
            drag-free
            :slides-to-scroll="2"
            wheel-gestures
            :items="data">
            <MasteryMedal :mastery="item" />
          </UCarousel>
        </div>
      </div>
      <div class="w-full overflow-hidden rounded-6xl bg-p0 ring ring-p2">
        <RecentlyPlayedTable />
      </div>
    </div>
  </motion.div>
</template>
