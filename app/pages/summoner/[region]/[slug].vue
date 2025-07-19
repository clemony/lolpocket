<script setup lang="ts">

definePageMeta({
  name: 'summoner',
  title: 'Summoner Profile',
  section: 'summoner',
  path: '/summoner/:region/:slug',
  search: false,
})

const user = inject<User>('user')
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
  <div v-if="summoner">
    <NuxtLayout name="splash-tabs-layout">

      <template #backdrop>
    <SummonerBackdrop :summoner />
</template>


<template #header>
  <PlayerHeader v-if="summoner" :summoner />
</template>

<template #tabs>
        <SummonerProfileTabs :region :slug :summoner />
</template>


<template #header-utils>

    <UpdateMatchHistoryButton :summoner class="tab " button-class="btn-square rounded-lg " />


        <tippy class="has-disabled:!cursor-help">
          <Button :disabled="summoner.puuid != user.summoner.puuid" variant="ghost" size="sm">
            <icon name="ph:gear-six-fill" class="shrink-0 size-4.5 " />
          </Button>

          <template #content>
            <div v-if="summoner.puuid != user.summoner.puuid" class="max-w-64">
              <h4>Is this yours?</h4>

              <p>
                Connect your Riot ID to claim, access more statistics, and customize.
              </p>
            </div>

            <p v-else>
              Settings
            </p>
          </template>
        </tippy>
</template>

<template #page>
      <NuxtPage v-if="summoner" :summoner :transition="{name: 'global-page-transition'}" class="size-full flex relative mx-auto  justify-center bg-b1 overflow-y-auto" />
</template>
    </NuxtLayout>
  </div>
</template>
