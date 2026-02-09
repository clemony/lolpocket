<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { mastery, splash } = storeToRefs(s_data())
const { summoner } = storeToRefs(s_session())
const img = useImage()
const bg = computed(
  () => splash?.value?.replace("uncentered", "tile") ?? getRandomBg()
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
  <div v-if="summoner" class="w-74! p-0!">
    <div
      :style="{
        background: `url(${img(bg)})`,
        backgroundSize: '100%',
        backgroundPositionY: '15%',
        backgroundRepeat: 'no-repeat',
      }"
      class="relative z-0 mb-10 h-22 w-full overflow-hidden rounded-t-lg"
      :alt="`${summoner?.name}'s Splash`">
      <Badge
        class="absolute top-2 right-2 gap-0 rounded-lg border-none bg-p0/50 pl-1.5 text-2xs! font-semibold! text-pc/70 backdrop-blur-lg"
        size="xs">
        <span class="relative grid size-3 place-items-center">
          <Icon
            class="absolute size-4.25! shrink-0 -translate-y-0.5 **:stroke-[3.8] **:text-pc/70!"
            name="up" />

          <Icon
            class="absolute size-3.5! shrink-0 translate-y-0.5 **:stroke-[2.8] **:text-pc/70!"
            name="up" />
        </span>
        {{ summoner?.level }}
      </Badge>
    </div>

    <div class="absolute top-8 flex h-24 w-full items-end px-2">
      <div class="grid size-20 place-items-center rounded-full bg-p0 p-1.5">
        <SummonerIcon class="size-full rounded-full" :summoner />
      </div>

      <div class="inline items-center gap-3 px-2 pb-2 align-baseline">
        <span class="font-serif text-xxl! leading-6 font-black dst">
          {{ summoner?.name || "Summoner" }}
        </span>
        <span v-if="summoner?.tag" class="ml-2 leading-6">
          <Icon class="-mt-1 -mr-px inline size-3.5" name="hash" />
          {{ summoner?.tag }}
        </span>
      </div>
    </div>

    <div class="w-full px-3 py-2">
      <!--
      <div class="grid grid-cols-2 gap-2.5">
        <RankCardMini title="Solo/Duo" :entry="summoner?.ranked?.solo" />

        <RankCardMini title="Flex" :entry="summoner?.ranked?.flex" />
      </div> -->
      <div class="grid w-full grid-cols-3 place-items-center">
        <div
          v-for="(c, i) in top"
          :key="i"
          class="flex w-full flex-col items-center -space-y-2">
          <Champion :id="c.championId" class="rounded-full" />
          <span
            class="badge border-none badge-neutral bg-neutral/80 px-1.5 badge-sm text-2xs font-semibold text-nc!">
            <Icon class="size-3.5 **:text-nc!" name="lol:mastery" />
            {{ c.level }}
          </span>
        </div>
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
