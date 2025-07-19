<script lang="ts" setup>
const ms = useMatchStore()

watch(
  () => ms.summonerSearch,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div class="h-12 min-h-12 bg-b2 gap-4 px-4 items-center shadow-xs shadow-black/7  rounded-xl  flex py-2  text-bc/50 relative  border-b3 ">
    <icon
      name="search"
      class="pointer-events-none size-5 opacity-40" />

    <input
      v-model="ms.summonerSearch"

      :spellcheck="false"
      placeholder="Search game name + tag"
      class="text-3 text-bc  outline-0 ring-0 border-0 flex !h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0" />

    <RemoveButton v-if="ms.summonerSearch != null" @click="ms.summonerSearch = null" />
  </div>
</template>