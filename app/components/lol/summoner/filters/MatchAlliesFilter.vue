<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const { allies: getAllies, filter, loading, setFilter } = useSummonerInject()

const allyModel = computed({
  get: () => filter.value.ally,
  set: val => setFilter('ally', val),
})
const { allies, topAllies } = getAllies()

const winrateFormula = ref('absolute')
</script>

<template>
  <div :class="cn('field-box w-120 max-w-120 p-0', className)">
    <ListboxRoot
      v-model:model-value="allyModel"
      :highlight-on-hover="false"
      class="h-max max-h-120 w-full overflow-y-scroll overscroll-auto px-1.5"
      :multiple="false"
      @entry-focus.prevent>
      <ListboxContent class="w-full py-4">
        <template v-if="!loading">
          <ListboxItem
            v-for="ally in allies"
            :key="ally.riotIdGameName"
            class="
              w-full
              focus:outline-0
            "
            :value="ally.riotIdGameName"
            as-child>
            <Button
              size="12"
              variant="ghost"
              class="
                grid w-full grid-cols-[4fr_repeat(2,1fr)] gap-3 px-5 dst
                !duration-0
                **:font-medium
                hover:shadow-xs
              ">
              <div
                class="
                  flex grow items-center gap-3 justify-self-start text-start
                  text-2
                ">
                <SummonerIcon
                  class="size-8 rounded-full shadow-sm drop-shadow-sm"
                  :icon-id="ally.profileIcon"
                  :alt="`${ally.riotIdGameName}'s Icon`" />
                {{ ally.riotIdGameName }}

                <icon
                  v-if="ally === topAllies[0]"
                  v-tippy="'Great Teamwork'"
                  name="ion:star"
                  class="
                    size-3.5 dst
                    **:!text-bc/80
                  " />
              </div>

              <div class="text-end text-2">
                {{ ally.games }}
              </div>

              <div class="text-end text-2">
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
            class="
              btn pointer-events-none grid w-full grid-cols-[20px_1fr]
              items-center justify-items-end gap-3 py-3 opacity-60 btn-ghost
            ">
            <Skeleton class="size-7 rounded-full" />

            <Skeleton class="h-5 w-full" />
          </div>
        </template>
      </ListboxContent>
    </ListboxRoot>
  </div>
</template>
