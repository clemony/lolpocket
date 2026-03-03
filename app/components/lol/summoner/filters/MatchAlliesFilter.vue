<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = matchFilter()
const { filter } = storeToRefs(store)

const model = computed({
  get: () => filter?.value.ally,
  set: (val) => store.setFilter("ally", val),
})
const { allies } = storeToRefs(sData())
const alliesList = computed(() =>
  (allies.value ?? []).sort((a, b) => b.games - a.games),
)
</script>

<template>
  <UCollapsible :default-open="true" class="w-full">
    <UButton
      trailing-icon="i-up"
      label="Allies"
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
          class="h-100 max-h-100 w-full space-y-1 overflow-y-auto rounded-xl border border-p3/90 px-1.5 py-3 inset-shadow-morphic">
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
                    'w-full max-w-full shrink-0 justify-start gap-3 overflow-hidden rounded-xl px-3',
                  ),
                }"
                size="xl">
                <UUser
                  size="lg"
                  :name="item.name"
                  :description="`#${item.tag}`"
                  :ui="{
                    root: 'grow',
                    wrapper: 'items-center text-start',
                  }"
                  :avatar="{
                    src: getSummonerIcon(item.icon),
                    size: 'xl',
                    class: cn(
                      'shadow-sm shadow-black/10 drop-shadow-sm drop-shadow-black/30 on:duration-800',
                      model && item.puuid !== model
                        ? 'grayscale opacity-90'
                        : '',
                    ),
                  }" />
                <template v-if="item.games">
                  <div
                    class="col-start-2 grid justify-end justify-self-end text-end text-xs! text-pc">
                    <span> {{ item.win }} win </span>
                    <span>
                      {{ Number(item.games) - Number(item.win) }} loss
                    </span>
                  </div>
                </template>

                <template v-if="item.games" #trailing>
                  <div class="relative grid size-12 place-items-center">
                    <ChampWinrate
                      v-if="item.games"
                      :ally="item"
                      :size="32"
                      class="absolute drop-shadow-xs" />
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
