<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  key: 'm',
  name: 'mastery',
  icon: 'i-lol-mastery',
  iconStyle: 'scale-90 -mb-0.25',
  order: 1,
})

const state = useSummonerInject()

const champQuery = ref<string | null>('')
const sm = computed (() => my().summonerMastery[summoner.puuid]).value

const noMastery = computed(() => {
  if (!sm.champions?.length)
    return

  const all = ix().champions.map(c => c.id)
  const map = sm?.champions?.map(c => c.id)

  const array = useArrayDifference(all, map)
  return array.value.map((a) => {
    return {
      id: a,
      lastPlayed: null,
      level: 1,
      points: 0,
    }
  })
})

const list = computed(() => {
  return sm?.champions.concat(noMastery.value)
})

onMounted(() => {
  state.fetchMastery()
})

const masteryStats = [
  {
    title: 'Levels',
    data: sm?.totalLevels.toLocaleString() ?? 0,
  },
  {
    title: 'Points',
    data: sm?.totalPoints?.toLocaleString() ?? 0,
  },
  {
    title: 'Champions Played',
    data: `${sm?.champions?.length ?? 0} / ${ix().champions?.length}`,
  },
]
</script>

<template>
  <div class="relative size-full">
    <div
      class="
        absolute inset-0 grid size-full min-h-[130vh]
        auto-rows-[max-content_100vh] items-center bg-b1
      ">
      <article class="mx-auto w-3/5">
        <header class="flex w-full items-center justify-between pt-24 pb-2">
          <h1 class="self-start font-bold dst">
            Champion Mastery
          </h1>
        </header>

        <div class="flex w-full flex-col gap-5 py-3">
          <section class="flex h-fit w-full items-center gap-8 py-4">
            <BasicCard
              v-for="data in masteryStats"
              :key="data.title"
              class="grid h-32 w-80 min-w-64 gap-4 px-7 pt-7 pb-5">
              <h1 class="text-10 font-black tracking-wide text-nowrap">
                {{ data.data }}
              </h1>
              <h6 class="self-end lowercase opacity-50">
                {{ data.title }}
              </h6>
            </BasicCard>

            <BasicCard class="grid h-32 w-80 min-w-64 gap-4 px-7 pt-5 pb-5">
              <input
                type="text"
                class="
                  input h-full w-full text-10 font-black tracking-wide
                  text-nowrap
                " />

              <h6 class="self-end lowercase opacity-50">
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
