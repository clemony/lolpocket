<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'item analysis',
  title: 'items',
  icon: 'fa:shield',
  parent: '/analysis',
  path: '/analysis/items',
})
</script>

<template>
  <!--
  <div class="flex flex-col gap-8 size-full min-w-110 max-w-230 pb-10">
    <div class="min-h-130 h-130">
      <ResearchItemChart />
    </div>
    <div class="grid grid-cols-[100px_1fr] size-full gap-8">
      <PocketPickItem :patch-games="ms().patchGames" />
      <div class="relative size-full grid place-items-center pb-10">
        <div class="absolute inset-0 top-0 left-0 overflow-auto">
          <ResearchItemList />
        </div>
      </div>
    </div>
  </div> -->

  <div class="size-full px-14">
    <div class="w-full pt-10 pb-8 mb-8 border-b border-b-b3">
      <h1 class="font-semibold dst text-8 pb-2">
        Item Data
      </h1>

      <p class="font-medium text-bc/70">
        Your best items during patch {{ ms().filter.patch }}
      </p>
    </div>

    <div class="size-full overflow-hidden">
      <div
        class="grid-cols-4 grid gap-10 overflow-hidden pb-2 place-items-center w-full">
        <!--         <PocketPickItem
          :patch-games="ms().patchGames"
          :item-num="0"
          title="Pocket Pick" />

        <PocketPickItem
          :patch-games="ms().patchGames"
          :item-num="1"
          title="Pocket Pick" />

        <PocketPickItem
          :patch-games="ms().patchGames"
          :item-num="2"
          title="Pocket Pick" />

        <PocketPickItem
          :patch-games="ms().patchGames"
          :item-num="2"
          title="☆ Rising Star" /> -->
      </div>

      <div class="w-full pt-26 pb-10 mb-10 border-b border-b-b3">
        <h1
          class="font-semibold dst pb-2 text-8">
          Winrates & Playrates
        </h1>

        <p class=" font-medium text-bc/70">
          How are your most played be doing well left right ->
        </p>
      </div>

      <div
        class="grid-cols-2 grid gap-x-10 w-full overflow-hidden place-items-center">
        <ResearchItemChart />

        <ResearchItemList />
      </div>
    </div>
  </div>
</template>
