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
const puuid = ref<string | null>(null)
const summoner = ref<Summoner | null>(null)
const loading = ref(true)

async function resolveAndFetch() {
  loading.value = true
  try {
    if (!region.value || !name.value || !tag.value) {
      console.warn('Missing params:', {
        region: region.value,
        name: name.value,
        tag: tag.value,
      })
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

const topChampion = ref<TopChampion>(null)

const scrollYPosition = ref<MotionValue>()

watch(() => scrollYPosition.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div v-if="summoner">
    <NuxtLayout name="splash-tabs-layout">
      <template #backdrop>
        <SummonerBackdrop
          :summoner
          @set:top-champion="(e) => (topChampion = e)" />
      </template>

      <template #header>
        <PlayerHeader
          v-if="summoner"
          :summoner />
      </template>

      <template #tabs>
        <SummonerProfileTabs
          :region
          :slug
          :summoner />
      </template>

      <template #page>
        <div
          :key="route.name"
          class="size-full flex mx-auto justify-center bg-b1 overflow-auto">
          <NuxtPage
            v-if="summoner"
            :region
            :slug
            :summoner
            :top-champion
            @update:scroll-y-position="e => scrollYPosition = e" />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
