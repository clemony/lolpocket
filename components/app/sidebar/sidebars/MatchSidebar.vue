<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'

const { summoner } = defineProps<{
  summoner: Summoner
}>()
// TODO delete
const ms = useMatchStore()

const model = ref(25.05)
</script>

<template>
  <div class="w-120 bg-b2/20 border-b2 px-2 rounded-box">
    <div class=" items-center right-3 flex gap-2">
    </div>

    <div class=" flex flex-col h-[94%] gap-8 mt-7">
      <QueueButtons />

      <PlayedChampionFilter v-if="summoner" :summoner="summoner" />
    </div>
  </div>
</template>
