<script lang="ts" setup>
const { summoner, queue, patch } = defineProps<{
  summoner: any
  queue: any
  patch: any
}>()
console.log('💠 - patch:', patch)
console.log('💠 - queue:', queue)
console.log('💠 - summoner:', summoner)

definePageMeta({
  name: 'analyze-champions',
  title: 'analytics',
  path: '/analytics/champions',
  section: 'analytics',
})
</script>

<template>
  <div class="flex flex-col gap-8 size-full min-w-110 max-w-230 pb-10">
    <div class="min-h-130 h-130">
      <ResearchChampionChart v-if="summoner && queue && patch" :summoner="summoner" :queue="queue" :patch="patch" />
    </div>
    <div class="grid grid-cols-[100px_1fr] size-full gap-8">
      <!--       <PocketPickChampion v-if="summoner && queue && patch" e :summoner="summoner" :queue="queue" :patch="patch" /> -->
      <div class="relative size-full grid place-items-center pb-10">
        <div class="absolute inset-0 top-0 left-0 overflow-auto">
          <!-- list here -->
        </div>
      </div>
    </div>
  </div>
</template>
