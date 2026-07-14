<script setup lang="ts">
import { getRandomBg } from "~/domain/utils/img"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { mastery, mostPlayed } = storeToRefs(sData())
const { summoner } = storeToRefs(sSession())
const img = useImage()
const bg = computed(
  () => mostPlayed.value?.splash?.replace("uncentered", "tile") ?? getRandomBg()
)
const top = computed(() => {
  if (!mastery.value) return
  return [...mastery.value]
    .sort((a, b) => (b.totalPoints ?? 0) - (a.totalPoints ?? 0))
    .slice(0, 3)
})
console.log("🥸 - top:", top)
</script>

<template>
  <div v-if="summoner" class="w-full overflow-hidden rounded-4xl p-0!">
    <div
      :style="{
        background: `url(${img(bg)})`,
        backgroundSize: '100%',
        backgroundPositionY: '15%',
        backgroundRepeat: 'no-repeat',
      }"
      class="relative z-0 mb-10 h-22 w-full mask-b-to-90% contrast-110 grayscale"
      :alt="`${summoner?.name}'s Splash`"></div>

    <div class="absolute top-8 flex w-full flex-col items-center gap-0.5 px-2">
      <HoverIcon
        :tooltip="{ disabled: true }"
        type="summoner"
        size="6xl"
        :summoner />

      <div class="flex flex-col items-center gap-1">
        <span class="font-display text-3xl! leading-none font-bold">
          {{ summoner?.name || "Summoner" }}
        </span>
        <span
          v-if="summoner?.tag"
          class="inline-flex items-center align-middle text-xs leading-none">
          <Icon class="inline size-3" name="i-hash" />
          {{ summoner?.tag }}
        </span>
      </div>
    </div>

    <div class="w-full px-3 py-2">
      <div class="grid grid-cols-2 gap-2.5">
        <RankCardMini title="Solo" :entry="summoner?.ranked?.solo" />

        <RankCardMini title="Flex" :entry="summoner?.ranked?.flex" />
      </div>
      <div class="flex w-full items-center">
        <HoverIcon
          v-for="(c, i) in top"
          :id="c.championId"
          :key="i"
          type="champion"
          size="xl"
          class="" />
      </div>
    </div>
    <Separator class="bg-p3" />

    <!--    <SummonerToolbar
      class="px-1.5 py-2"
      warning
      update
    /> -->
  </div>
</template>
