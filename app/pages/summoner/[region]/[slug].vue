<script setup lang="ts">
definePageMeta({
  name: 'summoner',
  title: 'Summoner Profile',
  section: 'summoner',
  path: '/summoner/:region/:slug',
  search: false,
})

const route = useRoute()
const region = computed(() => route.params.region?.toString())
const slug = computed(() => route.params.slug?.toString())

const name = computed(() => slug.value?.split('_')?.[0] ?? '')
const tag = computed(() => slug.value?.split('_')?.[1] ?? '')

const ss = useSummonerStore()
console.log('💠 - ss:', ss.summoners)
const puuid = ref<string | null>(null)
const summoner = ref<Summoner | null>(null)
const loading = ref(true)

async function resolveAndFetch() {
  loading.value = true
  try {
    if (!region.value || !name.value || !tag.value) {
      console.warn('Missing params:', { region: region.value, name: name.value, tag: tag.value })
      return
    }

    const result = await ss.resolveSummoner({
      region: region.value,
      name: name.value,
      tag: tag.value,
    })

    summoner.value = result
    puuid.value = result.puuid
  }
  catch (e) {
    console.error('Failed to resolve summoner:', e)
  }
  finally {
    loading.value = false
  }
}

watch([region, name, tag], resolveAndFetch, { immediate: true })
</script>

<template>
  <div class="self-center w-fit">
    <template v-if="summoner">

          <PlayerHeader v-if="summoner" :summoner="summoner" class="px-1" />
      <main class=" flex size-full justify-center">
      <div class="h-full w-[43%] pl-10 grid justify-end relative overflow-y-scroll scrollbar-hidden">
        <div class="gap-10h-full flex flex-col items-start pr-16">

          <transition-expand group class="gap-8 grid auto-rows-max items-start pt-2">
            <RankCard v-if="summoner.ranked?.solo" title="Solo/Duo" :entry="summoner.ranked.solo" class="order-first" />

            <Unranked v-else title="Solo/Duo" class="order-first" />

            <RankCard v-if="summoner.ranked?.flex" title="Flex" :entry="summoner.ranked.flex" class="order-2" />

            <Unranked v-else title="Flex" class="order-2" />

            <QueueFilters :summoner="summoner" class="order-3" />

            <MatchChampionFilters :summoner="summoner" class="order-4" />

          </transition-expand>
              <transition-expand group class="gap-8 grid auto-rows-max items-start pt-2">
            <MatchPositionFilter :summoner="summoner" class="" />

            <MatchAlliesFilter :summoner="summoner" class="order-last" />
            </transition-expand>
        </div>

        <div class="h-28 w-full" />
      </div>

      <div class="grid items-center relative w-[57%] pl-2">
        <MatchHistoryScroller v-if="puuid" :puuid="puuid" :summoner="summoner" />
      </div>
      </main>
    </template>

    <div v-else-if="loading">
      Loading...
    </div>

    <div v-else>
      Error: Summoner not found
    </div>
  </div>
</template>
