<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()
</script>

<template>
  <div
    v-memo="pocket.champions"
    class=" w-full min-h-24 overflow-hidden bg-b2 field-box border-b3/60 p-3 py-3 px-2"
    @click="navigateTo(`/pocket/${pocket.key}`)">
    <AnimatePresence
      as="div"
      layout
      mode="sync"
      class="size-full relative min-h-24 gap-2 justify-evenly items-center flex-wrap flex">
      <button
        v-if="!pocket?.champions || !pocket?.champions?.length"
        class="size-full cursor-pointer grid place-items-center absolute group/box">
        <i-lol-champ
          class="size-8  group-hover/box:opacity-10 transition-all duration-500"
          :class="{ 'opacity-0 scale-0 ': pocket?.champions && pocket?.champions?.length }" />

        <span class="absolute opacity-0 transition-opacity duration-700 text-3  tracking-tight font-semibold ease-out group-hover/box:opacity-100">
          Select Champions
        </span>
      </button>

      <template v-if="pocket?.champions && pocket?.champions?.length">
        <SelectedChampion
          v-for="champion in pocket?.champions.filter(c => c != pocket.main?.champion)"
          :key="champion"
          :pocket
          :champion />
      </template>
    </AnimatePresence>
  </div>
</template>