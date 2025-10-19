<script setup lang="ts">
definePageMeta({
  name: 'pocket-core',
  title: 'core',
  order: 0,
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
</script>

<template>
  <div class="inset-0 z-auto grid grid-cols-[1fr_2fr] gap-14">
    <div class="grid-cols-[2.5fr_1fr] grid pt-22 w-full gap-4">
      <div class="flex w-full flex-col gap-5">
        <div class="h-16">
          <h1 class="leading-10">
            {{ pocket.main?.champion }}
          </h1>
          <div class="italic text-4 font-medium">
            {{ ix().getChampionTitle(pocket.main?.champion) }}
          </div>
        </div>
        <Champion
          :k="pocket.main?.champion"
          type="tile"
          class="w-full h-auto *:scale-[130%] aspect-square" />
      </div>

      <div class="w-full border pt-18">
        <MainRuneSelect :pocket>
          <CoreRuneTrigger
            :pocket />
        </MainRuneSelect>
        <MainSpellSelect
          class="size-16"
          :pocket />
      </div>
    </div>
    <div class="w-full"></div>
  </div>
</template>