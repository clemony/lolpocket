<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'

const as = useAccountStore()
const ds = useDataStore()
const puuid = computed(() => as.userAccount?.puuid ?? '')
const ign = computed(() => as.userAccount?.gameName ?? '')

const {
  matchData,
  loading,
} = useMatchData(puuid.value)

const model = ref(25.05)

</script>

<template>
  <div class="size-full relative overflow-y-scroll px-2 overflow-x-hidden ">
    <SidebarTitle>
      <UpdateMatchHistoryButton v-if="puuid" :loading="loading" :puuid="puuid" class=" absolute right-3" />
    </SidebarTitle>
    <div class="px-3 flex flex-col h-[94%] gap-10 mt-5">
<ContrastInput  class="h-14" search placeholder="Search Summoner..."/>

      <QueueButtons />
      <NumberField id="level" :step="0.01" v-model:model-value="model" :min="25.01" :max="useToNumber(ds.currentPatch).value">
        <NumberPickerContent class="w-42">
          <NumberFieldDecrement />
          <Select>
    <SelectTrigger>
          <NumberFieldInput class="!cursor-pointer" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Patch</SelectLabel>
        <SelectItem value="apple">
          Apple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
          <NumberFieldIncrement />
        </NumberPickerContent>
      </NumberField>
    

      <PlayedWithList v-if="puuid && ign" :puuid="puuid" :game-name="ign" />

      <RoleFilter  v-if="puuid && ign && matchData" :matchData="matchData"/>

      <PositionTabs v-if="puuid && ign && matchData" :matchData="matchData" class=" mb-0 border-x-0 " :puuid="puuid" />
      <PlayedChampionFilter />
    </div>
  </div>
</template>
