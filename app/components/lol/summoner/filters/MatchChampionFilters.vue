<script lang="ts" setup>
const { champions } = storeToRefs(sData())
const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val),
})
const championList = computed(() =>
  Array.from(champions.value?.values?.() ?? []),
)
</script>

<template>
  <UCollapsible :default-open="true" class="w-full space-y-2">
    <UButton variant="link" block :ui="{ base: '' }">
      <Separator
        trailing-icon="i-up"
        size="md"
        label="Champions"
        :ui="{
          trailingIcon:
            'group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/30 duration-200 **:stroke-[2.8] group-open/collapse:-rotate-180',
        }">
        <template #leading>
          <Icon
            name="right"
            class="group-hover/btn:**:text-80 size-4 text-pc/40 **:stroke-[2.6] open:rotate-90" />
        </template>
      </Separator>
    </UButton>

    <template #content>
      <Listbox v-model:model-value="model" :multiple="false">
        <ListboxContent
          class="border-b-b3 h-100 max-h-100 w-full space-y-1 overflow-y-auto rounded-xl border-b px-1.5 py-2 inset-shadow-morphism-2">
          <template v-if="!sMatches().loading && sMatches.length">
            <ListboxItem
              v-for="item in championList"
              :key="item.championId"
              as-child
              :value="item.championId">
              <UButton
                variant="ghost"
                :ui="{
                  base: cn(
                    'w-full max-w-full shrink-0 justify-start gap-3 overflow-hidden px-2',
                    {
                      'opacity-74 grayscale':
                        model && item.championId !== model,
                    },
                  ), // not-on:rounded-none not-on:border-b-p3/60
                }"
                size="xl">
                <UUser
                  size="lg"
                  :name="item.championName"
                  :description="item.games ? `${item.kda} kda` : ''"
                  :ui="{
                    root: 'grow',
                    wrapper: 'items-center text-start',
                  }"
                  :avatar="{
                    src: `/img/champions/${item.championId}.webp`,
                    icon: 'lol:champ',
                  }" />

                <template v-if="item.games">
                  <div
                    class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
                    <span> {{ item.win }} win </span>
                    <span> {{ item.loss }} loss </span>
                  </div>
                  <div class="size-12">
                    <ChampWinrate :champion="item" />
                  </div>
                </template>
              </UButton>
            </ListboxItem>
          </template>
          <LazyLilKrug v-else />
        </ListboxContent>
      </Listbox>
    </template>
  </UCollapsible>
</template>
