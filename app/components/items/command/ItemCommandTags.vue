<script lang="ts" setup>
const is = useItemStore()

const searchInput = ref([])
</script>

<template>
  <transition-slide
    group
    tag="div"
    class="px-4 z-1 w-full  flex flex-wrap items-center h-auto  *:select-none">
    <template
      v-for="query in searchInput"
      :key="query">
      <button
        v-if="query != ''"
        :appear="false"
        class="btn btn-xs bg-b2/97 rounded-md !font-normal !text-2 mt-4 f gap-2">
        {{ query }}
      </button>
    </template>

    <button
      v-if="is.pItemFilter.tags && is.pItemFilter.tags != null"
      :appear="false"
      class="btn btn-xs rounded-md  bg-b2/97 !font-normal !text-2 mt-4 f gap-2"
      @click="is.pItemFilter.tags = null">
      {{ is.pItemFilter.tags }}

      <icon name="x-sm" />
    </button>

    <label
      v-for=" stat in is.pItemFilter.stats"
      :key="stat"
      :appear="false"
      class="btn btn-xs rounded-md !font-normal  bg-b2/97 !text-2 mt-4  gap-2">
      <input
        v-model="is.pItemFilter.tags"
        type="checkbox"
        class="peer hidden"
        :value="stat" />
      {{ itemStats.find(s => s.id == stat).shortName }}

      <icon name="x-sm" />
    </label>
  </transition-slide>
</template>