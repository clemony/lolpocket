<script lang="ts" setup>
const { champions } = storeToRefs(s_data())
const store = useMatchFilters()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val),
})
const championList = computed(() =>
  Array.from(champions.value?.values?.() ?? [])
)

watch(
  () => filter.value.champion,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <UCard variant="p1" :ui="{ root: 'p-0' }">
    <Listbox v-model:model-value="model" :multiple="false">
      <ListboxContent
        class="overscroll-default grid h-100 max-h-100 w-full overflow-auto p-1.5">
        <template
        v-for="(item, ix) in championList"
          :key="item.championId">
          <ListboxItem as-child :value="item.championId">
            <UButton
              variant="ghost"
              :avatar="{
                src: `/img/champions/${item.championId}.webp`,
                icon: 'lol:champ',
              }"
              :ui="{
                base: cn('w-full items-center rounded-lg pr-2', {
                  'grayscale opacity-74': model && item.championId !== model,
                }),
                leadingAvatar: 'size-11',
              }"
              size="xl">
              <div
                class="grid grow grid-cols-2 items-center justify-start gap-px py-3.5 text-start *:not-first:text-xs *:even:justify-end *:even:justify-self-end *:even:text-end">
                <span class="text-sm font-semibold">
                  {{ item.championName }}
                </span>

                <template v-if="model && model !== item.championId">
                  <Placeholder v-for="i in 3" :key="i" size="xs" class="w-12" />
                </template>

                <template v-else>
                  <span> {{ item.wins }} win </span>
                  <span> {{ item.kda }} kda </span>
                  <span>
                    {{ Number(item.games) - Number(item.wins) }} loss
                  </span>
                </template>
              </div>
              <div
                class="z-0 grid w-14 shrink-0 place-items-center justify-end">
                <ChampWinrate :champion="item" />
              </div>
            </UButton>
          </ListboxItem>
          <USeparator
            v-if="ix !== championList.length - 1"
            color="p0"
            class="opacity-80" />
        </template>
        <LilKrug v-if="!championList.length" />
      </ListboxContent>
    </Listbox>
  </UCard>
</template>
