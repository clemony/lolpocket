<script lang="ts" setup>
const { filtered, filters, setFilter } = useItemFilter()
const searchInput = ref([])
</script>

<template>
  <transition-slide
    class="z-1 flex h-auto w-full flex-wrap items-center px-4 *:select-none"
    group
    tag="div"
  >
    <template v-for="query in searchInput" :key="query">
      <button
        v-if="query !== ''"
        class="f btn bg-b2/97 btn-xs mt-4 gap-2 rounded-md text-sm! font-normal!"
        :appear="false"
      >
        {{ query }}
      </button>
    </template>

    <button
      v-if="filters.tags && filters.tags !== null"
      class="f btn bg-b2/97 btn-xs mt-4 gap-2 rounded-md text-sm! font-normal!"
      :appear="false"
      @click="filters.tags = null"
    >
      {{ filters.tags }}

      <icon name="x-sm" />
    </button>

    <label
      v-for="stat in filters.stats"
      :key="stat"
      class="btn bg-b2/97 btn-xs mt-4 gap-2 rounded-md text-sm! font-normal!"
      :appear="false"
    >
      <input
        v-model="filters.tags"
        class="peer hidden"
        type="checkbox"
        :value="stat"
      >
      {{ statIndex[stat].abbr[0] }}

      <icon name="x-sm" />
    </label>
  </transition-slide>
</template>
