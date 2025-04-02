<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  title: string
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <div class="field ">
    <div class="field-legend  ">
      {{ props.title }}
    </div>

    <transition-slide group class="grid grid-flow-row auto-cols-auto select-none h-fit pt-1  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center place-items-center  gap-4 mx-auto w-full">
      <template v-if="pocket.champions.children.length">
        <template v-for="champion in pocket.champions.children" :key="champion.id">
          <LazyChampion v-if="champion" :champion="champion" class="*:size-22  size-22  group cursor-pointer" @click="removeChamp(champion, pocket)">
            <icon name="x-solid" class="absolute -top-0.5 -right-0.5 bg-b1 opacity-0 group-hover:opacity-100 transition-all duration-300 !size-5 border border-b1/90 z-10 size-5.5 rounded-full" />
          </LazyChampion>
        </template>
      </template>
      <Placeholder v-else class="size-22 bg-b3/70 p-2.5">
        <i-no-champ class="opacity-10  dst" />
      </Placeholder>
    </transition-slide>
  </div>
</template>

<style scoped></style>
