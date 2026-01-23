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
    <div class="border-b-b3 mb-8 w-full border-b pt-10 pb-8">
      <h1 class="dst pb-2 text-4xl font-semibold">
        Item Data
      </h1>

      <p class="text-bc/70 font-medium">
        Your best items during patch {{ ms().filter.patch }}
      </p>
    </div>

    <div class="size-full overflow-hidden">
      <div
        class="
          grid w-full grid-cols-4 place-items-center gap-10 overflow-hidden pb-2
        ">
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

      <div class="border-b-b3 mb-10 w-full border-b pt-26 pb-10">
        <h1 class="dst pb-2 text-4xl font-semibold">
          Winrates & Playrates
        </h1>

        <p class="text-bc/70 font-medium">
          How are your most played be doing well left right ->
        </p>
      </div>

      <div
        class="
          grid w-full grid-cols-2 place-items-center gap-x-10 overflow-hidden
        ">
        <ResearchItemChart />

        <ResearchItemList />
      </div>
    </div>
  </div>
</template>
