<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val)
})
const { allies } = storeToRefs(sData())
const alliesList = computed(() =>
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
        bestPair
      }
    })
)
</script>

<template>
  <UCollapsible
    :default-open="true"
    :ui="{
      root: 'relative w-full',
      content: 'relative w-full overflow-hidden open:border-b'
    }">
    <UButton
      trailing-icon="i-up"
      label="Allies"
      variant="custom"
      block
      :ui="{
        base: 'justify-between border-0 open:rounded-b-none open:border-b open:border-p3/80 open:bg-transparent! open:fx-0!',
        label: 'grow-0 font-semibold! text-pc/50 group-hover/btn:text-pc',
        trailingIcon:
          'transition-rotate size-4.5 text-pc/70 duration-200 **:stroke-[2.2] group-open/collapse:-rotate-180 group-hover/btn:**:text-pc'
      }" />

    <template #content>
      <Listbox v-model:model-value="model" :multiple="false">
        <ListboxContent
          :class="
            cn(
              'i9 z-auto h-100 max-h-100 w-full space-y-1 overflow-y-auto rounded-xl px-1.5 py-3'
            )
          ">
          <template v-if="!sMatches().loading && sMatches.length">
            <ListboxItem
              v-for="item in alliesList"
              :key="item.name"
              as-child
              :value="item.puuid ?? ''">
              <UButton
                variant="ghost"
                :active="item.puuid === model"
                :ui="{
                  base: cn(
                    'grid! w-full max-w-full shrink-0 grid-flow-col grid-cols-[30px_1fr_0.3fr]! justify-start gap-3 overflow-hidden rounded-xl px-3'
                  )
                }"
                size="xl">
                <div class="relative">
                  <UAvatar
                    size="xl"
                    :src="getSummonerIcon(item.icon)"
                    icon="i-lol-champ"
                    :ui="{
                      root: 'z-0',
                      image: cn(
                        'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
                        model && item.puuid !== model
                          ? 'grayscale opacity-90'
                          : ''
                      )
                    }" />

                  <UAvatar
                    size="xs"
                    :src="`/img/champion/${item.bestPair?.[0]?.championId}.webp`"
                    icon="i-lol-champ"
                    :ui="{
                      root: 'absolute -right-2 -bottom-0.75 z-1 border-2! border-p0',
                      image: cn(
                        'shadow-xs shadow-black/10 drop-shadow-xs drop-shadow-black/30 on:duration-800',
                        model && item.puuid !== model
                          ? 'grayscale opacity-90'
                          : ''
                      )
                    }" />
                </div>
                <div class="grid items-center justify-start text-start">
                  <div class="inline-flex gap-1 align-baseline">
                    <span class="truncate font-semibold text-pc">
                      {{ item.name }}
                    </span>
                    <span class="inline-flex gap-0 text-xs! text-n5">
                      <Icon name="i-hash" class="mt-0.75 size-3.25 text-n5" />
                      {{ item.tag }}
                    </span>
                  </div>
                  <LazyUTooltip
                    :disable-hoverable-content="true"
                    side="bottom"
                    :ui="{ content: 'h-max! w-84' }"
                    class="inline-flex gap-1 align-baseline">
                    <span
                      class="text-xs! font-semibold text-n5 hover:underline">
                      {{ item.bestPair?.[0]?.championName }}
                    </span>

                    <template #content>
                      <LazyAllyPairTooltip :item />
                    </template>
                  </LazyUTooltip>
                </div>

                <template v-if="item.games">
                  <div
                    class="grid justify-end justify-self-end text-end text-xs!">
                    <span class="font-bold">
                      {{ roundDecimalToPercent(Number(item.win), item.games) }}%
                    </span>
                    <span class="text-xs! text-n5">
                      {{ item.games }} games
                    </span>
                  </div>
                </template>
              </UButton>
            </ListboxItem>
          </template>

          <template v-else-if="sMatches().loading">
            <div
              v-for="i in 5"
              :key="i"
              class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost">
              <LazyUSkeleton class="size-8.5 rounded-full" />

              <LazyUSkeleton class="h-9 w-full" />
            </div>
          </template>

          <LazyLilKrug v-else />

          <!--              <Icon
                  v-if="
                    ally === allies.sort((a, b) => b.synergy - a.synergy)[0]
                  "
                  class="ml-1 inline size-3.5 align-bottom ds-2xs **:text-pc/80!"
                  name="ion:star" /> -->
        </ListboxContent>
      </Listbox>
    </template>
  </UCollapsible>
</template>
