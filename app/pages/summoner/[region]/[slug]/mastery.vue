<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()
console.log('💠 - summoner:', summoner.mastery)

definePageMeta({
  name: 'summoner-mastery',
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
    title: `of ${ix().champions?.length} Champions Played`,
    data: `${summoner?.mastery?.champions?.length ?? 0}`,
  },
  {
    title: '',
    data: 0,
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

    <article class="flex flex-col gap-5 py-3">
      <h3 class="px-2">
        Totals
      </h3>
      <section class="p-5  flex gap-3 w-full  h-fit items-center py-4">
        <Card
          v-for="data in masteryStats"
          :key="data.title"
          class="px-7 min-w-64 w-80 pb-5 pt-7 grid gap-4">
          <div class="w-full gap-0.25 flex items-center">
            <template
              v-for="number in data.data.toString().split('')"
              :key="number">
              <h1
                v-if="number != ','"
                class="font-black bg-neutral rounded-md text-nc py-1 px-1.25 justify-self-center tracking-wide text-nowrap text-10">
                {{ number }}
              </h1>
              <h1
                v-else
                class="font-black w-3.5 h-full relative items-end justify-self-center tracking-wide text-nowrap text-9">
                <icon
                  name="simple-icons:comma"
                  class="size-3.5 absolute bottom-0" />
              </h1>
            </template>
          </div>
          <h6 class="lowercase  text-end  justify-self-end opacity-50 self-end">
            {{ data.title }}
          </h6>

          <Separator class="last-of-type:hidden w-full col-span-full mb-1" />
        </Card>
      </section>

      <h3 class="px-2">
        Quick Stats
      </h3>
      <section class="p-5 field-box grid grid-cols-[2fr_1fr] gap-3 w-full  h-fit items-center py-4">
        <template
          v-for="data in masteryStats"
          :key="data.title">
          <h5 class="col-start-1 opacity-60">
            {{ data.title }}
          </h5>
          <p class="col-start-2 text-end font-medium">
            {{ data.data }}
          </p>

          <Separator class="last-of-type:hidden w-full col-span-full mb-1" />
        </template>
      </section>
    </article>
    <section
      v-if="summoner?.mastery?.champions"
      class="grid grid-cols-6 px-2  grid-flow-col place-items-center py-2 overflow-hidden mx-auto gap-8 w-full"
      style="
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  ">
      <MasteryPhoto
        v-for="champion in summoner.mastery.champions.slice(0, 6)"
        :key="champion.id"
        :champion />
    </section>

    <article class="w-full">
      <MasteryGrid
        :mastery="list"
        :summoner />
    </article>
  </main>
</template>