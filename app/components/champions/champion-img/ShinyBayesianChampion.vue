<script lang="ts" setup>
const props = defineProps<{
  champion: Champion
}>()

const ms = useMatchStore()

const champion = computed (() => props.champion)
</script>

<template>
  <LazyLabel
    v-if="ms.championSelect == 'All' || ms.championSelect != 'All' && ms.championSelect == champion.name"
    v-tippy="champion.name"
    class="size-14 hover-ring-sm border border-neutral/60 relative grid place-items-center group/filter rounded-full shadow-sm drop-shadow-sm overflow-auto" :class="{ 'opacity-30 ': ms.championSelect != 'All' && ms.championSelect != champion.name }">
    <input
      v-model="ms.championSelect" class="peer hidden"
      type="radio"
      :value="champion.name"
      name="match-champion-filter" />

    <div class="overflow-hidden rounded-full inset-shadow-sm">
      <LazyChampionIconFromName :name="champion.name" class=" size-14" hydrate-on-visible />
    </div>
  </LazyLabel>
</template>