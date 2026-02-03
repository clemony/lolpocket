<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const allyModel = ref<string>(null)
/* const filterAllies = computed (() => filter?.value?.ally ? allies?.allies.filter(a => filter.value?.ally === a?.puuid) : allies?.allies) */
const winrateFormula = ref('absolute')
const { allies } = storeToRefs(s_champion())
</script>

<template>
  <div :class="cn('field-box w-108 max-w-108 px-2 py-3', className)">
    <Listbox
      v-model:model-value="allyModel"
      :highlight-on-hover="false"
      :multiple="false"
      selection-behavior="toggle"
      @update:model-value="s_matches().setFilter('ally', allyModel)"
      @entry-focus.prevent
    >
      <ListboxContent as-child>
        <div
          class="h-max max-h-100 w-full overflow-y-scroll overscroll-auto py-2"
        >
          <template v-if="!s_matches().loading">
            <ListboxItem
              v-for="ally in allies?.sort((a, b) => b.games - a.games)"
              :key="ally.name"
              :value="ally.puuid"
              size="lg"
              data-type="Great Teamwork"
              base="btn"
              variant="ghost"
              hover="secondary"
              :class="
                cn(
                  'group/ally w-full gap-3 pr-4 pl-3 dst duration-0! **:font-medium **:normal-case focus:outline-0',
                  { hidden: s_matches().filter?.ally && s_matches().filter?.ally !== ally.puuid },
                )
              "
            >
              <SummonerIcon
                class="size-8 rounded-full shadow-sm drop-shadow-sm"
                :icon-id="ally.icon"
                :alt="`${ally.name}'s Icon`"
              />

              <span
                class="inline-flex w-50 max-w-50 gap-1 truncate overflow-hidden align-baseline leading-4"
              >
                <span class="inline truncate align-baseline">
                  {{ ally.name }}
                </span>
                <span class="inline align-baseline text-xs opacity-50">
                  #{{ ally.tag }}
                </span>
                <Icon
                  v-if="
                    ally === allies.sort((a, b) => b.synergy - a.synergy)[0]
                  "
                  class="ml-1 inline size-3.5 align-bottom dst **:text-bc/80!"
                  name="ion:star"
                />
              </span>

              <div class="w-24 text-end text-sm whitespace-nowrap">
                {{ ally.games }} played
              </div>

              <div class="w-12 text-end text-sm">
                {{ ally.winrate }}%
              </div>

              <Element
                v-if=" s_matches().filter?.ally === ally.name"
                class="pointer-events-none absolute top-0.5 left-1 z-5 bg-b2! p-0 opacity-80 size-6 rounded-full backdrop-blur-sm group-hover/ally:animate-heartbeat"
                base="btn"
              >
                <Icons class="size-5.25!" name="heroicons:x-circle-16-solid" />
              </Element>
            </ListboxItem>
          </template>

          <template v-else>
            <div
              v-for="i in 5"
              :key="i"
              class="pointer-events-none ml-3 grid w-[94%] grid-cols-[22px_1fr] items-center gap-4 self-center py-1.5 opacity-60 btn-ghost"
            >
              <Skeleton class="size-8.5 rounded-full" />

              <Skeleton class="h-9 w-full" />
            </div>
          </template>
          <div
            v-if=" s_matches().filter?.ally"
            class="mx-4 flex gap-4 justify-self-end text-xs"
          >
            <span class="self-end opacity-50">...filtered</span>
          </div>
        </div>
      </ListboxContent>
    </Listbox>
  </div>
</template>
