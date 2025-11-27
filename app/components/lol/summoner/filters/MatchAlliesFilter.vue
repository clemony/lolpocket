<script lang="ts" setup>
import { Motion, motion, stagger } from 'motion-v'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const { allies, filter, loading, setFilter } = useSummonerInject()

const allyModel = computed({
  get: () => filter.value?.ally,
  set: val => setFilter('ally', val),
})

const filterAllies = computed (() => filter.value?.ally ? allies?.value?.allies.filter(a => filter.value?.ally === a?.riotIdGameName) : allies?.value?.allies)
const winrateFormula = ref('absolute')
</script>

<template>
  <div :class="cn('field-box w-full px-2 py-3', className)">
    <Listbox
      v-model:model-value="allyModel"
      :highlight-on-hover="false"
      :multiple="false"
      selection-behavior="toggle"

      @entry-focus.prevent>
      <ListboxContent as-child>
        <SlideInTopOutBottom
          class="h-max max-h-100 w-full overflow-y-scroll overscroll-auto py-2">
          <template
            v-if="!loading && filterAllies">
            <ListboxItem
              v-for="ally in filterAllies"
              :key="ally.riotIdGameName"
              size="12"
              base="btn"
              variant="ghost"
              hover="secondary"
              class="
                 group/ally w-full gap-3 pr-4 pl-3 normal-case dst
                duration-0! **:font-medium focus:outline-0
              "

              :value="ally.riotIdGameName">
              <SummonerIcon
                class="size-8 rounded-full shadow-sm drop-shadow-sm"
                :icon-id="ally.profileIcon"
                :alt="`${ally.riotIdGameName}'s Icon`" />

              <span class="flex grow items-center gap-2">
                {{ ally.riotIdGameName }}

                <icon
                  v-if="ally === allies.topAllies[0]"
                  v-tippy="'Great Teamwork'"
                  name="ion:star"
                  class="size-3.5 dst **:text-bc/80!" />
              </span>

              <div class="text-end text-2 normal-case">
                {{ ally.games }} played
              </div>

              <div class="w-12 text-end text-2">
                {{
                  winrateFormula === "absolute"
                    ? ally.winrate
                    : ally.bayesianWinrate
                }}%
              </div>

              <Element
                v-if="filter?.ally === ally.riotIdGameName"
                base="btn"
                wrapper-class=""
                size="c-6"
                class="pointer-events-none absolute top-0.5 left-1 z-5 bg-b2! p-0 opacity-80 backdrop-blur group-hover/ally:animate-heartbeat">
                <Icons
                  name="heroicons:x-circle-16-solid"
                  class="size-5.25!" />
              </Element>
            </ListboxItem>
          </template>

          <template v-else>
            <div
              v-for="i in 5"
              :key="i"
              class="
              pointer-events-none ml-3 grid w-[94%]
              grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost
            ">
              <Skeleton class="size-8.5 rounded-full" />

              <Skeleton class="h-9 w-full" />
            </div>
          </template>
          <div
            v-if="filter?.ally"
            class="mx-4 flex gap-4 justify-self-end text-1">
            <span class="self-end opacity-50">
              ...filtered
            </span>
          </div>
        </SlideInTopOutBottom>
      </ListboxContent>
    </Listbox>
  </div>
</template>
