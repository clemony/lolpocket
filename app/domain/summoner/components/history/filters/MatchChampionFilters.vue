<script lang="ts" setup>
import { MatchFilterFilters } from "#components"
const { champions } = storeToRefs(sData())
const store = matchFilter()
const { filter } = storeToRefs(store)

const query = shallowRef<string>("")
const open = shallowRef<boolean>(true)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val),
})
const list = computed(() => [...(champions.value?.values?.() ?? [])])
</script>

<template>
  <UListbox
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
    :filter-fields="['name', 'tag']"
    :highlight-on-hover="false"
    value-key="championId"
    :ui="{
      root: 'min-h-max w-full rounded-5xl! border-p2 bg-p0 shadow-sm ring-0! inset-ring-0 shadow-black/4 drop-shadow-none has-focus-visible:outline-0!',
      content: 'h-max max-h-100',
      group: 'flex flex-col gap-y-1',
      item: 'grid! w-full max-w-full shrink-0 grid-flow-col grid-cols-[30px_0.8fr_1fr_0.6fr]! justify-start gap-3 overflow-hidden rounded-xl p-3 duration-0! checked:bg-(--account-color)/60 checked:ring checked:ring-pc/60 hover:bg-(--account-color)/30! data-highlighted:not-data-disabled:before:bg-(--account-color)/20!',
    }"
    :items="list"
    :multiple="false"
    @highlight.stop.prevent>
    <template #item="{ item }">
      <UAvatar
        size="xl"
        :src="`/img/champion/${item.championId}.webp`"
        icon="i-lol-champ"
        :ui="{
          root: 'col-start-1',
          image: cn(
            'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
            model && item.championId !== model ? 'grayscale opacity-90' : ''
          ),
        }" />
      <div class="grid justify-start text-start">
        <span class="font-semibold text-pc">
          {{ item.championName }}
        </span>
        <!--           <span class="text-xs! text-n5">
                      {{ item.kp?.average ?? 0 }}% kp
                    </span> -->
      </div>

      <div class="grid justify-start text-start tabular-nums">
        <span class="font-semibold"> {{ item.kda }} kda </span>
        <span class="text-xs! text-n5">
          {{ item.kills?.average ?? 0 }} / {{ item.deaths?.average ?? 0 }} /
          {{ item.assists?.average ?? 0 }}
        </span>
      </div>

      <template v-if="item.games">
        <div class="grid justify-end justify-self-end text-end text-xs!">
          <span class="font-bold tabular-nums">
            {{ roundDecimalToPercent(item.win, item.games) }}%
          </span>
          <span class="text-xs! text-n5 tabular-nums">
            {{ item.games }} games
          </span>
        </div>
      </template>
    </template>
    <template #loading>
      <div
        v-for="i in 5"
        :key="i"
        class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost">
        <LazyUSkeleton class="size-8.5 rounded-full" />

        <LazyUSkeleton class="h-9 w-full" />
      </div>
    </template>

    <template #empty>
      <div class="h-20 w-full">
        <UBadge label="No allies found" />
      </div>
    </template>
  </UListbox>
</template>
