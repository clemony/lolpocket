<script lang="ts" setup>
const { filteredKeys, championKeys } = defineProps<{
  filteredKeys: string[]
  championKeys: string[]
}>()

const selectedChampion = ref(null)
const loaded = ref(false)
</script>

<template>
  <transition-slide
    v-if="championKeys"
    group
    class="overflow-hidden size-full justify-start gap-6 pt-46 scrollbar-hidden grid"
    :class="{ 'grid-cols-[1fr_420px] animate-in slide-out-to-right': selectedChampion, ' grid-cols-[1fr_0px] animate-out slide-out-to-right': !selectedChampion }">
    <transition-slide
      group
      class="size-full scrollbar-hidden pb-8  scroll-smooth  flex flex-wrap  overflow-y-auto overflow-x-hidden  justify-start rounded-lg"
      :class="{ ' after:size-full after:pointer-events-none after:fixed after:top-36 after:rounded-t-[4rem] after:border-x-40 after:border-t-40 after:border-b1 after:z-0 after:scale-x-[101.5%] after:-left-0': loaded }">
      <label
        v-for="key in championKeys"
        :key="key"
        :data-state="filteredKeys.includes(key) ? 'visible' : 'hidden'"
        class="group  p-1 data-[state=hidden]:hidden grow flex"
        @click="selectedChampion = key ">

        <LibraryChampionCard
          v-show="key"
          :champ-key="key"
          class="min-w-56 max-w-62 h-78"
          hydrate-on-visible
          @loaded="loaded = true" />

      </label>

      <div class="w-58 h-78 grow" />
    </transition-slide>

    <div
      v-if="selectedChampion"
      group
      class="size-full overflow-hidden relative"
      :class="{ 'max-w-0 ': !selectedChampion, 'max-w-full ': selectedChampion }">
      <div class="absolute inset-0 left-0 top-1  mb-4">
        <button
          class="btn group/btn btn-circle border-none top-3 left-3 z-2 btn-ghost absolute"
          @click="selectedChampion = null">
          <icon
            name="x-sm"
            class="text-white/70" />
        </button>

        <ChampionData :champion-key="selectedChampion" />
      </div>
    </div>
  </transition-slide>
</template>