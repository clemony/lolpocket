<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  champion: Champion
}>()

const isChamp = computed(() => props.pocket.champions.default && props.pocket.champions.default.id ? props.pocket.champions.default.id === props.champion.id : '')
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <LazyChampion v-if="champion" :key="champion.name" :champion="champion" class="*:size-18  size-18  group cursor-pointer ring-1 ring-transparent" :class="{ 'ring-1  ring-offset-2 ring-offset-b2 ring-neutral': isChamp, 'grayscale opacity-90': !isChamp }">
      </LazyChampion>
    </PopoverTrigger>

    <LazySplashDropdownContent :champion="champion" :pocket="pocket" />
  </Popover>
</template>

<style scoped></style>
