<script lang="ts" setup>
const { champions, setFilter } = useSummonerInject()

const cModel = shallowRef<string>(null)
const champs = computed (() => {
  return champions?.value?.values().toArray().sort((a, b) => b.games - a.games)
})
</script>

<template>
  <Listbox
    v-model:model-value="cModel"
    :multiple="false"
    selection-behavior="toggle"
    @update:model-value="setFilter('champion', cModel)"
    @entry-focus.prevent>
    <ListboxContent
      :class="cn('field-box h-fit max-h-98 w-full gap-0 space-y-4 overflow-y-scroll px-2 py-4', { 'pb-3': cModel })">
      <SlideInTopOutBottom
        group
        class="grid h-fit w-full gap-1.5">
        <ListboxItem
          v-for=" champion in champs"
          :key="champion?.championId"
          :value="champion.championName"
          variant="ghost"
          hover="secondary"
          size="14"
          :class="cn('peer group/c relative w-full gap-4! rounded-xl focus-visible:outline-0', { hidden: cModel && cModel !== champion.championName })">
          <ChampionIcon
            :id="champion.championId"
            :alt="champion.championName"
            class="size-12 items-center overflow-hidden rounded-full shadow-sm drop-shadow-sm" />

          <div class="grid grow gap-1 font-medium dst">
            <p class="self-end text-3!">
              {{ champion.championName }}
            </p>

            <p
              :class="cn('text-2 text-nowrap normal-case')">
              {{ ((champion?.kills + champion?.assists) / champion?.deaths).toFixed(2) }}
              kda
            </p>
          </div>

          <div
            class="z-0 grid w-22 shrink-0 justify-end gap-1 text-2 dst *:text-end">
            <p class="text-nowrap normal-case">
              {{ champion.wins }} win
            </p>

            <p class="text-nowrap normal-case">
              {{ champion.games - champion.wins }} loss
            </p>
          </div>
          <div
            class="
              z-0 grid w-16 shrink-0 place-items-center justify-end justify-self-end
            ">
            <ChampWinrate :champion="champion" />
          </div>

          <Element
            v-if="cModel === champion.championName"
            base="btn"
            wrapper-class=""
            size="c-6"
            class="pointer-events-none absolute top-0.5 left-1 z-5 bg-b2! p-0 opacity-80 backdrop-blur group-hover/c:animate-heartbeat">
            <Icons
              name="heroicons:x-circle-16-solid"
              class="size-5.25!" />
          </Element>
        </ListboxItem>
        <div
          v-if="cModel"
          class="mx-4 flex gap-4 justify-self-end text-1">
          <span class="self-end opacity-50">
            ...filtered
          </span>
        </div>
        <LilKrug v-if="!champs?.length" />
      </SlideInTopOutBottom>
    </ListboxContent>
  </Listbox>
</template>
