<script lang="ts" setup>
import type { TableColumn } from "@nuxt/ui"
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "reka-ui"
import { description } from "valibot"
import { isMobile } from "~~/layers/lib/shared/utils/device"

const UUser = resolveComponent("UUser")
definePageMeta({
  title: "Champions",
  description: "Discover in depth champion data for each played.",
  icon: "i-lp-champ-circle", //"i-lp-champ",
  class: "**:stroke-[1.6]", //"scale-90 -mb-0.25",
  keepalive: true,
  search: false,
  order: 1,
})
const { summoner } = storeToRefs(sSession())

const championData = computed(() =>
  (sData().champions ?? []).map((c) => {
    const mastery = sData().mastery?.find((a) => a.championId === c.championId)
    return {
      ...c,
      mastery: mastery ?? {
        puuid: summoner.value?.puuid ?? "",
        championId: c.championId,
        pointsSinceLevel: 0,
        pointsUntilLevel: 0,
      },
    }
  })
)

const columns: TableColumn<ChampionStats>[] = [
  {
    accessorKey: "championId",
    header: "Champion",
    cell: ({ row }) => {
      return h(UUser, {
        name: row.original.championName,
        description: row.original.role?.mostPlayed,
        avatar: {
          src: `/img/champion/${row.getValue("championId")}.webp`,
        },
        ui: {
          description: "capitalize",
          avatar: "drop-shadow-sm shadow-xs",
        },
      })
    },
  },
  {
    header: "Played",
    accessorKey: "games",
  },
  {
    header: "Win",
    accessorKey: "win",
    cell: ({ row }) => {
      return `${row.original.win}W`
    },
  },

  {
    header: "Loss",
    accessorKey: "loss",
    cell: ({ row }) => {
      return `${row.original.loss}L`
    },
  },
  {
    accessorKey: "kills.average",
    header: "Kills",
  },
  {
    accessorKey: "deaths.average",
    header: "Deaths",
  },
  {
    accessorKey: "assists.average",
    header: "Assists",
  },
  {
    accessorKey: "kda",
    header: "KDA",
  },
  {
    accessorKey: "kp.average",
    header: "KP",
  },
  {
    header: "Winrate",
    cell: ({ row }) => {
      return roundDecimalToPercent(row.original.win / row.original.games, 1)
    },
  },
]

const query = shallowRef<string>("")

const direction = computed(() => (isMobile() ? "vertical" : "horizontal"))
const open = shallowRef<boolean>(false)
const toggleOpen = useToggle(open)
watch(
  () => open.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <UPage>
    <UPageHeader
      :ui="{
        root: 'mb-1 w-full pb-6 pl-2',
        container: 'space-y-2',
        title: 'mb-0 w-full',
        wrapper: 'mb-0 w-full',
        description: 'my-0 min-h-0',
      }">
      <template #title>
        <UButton
          as="label"
          variant="link"
          block
          label="Champions"
          :ui="{
            base: 'h-16!',
            label:
              'text-5xl font-bold! drop-shadow-2xs group-hover/btn:no-underline!',
          }"
          @click="toggleOpen()">
          <template #trailing>
            <UButton
              size="sm"
              label="Filters"
              as="div"
              variant="ghost"
              :ui="{
                leadingIcon: 'size-5 **:stroke-[2.4]',
                trailingIcon: cn(
                  'transition-rotate size-5 duration-200 **:stroke-[2.4]',
                  { '-rotate-180': open }
                ),
              }"
              trailing-icon="i-up"
              @click.stop />
          </template>
        </UButton>
      </template>
      <template #description>
        <UCollapsible
          v-model:open="open"
          :ui="{
            content: 'flex h-min w-full items-center justify-between',
          }">
          <template #content>
            <LazyUInput
              v-model:model-value="query"
              placeholder="Search..."
              icon="i-search"
              :ui="{ root: 'w-84 max-w-84 grow inset-ring-p1' }">
              <template v-if="query" #trailing>
                <LazyInputClear @clear-input="query = ''" />
              </template>
            </LazyUInput>
            <div class="flex items-center gap-4">
              <LazyQueueFilters />
              <LazyMatchPositionFilter />
            </div>
          </template>
        </UCollapsible>
      </template>
    </UPageHeader>
    <SplitterGroup :direction class="min-h-[80vh]" as="div">
      <SplitterPanel
        :default-size="66"
        :class="
          cn('', {
            'pr-6': direction === 'horizontal',
          })
        ">
        <UTable :data="championData" :columns sticky> </UTable>
      </SplitterPanel>
      <SplitterResizeHandle />
      <SplitterPanel
        :default-size="34"
        :class="
          cn('py-10', {
            'order-first': direction === 'vertical',
            'pl-6': direction === 'horizontal',
          })
        ">
        <div
          class="grid w-full auto-rows-fr grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
          <div
            v-for="champion in championData"
            :key="champion.championId"
            class="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm drop-shadow-sm select-none">
            <ChampionSplash
              :id="champion.championId"
              type="tile"
              class="pointer-events-none z-0 grid aspect-3/2 place-items-center overflow-hidden *:absolute *:translate-x-2 *:translate-y-5 *:scale-130 *:object-cover" />
            <div
              class="pointer-events-none absolute top-0 z-1 flex size-full flex-col bg-black/60 p-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div class="flex grow"></div>
              <div class="w-full self-end">
                <LazyMasteryProgressBar :mastery="champion.mastery" />
              </div>
            </div>
            <LazyNuxtImg
              :src="`/img/mastery/banner/crest-and-banner-mastery-${(champion?.mastery.level ?? 0 > 10) ? 10 : champion.mastery.level}.webp`"
              :alt="champion.mastery.level?.toString()"
              class="pointer-events-none absolute -top-0.75 left-1 z-4 size-16 drop-shadow-md drop-shadow-black/20" />
          </div>
        </div>
      </SplitterPanel>
    </SplitterGroup>
  </UPage>
</template>
