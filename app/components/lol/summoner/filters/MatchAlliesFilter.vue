<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = useMatchFilters()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val),
})
const { allies } = storeToRefs(s_champion())
</script>

<template>
  <UCard variant="p1" :ui="{ root: 'p-0' }">
    <Listbox v-model:model-value="model" :multiple="false">
      <ListboxContent class="h-100 max-h-100 w-full overflow-auto px-1.5 py-2">
        <template v-if="!s_matches().loading">
          <template
            v-for="(item, ix) in allies?.sort((a, b) => b.games - a.games)"
            :key="item.name">
            <ListboxItem as-child :value="item.puuid">
              <UButton
                variant="ghost"
                color="p0"
                :avatar="{
                  src: getSummonerIcon(item.icon),
                  icon: 'lol:champ',
                }"
                :ui="{
                  base: cn('w-full items-center pr-2', {
                    'grayscale opacity-74': model && item.puuid !== model,
                  }),
                  leadingAvatar: 'size-11',
                }"
                size="xl">
                <div
                  class="grid grow grid-cols-2 items-center justify-start gap-px py-3.5 text-start *:not-first:text-xs *:even:justify-end *:even:justify-self-end *:even:text-end">
                  <span class="text-sm font-semibold">
                    {{ item.name }}
                  </span>

                  <template v-if="model && model !== item.puuid">
                    <Placeholder
                      v-for="i in 3"
                      :key="i"
                      size="xs"
                      class="w-12" />
                  </template>

                  <template v-else>
                    <span> {{ item.win }} win </span>
                    <span> #{{ item.tag }} </span>
                    <span>
                      {{ Number(item.games) - Number(item.win) }} loss
                    </span>
                  </template>
                </div>
                <div
                  class="z-0 grid w-14 shrink-0 place-items-center justify-end">
                  <ChampWinrate :ally="item" />
                </div>
              </UButton>
            </ListboxItem>

            <USeparator
              v-if="ix !== allies?.length - 1"
              color="p0"
              class="opacity-80" />
          </template>
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
  </UCard>
</template>
