<script lang="ts" setup>
const { champions, filter, setFilter } = await useSummonerInject()

const championModel = computed({
  get: () => filter.value.champion,
  set: val => setFilter('champion', val),
})
</script>

<template>
  <Listbox
    v-if="champions"
    v-model:model-value="championModel"
    :multiple="false"
    selection-behavior="replace"
    @entry-focus.prevent>
    <ListboxContent
      :class="cn('field-box w-full gap-0 space-y-4 overflow-hidden px-2 py-4', { 'pb-3': filter.champion })">
      <SlideInTopOutBottom
        group
        class="grid h-fit gap-1.5 overflow-hidden">
        <ListboxItem
          v-for="champion in [...champions].slice(0, 6)"
          :key="champion.name"
          :value="filter.champion === champion.name ? '' : champion.name"
          variant="ghost"
          hover="secondary"
          size="14"
          class="peer group/c relative w-full gap-4! rounded-xl focus-visible:outline-0">
          <ChampionIcon
            :id="champion.id"
            :alt="champion.name"
            class="size-12 items-center overflow-hidden rounded-full shadow-sm drop-shadow-sm" />

          <div class="grid grow gap-1 font-medium dst">
            <p class="self-end text-3!">
              {{ champion.name }}
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
              <!--        {{ champion.games }} game{{ champion.games > 1 ? 's' : '' }} -->
            </p>
          </div>
          <div
            class="
              z-0 grid w-16 shrink-0 place-items-center justify-end justify-self-end
            ">
            <ChampWinrate :champion="champion" />
          </div>

          <Element
            v-if="filter.champion === champion.name"
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
          v-if="filter.champion"
          class="mx-4 flex gap-4 justify-self-end text-1">
          <span class="self-end opacity-50">
            ...filtered
          </span>
        </div>
        <LilKrug v-if="!champions.length" />
      </SlideInTopOutBottom>
    </ListboxContent>
  </Listbox>
</template>
