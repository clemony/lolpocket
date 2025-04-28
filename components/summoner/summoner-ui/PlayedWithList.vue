<script lang="ts" setup>
import { ListboxContent, ListboxGroupLabel, ListboxItem, ListboxRoot } from 'reka-ui'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const ms = useMatchStore()

const { loading, repeatedTeammates, topBayesianTeammates } = useRepeatedTeammates(summoner.name, summoner.puuid)

const winrateFormula = ref('absolute')
</script>

<template>
  <ListboxRoot v-model:model-value="ms.playerSelect" class="px-0.5" :multiple="false" @entry-focus.prevent>
    <ListboxGroupLabel>
      <FilterLabel v-model="ms.playerSelect" :active="ms.playerSelect != null" @click="ms.playerSelect = null">
        {{ ms.playerSelect != null ? ms.playerSelect : 'Teammates' }}
      </FilterLabel>
    </ListboxGroupLabel>

    <ListboxContent class="w-full " as-child>
      <Field class="px-1.5 py-3 max-h-94 overflow-y-scroll" slide>
        <template v-if="!loading">
          <ListboxItem v-for="ally in repeatedTeammates" :key="ally.riotIdGameName" :value="ally.riotIdGameName" class="focus:outline-0 grid grid-cols-[4fr_repeat(2,1fr)] gap-3 items-center w-full !rounded-lg justify-items-end px-2.5  btn btn-ghost" :class="{ ' bg-b1/80   shadow-sm shadow-black/5  border border-b3/80 ': ally.riotIdGameName == ms.playerSelect, ' hover:bg-b3/30': ally.riotIdGameName != ms.playerSelect }">
            <div class="grow items-center justify-self-start text-start font-medium flex gap-3 text-2  !text-bc">
              <SummonerIcon class="size-7 shadow-sm drop-shadow-sm " :icon-id="ally.profileIcon" :alt="`${ally.riotIdGameName}'s Icon`" />
              {{ ally.riotIdGameName }}

              <icon v-if="ally == topBayesianTeammates[0]" v-tippy="'Great Teamwork'" name="ion:star" class="size-3.5 dst  **:!text-bc/80 " />
            </div>
            <div class="text-1  !text-bc">
              {{ ally.games }}
            </div>
            <div class="text-1 !text-bc">
              {{ winrateFormula == 'absolute' ? ally.winrate : ally.bayesianWinrate }} %
            </div>
          </ListboxItem>
        </template>

        <template v-else>
          <div v-for="i in 10" :key="i" class="grid py-3 grid-cols-[20px_1fr] gap-3 items-center w-full justify-items-end btn btn-ghost pointer-events-none opacity-60">
            <Skeleton class="rounded-full size-7" />
            <Skeleton class="w-full h-5" />
          </div>
        </template>
      </Field>
    </ListboxContent>
  </ListboxRoot>
</template>