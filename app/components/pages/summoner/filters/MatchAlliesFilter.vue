<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const state = inject<PlayerData>(SummonerKey)!

const allyModel = computed({
  get: () => state.filter.ally,
  set: val => state.setFilter('ally', val),
})
const { loading, repeatedTeammates, topBayesianTeammates } = state.useAllies()

const winrateFormula = ref('absolute')

watch(
  () => allyModel.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
</script>

<template>
  <Field :class="cn('p-0 w-120 max-w-120 ', className)">
    <ListboxRoot
      v-if="state"
      v-model:model-value="allyModel"
      class="w-full overflow-y-scroll overscroll-auto px-1.5 h-max max-h-120"
      :multiple="false"
      @entry-focui.prevent>
      <ListboxContent class="w-full py-4">
        <template v-if="!loading">
          <ListboxItem
            v-for="ally in repeatedTeammates"
            :key="ally.riotIdGameName"
            :value="ally.riotIdGameName"
            class="grid grid-cols-[4fr_repeat(2,1fr)] gap-3 rounded-xl cursor-pointer focus:outline-0 hover:border-b3 px-5 hover:bg-b3/30 py-1.5 grid shrink-0 w-full items-center **:font-medium *:text-bc dst"
            :class="{
              'bg-b3/40 border-b3 shadow-xs inset-shadow-sides bg-noise inset-shadow-b3/10':
                ally.riotIdGameName == state.filter.ally,
            }">
            <div
              class="grow items-center justify-self-start text-start flex gap-3 text-xs">
              <SummonerIcon
                class="size-8 shadow-sm drop-shadow-sm rounded-full"
                :icon-id="ally.profileIcon"
                :alt="`${ally.riotIdGameName}'s Icon`" />
              {{ ally.riotIdGameName }}

              <icon
                v-if="ally == topBayesianTeammates[0]"
                v-tippy="'Great Teamwork'"
                name="ion:star"
                class="size-3.5 dst **:!text-bc/80" />
            </div>

            <div class="text-xs text-end">
              {{ ally.games }}
            </div>

            <div class="text-xs text-end">
              {{
                winrateFormula == "absolute"
                  ? ally.winrate
                  : ally.bayesianWinrate
              }}
              %
            </div>
          </ListboxItem>
        </template>

        <template v-else>
          <div
            v-for="i in 10"
            :key="i"
            class="grid py-3 grid-cols-[20px_1fr] gap-3 items-center w-full justify-items-end btn btn-ghost pointer-events-none opacity-60">
            <Skeleton class="rounded-full size-7" />

            <Skeleton class="w-full h-5" />
          </div>
        </template>
      </ListboxContent>
    </ListboxRoot>
  </Field>
</template>
