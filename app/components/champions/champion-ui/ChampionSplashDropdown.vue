<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  champion: Champion
}>()

const isChamp = computed(() => props.pocket.champions.default && props.pocket.champions.default.id ? props.pocket.champions.default.id === props.champion.id : '')
</script>

<template>
  <Popover>
    <PopoverTrigger class="btn btn-ghost btn-circle btn size-11 hover:bg-b2 hover:border-b3">
      <div v-if="champion" :key="champion.name" class="size-8   rounded-full  overflow-hidden" :class="{ '': isChamp, 'grayscale opacity-90': !isChamp }">
      <Image  :image="`/img/champion/${champion.id}.webp`" :alt="champion.name"  class=" !size-8 scale-114"/>
      </div>
    </PopoverTrigger>

    <LazySplashDropdownContent :side-offset="6" :align-offset="-12" :champion="champion" :pocket="pocket" />
  </Popover>
</template>

<style scoped></style>
