<script lang="ts" setup>
import { motion } from "motion-v"
import { useCarousel } from "~/composables/ui/useCarousel"
import type { CarouselApi } from "~/types/ui.types"

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

const masteryGroups = computed<Record<number, ChampionMastery[]> | undefined>(
  () => {
    if (!data.value) return
    return {
      10: data.value?.filter((c) => c.level && c?.level >= 10),
      9: data.value?.filter((c) => c.level && c?.level >= 9 && c?.level < 10),
      8: data.value?.filter((c) => c.level && c?.level >= 8 && c?.level < 9),
      7: data.value?.filter((c) => c.level && c?.level >= 7 && c?.level < 8),
      6: data.value?.filter((c) => c.level && c?.level >= 6 && c?.level < 7),
      5: data.value?.filter((c) => c.level && c?.level >= 5 && c?.level < 6),
      4: data.value?.filter((c) => c.level && c?.level >= 4 && c?.level < 5),
      3: data.value?.filter((c) => c.level && c?.level >= 3 && c?.level < 4),
      2: data.value?.filter((c) => c.level && c?.level >= 2 && c?.level < 3),
      1: data.value?.filter((c) => c.level && c?.level >= 1 && c?.level < 2),
      0: data.value?.filter((c) => c.level && c?.level < 1),
    }
  }
)
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

const carousel = useTemplateRef<{
  ref: HTMLElement
  api: CarouselApi
}>("carousel")

const { prev, next, carouselViewportMask, updateCarouselMask } = useCarousel(
  carousel.value,
  data
)

watch(
  data,
  async () => {
    await nextTick()
    updateCarouselMask()
  },
  { flush: "post" }
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
              :kbds="localStore().hotkeys?.subSearch"
              :model-value="query"
              @clear-input="query = ''" />
          </template>
        </LazyUInput>
        <LazyQueueFilters />
        <LazyMatchPositionFilter />
      </div>
      <h1>Mastery</h1>
      <div class="w-full max-w-full space-y-8 rounded-6xl bg-p0 py-8">
        <div
          class="flex w-full max-w-3xl items-center justify-center gap-8 justify-self-center">
          <MasteryMedal
            v-for="item in data?.slice(0, 5)"
            :key="item.championId"
            :mastery="item" />
        </div>
        <UCollapsible
          v-model:open="open"
          :ui="{
            root: 'w-full max-w-full overflow-hidden px-14',
            content: 'grid w-full max-w-full overflow-hidden py-8',
          }">
          <UButton
            block
            size="lg"
            :ui="{
              base: 'w-full! rounded-5xl',
              trailingIcon: 'transition-rotate',
            }"
            aria-label="open all champion mastery data"
            @click="prev()" />

          <template #content>
            <div
              v-for="[k, v] in Object.entries(
                masteryGroups as Record<number, ChampionMastery[]>
              )"
              :key="k.toString()"
              class="w-full">
              <div
                class="grid w-full grid-cols-[repeat(auto-fill,minmax(58px,1fr))] grid-rows-[repeat(auto-fill,minmax(58px,1fr))] place-items-center gap-3 py-3">
                <HoverIcon
                  v-for="item in v"
                  :id="item.championId"
                  :key="item.championId"
                  size="9xl"
                  :ui="{
                    root: '',
                    image:
                      'border! border-iron shadow-sm ring ring-iron/60 ring-offset-1 ring-offset-iron',
                  }"
                  type="champion" />
              </div>
            </div>
          </template>
        </UCollapsible>
      </div>
      <div class="w-full overflow-hidden rounded-6xl bg-p0 ring ring-p2">
        <RecentlyPlayedTable />
      </div>
    </div>
  </motion.div>
</template>
