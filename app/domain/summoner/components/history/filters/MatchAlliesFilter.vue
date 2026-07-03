<script lang="ts" setup>
import { MatchFilterFilters } from "#components"
import { getSummonerIcon } from "~/domain/utils/img"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const query = shallowRef<string>("")
const open = shallowRef<boolean>(true)
const store = matchFilter()
const { filter } = storeToRefs(store)
const { loading } = storeToRefs(sMatches())

type PairedAlly = AllyStatDetail & { bestPair: PairedChampionStat[] }
const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val),
})
const { allies } = storeToRefs(sData())

const list = computed<PairedAlly[]>(() =>
  (allies.value ?? [])
    .sort((a, b) => b.games - a.games)
    .map((a) => {
      const n = sortRecordBy(a.champions, "synergy", "desc")[0]?.synergy
      const v = Object.values(a.champions).filter((v) => v.synergy === n)
      const bestPair = v.filter(
        (x) => x.games === v.sort((a, b) => b.games - a.games)[0]?.games
      )

      return {
        ...a,
        bestPair,
      }
    })
)

const listbox = useTemplateRef<HTMLElement & { div: HTMLDivElement }>("listbox")
</script>

<template>
  <UListbox
    ref="listbox"
    v-model:model-value="model"
    v-model:search-term="query"
    :state="open"
    :highlight="false"
    :autofocus="false"
    :filter="{
      size: 'xl',
      icon: 'i-search',
      placeholder: 'Allies',
      ui: {
        base: 'text-sm grow',
      },
      trailingIcon: h(MatchFilterFilters, {
        label: 'Filter Allies',
        onClick() {
          open = !open
        },
      }),
    }"
    :filter-fields="[
      'name',
      'tag',
      String(
        ({ item }: { item: PairedAlly }) =>
          item.bestPair?.[0]?.championName ?? ''
      ),
    ]"
    :highlight-on-hover="false"
    value-key="puuid"
    :ui="{
      root: 'min-h-max w-full rounded-5xl! border-p2 bg-p0 shadow-sm ring-0! inset-ring-0 shadow-black/4 drop-shadow-none has-focus-visible:outline-0!',
      content: 'h-max max-h-100',
      group: 'flex flex-col gap-y-1',
      item: 'group w-full p-0! data-highlighted:before:bg-transparent!',
    }"
    :items="list"
    :multiple="false"
    @highlight.stop.prevent>
    <template #item="{ item }">
      <LazyUTooltip
        :disable-hoverable-content="true"
        :content="{ side: 'top', sideOffset: 8 }"
        :ui="{
          content:
            'z-1 h-max! w-(--reka-popper-anchor-width) rounded-4xl bg-overlay text-pc shadow-lg ring-p2 drop-shadow-md before:absolute before:inset-0 before:z-0 before:size-full before:-scale-y-100 before:rounded-4xl before:shadow-sm before:shadow-black/5',
        }">
        <div
          class="flex w-full max-w-full grow flex-nowrap justify-start gap-3 rounded-4xl! p-3 duration-0! group-checked:bg-(--account-color)/60 group-checked:ring group-checked:ring-pc/60 group-hover:bg-(--account-color)/30! group-data-highlighted:not-data-disabled:before:bg-(--account-color)/20!">
          <div class="relative size-min shrink-0">
            <UAvatar
              size="xl"
              :src="getSummonerIcon(item.icon)"
              icon="i-lol-champ"
              :ui="{
                root: 'z-0',
                image: cn(
                  'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
                  model && item.puuid !== model ? 'grayscale opacity-90' : ''
                ),
              }" />

            <UAvatar
              size="xs"
              :src="`/img/champion/${item.bestPair?.[0]?.championId}.webp`"
              icon="i-lol-champ"
              :ui="{
                root: 'absolute -right-2 -bottom-0.75 z-1 border-2! border-p0',
                image: cn(
                  'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
                  model && item.puuid !== model ? 'grayscale opacity-90' : ''
                ),
              }" />
          </div>

          <div
            class="inline-flex w-full max-w-full grow gap-1 self-center align-baseline">
            <span class="truncate text-md! font-semibold text-pc">
              {{ item.name }}
            </span>
            <span class="inline-flex gap-0 truncate text-xs! text-n5">
              <Icon name="i-hash" class="mt-0.75 size-3.25 text-n5" />
              {{ item.tag }}
            </span>
          </div>

          <template v-if="item.games">
            <div
              class="flex w-28 shrink-0 flex-col items-end self-end text-end text-xs! tabular-nums">
              <span class="font-bold tabular-nums">
                {{ roundDecimalToPercent(Number(item.win), item.games) }}%
              </span>
              <span class="text-xs! text-n5"> {{ item.games }} games </span>
            </div>
          </template>
        </div>
        <template #content>
          <LazyAllyPairTooltip :item />
        </template>
      </LazyUTooltip>
    </template>
    <template #loading>
      <div
        v-for="i in 5"
        :key="i"
        class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center btn-ghost py-1.5 opacity-60">
        <LazyUSkeleton class="size-8.5 rounded-full" />

        <LazyUSkeleton class="h-9 w-full" />
      </div>
    </template>

    <template #empty>
      <div class="h-20 w-full">
        <UBadge label="No allies found" />
      </div>
    </template>

    <!--              <Icon
                  v-if="
                    ally === allies.sort((a, b) => b.synergy - a.synergy)[0]
                  "
                  class="ml-1 inline size-3.5 align-bottom ds-2xs **:text-pc/80!"
                  name="ion:star" />
        </ListboxContent> -->
  </UListbox>
</template>
