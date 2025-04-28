<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const ms = useMatchStore()

const model = ref(25.05)
</script>

<template>
  <div class="w-110">
    <div class=" items-center right-3 flex gap-2">
      <Select v-model:model-value="model">
        <SelectTrigger class="btn  btn-sm shadow-xs border-b3 drop-shadow-xs text-1 justify-center btn    w-24 pr-2 group  gap-2">
          <SelectValue />
          <icon name="up-sm" class="shrink-0 size-4.5 group-data-[state=open]:rotate-180" />
        </SelectTrigger>
        <SelectContent align="center" position="popper" class="rounded-lg  max-h-60">
          <SelectGroup>
            <SelectLabel>Patch</SelectLabel>
            <SelectItem v-for="patch in ms.previousPatch" :key="patch" :value="useToNumber(patch).value" class="font-medium text-2">
              {{ patch }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <UpdateMatchHistoryButton v-if="summoner" :summoner="summoner" />
    </div>

    <div class=" flex flex-col h-[94%] gap-8 mt-7">
      <SummonerSearch />

      <QueueButtons />
      <PlayedWithList v-if="summoner" :summoner="summoner" />

      <PositionTabs v-if="summoner" :summoner="summoner" class=" mb-0 border-x-0 " />
      <PlayedChampionFilter v-if="summoner" :summoner="summoner" />
    </div>
  </div>
</template>
