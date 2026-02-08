<script lang="ts" setup>
const { championKeys, filteredKeys } = defineProps<{
  filteredKeys: string[]
  championKeys: string[]
}>()

const selectedChampion = ref<string>(null)
const loaded = ref<boolean>(false)
</script>

<!-- after:size-full after:pointer-events-none after:fixed after:top-36 after:rounded-t-[4rem] after:border-x-40 after:border-t-40 after:border-p0 after:z-0 after:scale-x-[101.5%] after:-left-0 -->
<template>
  <TransitionSlide
    v-if="championKeys"
    class="scrollbar-hidden grid size-full justify-start gap-6 overflow-y-auto"
    group
    :class="{
      'grid-cols-[1fr_420px]': selectedChampion,
      'grid-cols-[1fr_0px]': !selectedChampion,
    }">
    <TransitionSlide
      class="scrollbar-hidden flex size-full flex-wrap justify-start overflow-x-hidden overflow-y-auto scroll-smooth rounded-lg pb-8"
      group
      :class="{ '': loaded }">
      <label
        v-for="key in championKeys"
        :key="key"
        class="group flex grow p-1 data-[state=hidden]:hidden"
        :data-state="filteredKeys.includes(key) ? 'visible' : 'hidden'"
        @click="selectedChampion = key">
        <LibraryChampionCard
          v-show="key"
          class="h-78 max-w-62 min-w-56"
          :champ-key="key"
          @loaded="loaded = true" />
      </label>

      <div class="h-78 w-58 grow" />
    </TransitionSlide>

    <div
      v-if="selectedChampion"
      class="relative size-full overflow-hidden"
      group
      :class="{
        'max-w-0': !selectedChampion,
        'max-w-full': selectedChampion,
      }">
      <div class="absolute inset-0 top-1 left-0 mb-4">
        <button
          class="group/btn btn absolute top-3 left-3 z-2 btn-circle border-none btn-ghost"
          @click="selectedChampion = null">
          <icon
            class="text-white/70"
            name="x-sm" />
        </button>

        <ChampionData :champion-key="selectedChampion" />
      </div>
    </div>
  </TransitionSlide>
</template>
