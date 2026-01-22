<script setup lang="ts">
const { api, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  api: SummonerApi
}>()

const img = useImage()
const { champions, mastery, splash, summoner } = api
const bg = computed (() => splash?.value.replace('uncentered', 'tile') ?? getRandomBg())

const mData = await mastery()
const top = computed (() => {
  if (!mData)
    return
  return [...mData].sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 3)
})
</script>

<template>
  <div class="w-74! p-0!">
    <div
      :style="{
        background: `url(${img(bg)})`,
        backgroundSize: '100%',
        backgroundPositionY: '15%',
        backgroundRepeat: 'no-repeat',
      }"
      :alt="`${summoner?.name}'s Splash`"
      class="relative z-0 mb-10 h-22 w-full overflow-hidden rounded-t-lg">
      <Badge
        size="5"
        class="absolute top-2 right-2 gap-0 rounded-lg border-none bg-b1/50 pl-1.5 text-xxs! font-semibold! text-bc/70 backdrop-blur-lg">
        <span class="relative grid size-3 place-items-center">
          <Icon
            name="up"
            class="absolute size-4.25! shrink-0 -translate-y-0.5 **:stroke-[3.8] **:text-bc/70!" />

          <Icon
            name="up"
            class="absolute size-3.5! shrink-0 translate-y-0.5 **:stroke-[2.8] **:text-bc/70!" />
        </span>
        {{ summoner?.level }}
      </Badge>
    </div>

    <div class="absolute top-8 flex h-24 w-full items-end px-2">
      <div class="grid size-20 place-items-center rounded-full bg-b1 p-1.5">
        <SummonerIcon
          :summoner
          class="size-full rounded-full" />
      </div>

      <div class="inline items-center gap-3 px-2 pb-2 align-baseline">
        <span class="text-xxl! font-serif leading-6 font-black dst">
          {{ summoner?.name || "Summoner" }}
        </span>
        <span
          v-if="summoner?.tag"
          class="ml-2 leading-6">
          <Icon
            name="hash"
            class="-mt-1 -mr-px inline size-3.5" />
          {{ summoner?.tag }}
        </span>
      </div>
    </div>

    <div class="w-full px-3 py-2">
      <div class="grid grid-cols-2 gap-2.5">
        <RankCardMini
          v-if="as().settings?.show_solo"
          title="Solo/Duo"
          :entry="summoner?.ranked?.solo" />

        <RankCardMini
          v-if=" as().settings?.show_flex"
          title="Flex"
          :entry="summoner?.ranked?.flex" />
      </div>
      <div class="grid w-full grid-cols-3 place-items-center">
        <div
          v-for="c, i in top"
          :key="i"
          class="flex w-full flex-col items-center -space-y-2">
          <ChampionIcon
            :id="c.championId"
            class="rounded-full" />
          <span class="badge border-none badge-neutral bg-neutral/80 px-1.5 badge-sm text-xxs font-semibold text-nc!">
            <Icon
              name="lol:mastery"
              class="size-3.5 **:text-nc!" />{{ c.level }}</span>
        </div>
      </div>
    </div>
    <Separator class="bg-b3" />
    <SummonerToolbar
      class="px-1.5 py-2"
      :api
      warning
      update />
  </div>
</template>
