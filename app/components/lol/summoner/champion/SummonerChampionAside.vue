<script lang="ts" setup>
import { summonerSections } from "~/components/lol/summoner/champion/summonerSections"
import { championToTitle } from "#shared/constants/champions/championToTitle"

const { champion, stats } = storeToRefs(sChampion())
const { summoner } = storeToRefs(sSession())
const { champions } = storeToRefs(sData())
const { mastery } = storeToRefs(sChampion())

const param = useRouteParams("champion_key")
console.log("🥸 - param:", param)
const filter = shallowRef<string>("")

const sorted = computed(() =>
  sortAbc(Array.from(champions.value?.values?.() ?? []), "championName")
)

const search = useSearch(sorted.value, filter, { keys: ["championName"] })

const results = computed(() => {
  if (search.value.length) return search.value
  else return sorted.value
})
const champTitle = computed(() =>
  champion.value?.key ? championToTitle[champion.value.key] : undefined
)
const route = useRoute()
const routeRoot = computed(() => `/${route.params.region}/${route.params.slug}`)

const nav = computed(() => [
  {
    label: summoner.value?.name,
    to: routeRoot.value,
  },
  {
    label: "Champions",
    to: `${routeRoot.value}/champions`,
  },
])
</script>

<template>
  <div class="relative w-full space-y-5">
    <UBreadcrumb :items="nav" separator-icon="i-slash" />
    <UUser
      :avatar="{ src: `/img/champions/${champion?.id}.webp` }"
      :name="champion?.name"
      :description="champTitle" />
  </div>

  <div class="mt-14 flex w-full flex-col">
    <ChampionSplash
      :id="champion?.id"
      class="pointer-events-none z-0 aspect-square w-full rounded-lg *:translate-y-4 *:scale-120"
      type="tile" />

    <UPageLinks :links="summonerSections">
      <template #link-leading>
        <Icon name="i-hash" class="size-3.5" />
      </template>
    </UPageLinks>
    <div class="mt-4 flex w-full flex-col gap-3">
      <Separator class="mb-2 h-px" />
      <h6 class="-mb-1 pl-2 text-sm capitalize opacity-60">
        {{ summoner?.name }}'s Champions
      </h6>

      <div class="relative w-full">
        <UInput leading-icon="i-search" variant="outline" size="sm">
          <template #trailing>
            <InputClear
              v-if="filter?.length"
              size="xs"
              @clear-input="filter = ''" />
          </template>
        </UInput>
        <Listbox v-model:model-value="param" :multiple="false">
          <ListboxContent
            class="grid max-h-124 w-full auto-rows-fr space-y-0.5 overflow-y-scroll py-4">
            <ListboxItem
              v-for="k in results"
              :key="k.championId"
              class="w-full"
              :value="champKeyById(k.championId) ?? ''"
              as="label">
              <UButton
                :on="param === champKeyById(k.championId)"
                variant="ghost"
                color="neutral"
                size="xs"
                :ui="{
                  base: 'w-fit justify-start',
                  label: 'group-hover/btn:underline on:no-underline',
                }"
                :avatar="{
                  src: `/img/champions/${k.championId}.webp`,
                  size: '2xs',
                }">
                {{ k.championName }}
              </UButton>
            </ListboxItem>
          </ListboxContent>
        </Listbox>

        <Separator class="absolute bottom-0" />
      </div>
      <UButton
        variant="link"
        :ui="{ leadingIcon: 'size-3.5 **:stroke-[2.2]' }"
        icon="i-arrow-left"
        class="w-full justify-start rounded-xl pr-8 text-xs hover:underline"
        size="sm">
        <span>Browse all</span>
      </UButton>
    </div>
  </div>

  <!--       <div class="flex w-full flex-col gap-1.5 pr-1 text-end">
          <div class="inline-flex items-center justify-between align-baseline">
            <span
              data-type="Total level"
              class="text-lg font-bold">
              lv. {{ mastery?.level }}
            </span>
            <span
              data-type="Total points"
              class="pr-1 text-xs font-medium tracking-wide">
              {{ mastery?.totalPoints.toLocaleString() }}
            </span>
          </div>
        </div> -->
</template>
