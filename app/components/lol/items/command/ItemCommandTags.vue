<script lang="ts" setup>
const { filtered, filters, setFilter } = useItemFilter() as any
const searchInput = ref<string[]>([])
</script>

<template>
  <transition-slide
    class="z-1 flex h-auto w-full flex-wrap items-center px-4 *:select-none"
    group
    tag="div">
    <template
      v-for="query in searchInput"
      :key="query">
      <button
        v-if="query !== ''"
        class="f btn mt-4 gap-2 rounded-md bg-p2/97 text-sm! font-normal! btn-xs"
        :appear="false">
        {{ query }}
      </button>
    </template>

    <button
      v-if="filters.tags && filters.tags !== null"
      class="f btn mt-4 gap-2 rounded-md bg-p2/97 text-sm! font-normal! btn-xs"
      :appear="false"
      @click="filters.tags = []">
      {{ filters.tags }}

      <icon name="x-sm" />
    </button>

    <label
      v-for="stat in filters.stats"
      :key="stat"
      class="btn mt-4 gap-2 rounded-md bg-p2/97 text-sm! font-normal! btn-xs"
      :appear="false">
      <input
        v-model="filters.tags"
        class="peer hidden"
        type="checkbox"
        :value="stat">
      {{ statIndex[stat]?.abbr?.[0] ?? '' }}

      <icon name="x-sm" />
    </label>
  </transition-slide>
</template>
