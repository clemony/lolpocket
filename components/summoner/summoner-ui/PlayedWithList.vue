<script lang="ts" setup>
import { ListboxContent, ListboxGroupLabel, ListboxItem, ListboxRoot } from 'reka-ui'

const props = defineProps<{
  puuid: string
  gameName: string
}>()
const ms = useMatchStore()
const { ready } = useMatchData(props.puuid)
const { repeatedTeammates, topBayesianTeammates } = useRepeatedTeammates(props.gameName)

const winrateFormula = ref('absolute')
</script>

<template>
      <ListboxRoot v-model:model-value="ms.playerSelect" class="px-0.5" :multiple="false">
<ListboxGroupLabel class="flex items-center pl-2 pr-3">
  <div class="grow font-medium">
Allies
  </div>
</ListboxGroupLabel>


<!--
<DropdownMenu>
  <DropdownMenuTrigger class="btn btn-square btn-ghost btn-sm data-[state=open]:!btn-active *:opacity-40 hover:*:opacity-100">
    <icon name="cil:functions" />
  </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start" class="w-54 rounded-xl border-b3">
      <DropdownMenuItem>Sort</DropdownMenuItem>
      <DropdownMenuSeparator  />
      <DropdownMenuRadioGroup v-model:model-value="winrateFormula">
        <DropdownMenuLabel class="text-1 opacity-50">Winrate Calculation</DropdownMenuLabel>
        <DropdownMenuRadioItem value="absolute">
          Absolute Winrate
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bayesian">
          Weighted Winrate
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu> -->
        <ListboxContent class="w-full " as-child>
          <Field class="px-1 py-3 max-h-94 overflow-y-scroll" slide>
            <template v-if="ready">
              <ListboxItem v-for="ally in repeatedTeammates" :key="ally.riotIdGameName" :value="ally.riotIdGameName" class="grid grid-cols-[4fr_repeat(2,1fr)] gap-3 items-center w-full !rounded-lg justify-items-end px-3  btn btn-ghost" :class="{ ' btn-active !bg-b1 !border-b3 backdrop-brightness-104 drop-shadow-xs': ally.riotIdGameName == ms.playerSelect, ' hover:bg-b3/30': ally.riotIdGameName != ms.playerSelect }">
                <div class="grow items-center justify-self-start text-start font-medium flex gap-3 text-2  !text-bc">
                  <SummonerIcon class="size-7 shadow-sm drop-shadow-sm " :icon-id="ally.profileIcon" :alt="`${ally.riotIdGameName}'s Icon`" />
                  {{ ally.riotIdGameName }}

                  <icon name="ion:star" v-if="ally == topBayesianTeammates[0]" v-tippy="'Great Teamwork'" class="size-3.5 dst  **:!text-bc/80 " />
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