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

watch(() => route.name, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
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

const as = useAccountStore()

const { topChampion } = useSummonerChampions(
  summoner.value?.matches?.simplified || [],
  {
    mode: 'top',
    limit: 1,
  },
)

// as.fetchPublicData(as.userAccount.riot.puuid)
watch(() => as.publicData.splash, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <TabsPageWrapper
    v-if="summoner"
    :background="(as.publicData?.splash ?? topChampion?.splash).replace('centered', 'uncentered')">
    <template #icon>
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="rounded-full relative">
      </LazySummonerIcon>
    </template>
    <template #header>
      <SummonerName
        class="drop-shadow-sm font-serif text-bc/94 leading-none " />

      <span class="flex gap-3  mt-0.75">
        <UpdateSummoner
          :summoner
          text
          class="!max-h-7 h-7 w-18" />
        <FollowButton
          :summoner
          class="size-7 btn  btn-shadow btn-square " />
      </span>
    </template>

    <template #text>
      <SummonerTag :summoner />
      <SummonerRegion
        :region-id="summoner.region" />

      <SummonerLevel
        :summoner />
    </template>

    <template #collapsed-header>
      <SummonerDropdown :summoner />
      <UpdateSummoner
        :summoner
        class="shrink-0 size-14  btn-ghost btn-shadow-ghost"
        wrapper-class="" />
    </template>

    <template #tabs>
      <SummonerProfileTabs
        :region
        :slug
        :summoner />
    </template>

    <template
      #page="{ stuck }">
      <NuxtPage
        v-if="summoner"
        :key="route.name"
        :stuck
        :region
        :slug
        :summoner />
    </template>
  </TabsPageWrapper>
</template>
