<script lang="ts" setup>
const { champions } = storeToRefs(sData())
const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.champion,
  set: (val) => store.setFilter("champion", val),
})
const championList = computed(() => [...(champions.value?.values?.() ?? [])])
</script>

<template>
  <UCollapsible
    :default-open="true"
    :ui="{
      root: 'relative w-full',
      content: 'relative w-full overflow-hidden',
    }">
    <UButton
      trailing-icon="i-up"
      label="Champions"
      variant="custom"
      block
      :ui="{
        base: 'mb-1 justify-between px-0.5',
        label:
          'grow-0 bg-p0 font-semibold! text-n3! drop-shadow-2xs group-hover/btn:text-pc',
        trailingIcon:
          'transition-rotate size-4.5 text-pc/70 duration-200 **:stroke-[2.2] group-open/collapse:-rotate-180 group-hover/btn:**:text-pc',
      }" />

    <template #content>
      <Listbox v-model:model-value="model" :multiple="false">
        <ListboxContent
          :class="
            cn(
              'z-auto h-100 max-h-100 w-full space-y-1 overflow-y-auto rounded-xl border border-p3/90 px-1.5 py-3 inset-shadow-sm inset-shadow-black/9',
            )
          ">
          <template v-if="!sMatches().loading && sMatches.length">
            <ListboxItem
              v-for="item in championList"
              :key="item.championId"
              as-child
              :class="cn('', { 'sticky top-0 z-2': item.championId === model })"
              :value="item.championId">
              <UButton
                variant="ghost"
                :active="item.championId === model"
                :ui="{
                  base: cn(
                    'w-full max-w-full shrink-0 justify-start gap-3 overflow-hidden rounded-xl px-3',
                  ),
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
                    size: 'xl',
                    class: cn(
                      'shadow-sm shadow-black/10 drop-shadow-sm drop-shadow-black/30 on:duration-800',
                      model && item.championId !== model
                        ? 'grayscale opacity-90'
                        : '',
                    ),
                  }" />

                <template v-if="item.games">
                  <div
                    class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
                    <span> {{ item.win }} win </span>
                    <span> {{ item.loss }} loss </span>
                  </div>
                </template>
                <template v-if="item.games" #trailing>
                  <div class="relative grid size-12 place-items-center">
                    <ChampWinrate
                      :champion="item"
                      :size="10"
                      class="absolute drop-shadow-xs" />
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
