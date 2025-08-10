<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()
console.log('💠 - summoner:', summoner.mastery)

definePageMeta({
  name: 'mastery',
})

const { fetchMastery } = useSummoner(summoner?.puuid)

const champQuery = ref<string | null>('')

const noMastery = computed (() => {
  if (!summoner?.mastery?.champions?.length)
    return

  const all = ix().champions.map(c => c.id)
  const map = summoner?.mastery?.champions?.map(c => c.id)

  const array = useArrayDifference(all, map)
  return array.value.map((a) => {
    return {
      id: a,
      level: 0,
      points: 0,
      lastPlayed: null,
    }
  },
  )
})

const list = computed (() => {
  return summoner?.mastery?.champions?.concat(noMastery.value)
})

onMounted (() => {
  fetchMastery()
})

const masteryStats = [
  {
    title: 'Levels',
    data: summoner?.mastery?.totalLevels.toLocaleString() ?? 0,
  },
  {
    title: 'Points',
    data: summoner?.mastery?.totalPoints.toLocaleString() ?? 0,
  },
  {
    title: 'Champions Played',
    data: `${summoner?.mastery?.champions?.length ?? 0} / ${ix().champions?.length}`,
  },
]
</script>

<template>
  <main class="py-22 px-1 w-3/5 flex-col relative flex  gap-14  mx-auto size-champions items-center">
    <div class="w-full flex items-center justify-between pb-2">
      <h1 class="self-start dst font-bold">
        Champion Mastery
      </h1>
    </div>

    <article class="flex flex-col w-full gap-5 py-3">
      <section class="gap-8 flex gap-3 w-full  h-fit items-center py-4">
        <Card
          v-for="data in masteryStats"
          :key="data.title"
          class="px-7 min-w-64 w-80 h-32 pb-5 pt-7 grid gap-4">
          <h1
            class="font-black tracking-wide text-nowrap text-10">
            {{ data.data }}
          </h1>
          <h6 class="lowercase   opacity-50 self-end">
            {{ data.title }}
          </h6>
        </Card>

        <Card
          class="px-7 min-w-64 w-80 h-32 pb-5 pt-5 grid gap-4">
          <input
            type="text"
            class="input w-full font-black tracking-wide h-full text-nowrap text-10" />

          <h6 class="lowercase   opacity-50 self-end">
            fun
          </h6>
        </Card>
      </section>
    </article>

    <article class="w-full">
      <MasteryGrid
        :mastery="list"
        :summoner />
    </article>
  </main>
</template>