<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const state = useSummonerInject()

const allyModel = computed({
  get: () => state.filter.value.ally,
  set: val => state.setFilter('ally', val),
})
const { allies, loading, topAllies } = state.allies()

const winrateFormula = ref('absolute')
</script>

<template>
  <div :class="cn('p-0 w-120 field-box max-w-120 ', className)">
    <ListboxRoot
      v-if="state"
      v-model:model-value="allyModel"
      :highlight-on-hover="false"
      class="w-full overflow-y-scroll overscroll-auto px-1.5 h-max max-h-120"
      :multiple="false"
      @entry-focus.prevent>
      <ListboxContent class="w-full py-4">
        <template v-if="!loading">
          <ListboxItem
            v-for="ally in allies"
            :key="ally.riotIdGameName"
            class="focus:outline-0 w-full"
            :value="ally.riotIdGameName"
            as-child>
            <Button
              size="lg"
              variant="ghost"
              class="grid grid-cols-[4fr_repeat(2,1fr)] gap-3 hover:shadow-xs !duration-0 px-5 grid  w-full  **:font-medium dst ">
              <div
                class="grow items-center justify-self-start text-start flex gap-3 text-xs">
                <SummonerIcon
                  class="size-8 shadow-sm drop-shadow-sm rounded-full"
                  :icon-id="ally.profileIcon"
                  :alt="`${ally.riotIdGameName}'s Icon`" />
                {{ ally.riotIdGameName }}

                <icon
                  v-if="ally === topAllies[0]"
                  v-tippy="'Great Teamwork'"
                  name="ion:star"
                  class="size-3.5 dst **:!text-bc/80" />
              </div>

              <div class="text-xs text-end">
                {{ ally.games }}
              </div>

              <div class="text-xs text-end">
                {{
                  winrateFormula === "absolute"
                    ? ally.winrate
                    : ally.bayesianWinrate
                }}
                %
              </div>
            </Button>
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
  </div>
</template>
