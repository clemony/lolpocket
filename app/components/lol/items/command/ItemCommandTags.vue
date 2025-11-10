<script lang="ts" setup>
import { statIndex } from '#shared/references'

const { filtered, filters, setFilter } = useItemFilter()
const searchInput = ref([])
</script>

<template>
  <transition-slide
    group
    tag="div"
    class="
      z-1 flex h-auto w-full flex-wrap items-center px-4
      *:select-none
    ">
    <template
      v-for="query in searchInput"
      :key="query">
      <button
        v-if="query !== ''"
        :appear="false"
        class="f btn mt-4 gap-2 rounded-md bg-b2/97 !text-2 !font-normal btn-xs">
        {{ query }}
      </button>
    </template>

    <button
      v-if="filters.tags && filters.tags !== null"
      :appear="false"
      class="f btn mt-4 gap-2 rounded-md bg-b2/97 !text-2 !font-normal btn-xs"
      @click="filters.tags = null">
      {{ filters.tags }}

      <icon name="x-sm" />
    </button>

    <label
      v-for="stat in filters.stats"
      :key="stat"
      :appear="false"
      class="btn mt-4 gap-2 rounded-md bg-b2/97 !text-2 !font-normal btn-xs">
      <input
        v-model="filters.tags"
        type="checkbox"
        class="peer hidden"
        :value="stat" />
      {{ statIndex[stat].abbr[0] }}

      <icon name="x-sm" />
    </label>
  </transition-slide>
</template>
