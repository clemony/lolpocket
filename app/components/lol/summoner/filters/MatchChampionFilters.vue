<script lang="ts" setup>
const { champions } = storeToRefs(sData())
const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val),
})
const championList = computed(() =>
  Array.from(champions.value?.values?.() ?? [])
)
</script>

<template>
  <div variant="muted" :ui="{ root: 'p-0' }">
    <Listbox v-model:model-value="model" :multiple="false">
      <ListboxContent
        class="h-100 max-h-100 w-full space-y-1.5 overflow-auto overscroll-contain! px-1.5 py-2">
        <ListboxItem
          v-for="item in championList"
          :key="item.championId"
          as-child
          :value="item.championId">
          <UButton
            variant="ghost"
            :ui="{
              base: cn(
                'grid w-full max-w-full shrink-0 grid-cols-[5fr_repeat(2,1fr)] items-center overflow-hidden px-2 py-0 hover:bg-p3/40',
                {
                  'opacity-74 grayscale': model && item.championId !== model,
                }
              ),
            }"
            size="2xl">
            <UUser
              size="lg"
              :name="item.championName"
              :description="item.games ? `${item.kda} kda` : ''"
              :ui="{
                root: 'w-fit overflow-hidden justify-self-start ',
                wrapper: 'text-start items-center',
              }"
              :avatar="{
                src: `/img/champions/${item.championId}.webp`,
                icon: 'lol:champ',
              }" />

            <div
              class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
              <template v-if="model && model !== item.championId">
                <Placeholder
                  v-for="i in 2"
                  :key="i"
                  size="xs"
                  class="w-12 last:mt-2" />
              </template>
              <template v-else>
                <span> {{ item.wins }} win </span>
                <span> {{ item.losses }} loss </span>
              </template>
            </div>
            <div
              class="relative z-0 col-start-3 grid w-14 shrink-0 place-items-center justify-end justify-self-end">
              <ChampWinrate :champion="item" />
            </div>
          </UButton>
        </ListboxItem>

        <LilKrug v-if="!championList.length" />
      </ListboxContent>
    </Listbox>
  </div>
</template>
