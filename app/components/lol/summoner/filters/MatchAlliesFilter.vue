<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val),
})
const { allies } = storeToRefs(sChampion())
const alliesList = computed(() =>
  (allies.value ?? []).sort((a, b) => b.games - a.games)
)
</script>

<template>
  <div :ui="{ root: 'p-0' }">
    <Listbox v-model:model-value="model" :multiple="false">
      <ListboxContent
        class="h-100 max-h-100 w-full space-y-1.5 overflow-auto overscroll-contain! px-1.5 py-2">
        <template v-if="!sMatches().loading">
          <ListboxItem
            v-for="(item, ix) in alliesList"
            :key="item.name"
            as-child
            :value="item.puuid ?? ''">
            <UButton
              variant="ghost"
              :ui="{
                base: cn(
                  'grid w-full max-w-full grid-cols-[5fr_repeat(2,1fr)] items-center overflow-hidden px-2 py-0',
                  {
                    'opacity-74 grayscale': model && item.puuid !== model,
                  }
                ),
              }"
              size="2xl">
              <UUser
                size="lg"
                :name="item.name"
                :description="`#${item.tag}`"
                :ui="{
                  root: 'w-fit overflow-hidden justify-self-start ',
                  wrapper: 'text-start items-center',
                }"
                :avatar="{
                  src: getSummonerIcon(item.icon),
                  icon: 'lol:champ',
                }" />

              <div
                class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
                <template v-if="model && model !== item.puuid">
                  <Placeholder
                    v-for="i in 2"
                    :key="i"
                    size="xs"
                    class="w-12 last:mt-2" />
                </template>
                <template v-else>
                  <span> {{ item.win }} win </span>
                  <span>
                    {{ Number(item.games) - Number(item.win) }} loss
                  </span>
                </template>
              </div>
              <div
                class="relative z-0 col-start-3 grid w-14 shrink-0 place-items-center justify-end justify-self-end">
                <ChampWinrate :ally="item" />
              </div>
            </UButton>
          </ListboxItem>
        </template>

        <template v-else>
          <div
            v-for="i in 5"
            :key="i"
            class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost">
            <Skeleton class="size-8.5 rounded-full" />

            <Skeleton class="h-9 w-full" />
          </div>
        </template>

        <!--              <Icon
                  v-if="
                    ally === allies.sort((a, b) => b.synergy - a.synergy)[0]
                  "
                  class="ml-1 inline size-3.5 align-bottom dst **:text-pc/80!"
                  name="ion:star" /> -->
      </ListboxContent>
    </Listbox>
  </div>
</template>
