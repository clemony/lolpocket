<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  name: 'mastery',
  icon: 'i-lol-mastery',
  iconStyle: 'scale-90 -mb-0.25',
  order: 1,
})

const state = useSummonerInject()

const champQuery = ref<string | null>('')

const noMastery = computed(() => {
  if (!summoner?.mastery?.champions?.length)
    return

  const all = ix().champions.map(c => c.id)
  const map = summoner?.mastery?.champions?.map(c => c.id)

  const array = useArrayDifference(all, map)
  return array.value.map((a) => {
    return {
      id: a,
      level: 1,
      points: 0,
      lastPlayed: null,
    }
  })
})

const list = computed(() => {
  return summoner?.mastery?.champions?.concat(noMastery.value)
})

onMounted(() => {
  state.fetchMastery()
})

const masteryStats = [
  {
    title: 'Levels',
    data: summoner?.mastery?.totalLevels.toLocaleString() ?? 0,
  },
  {
    title: 'Points',
    data: summoner?.mastery?.totalPoints?.toLocaleString() ?? 0,
  },
  {
    title: 'Champions Played',
    data: `${summoner?.mastery?.champions?.length ?? 0} / ${ix().champions?.length}`,
  },
]
</script>

<template>
  <div class="size-full relative">
    <div
      class="absolute inset-0 min-h-[130vh] size-full grid auto-rows-[max-content_100vh] bg-b1 items-center">
      <article class="w-3/5 mx-auto">
        <header class="w-full flex pt-24 items-center justify-between pb-2">
          <h1 class="self-start dst font-bold">
            Champion Mastery
          </h1>
        </header>

        <div class="flex flex-col w-full gap-5 py-3">
          <section class="gap-8 flex gap-3 w-full h-fit items-center py-4">
            <BasicCard
              v-for="data in masteryStats"
              :key="data.title"
              class="px-7 min-w-64 w-80 h-32 pb-5 pt-7 grid gap-4">
              <h1 class="font-black tracking-wide text-nowrap text-xxs0">
                {{ data.data }}
              </h1>
              <h6 class="lowercase opacity-50 self-end">
                {{ data.title }}
              </h6>
            </BasicCard>

            <BasicCard class="px-7 min-w-64 w-80 h-32 pb-5 pt-5 grid gap-4">
              <input
                type="text"
                class="input w-full font-black tracking-wide h-full text-nowrap text-xxs0" />

              <h6 class="lowercase opacity-50 self-end">
                fun
              </h6>
            </BasicCard>
          </section>
        </div>
      </article>

      <MasteryGrid
        v-if="list"
        :mastery="list"
        :summoner />
    </div>
  </div>
</template>
