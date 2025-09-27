<script lang="ts" setup>
import {
  DialogClose,
  ListboxFilter,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  ListboxVirtualizer,
} from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['dialog:close'])

const champQuery = ref<string | null>('')
const selectedChampion = ref<string | null>(null)

const searchQuery = ref<string>('')
const { results: championResult } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)

const result = computed(() => {
  const values
    = championResult?.value?.length ? championResult.value : ix().champions
  return [...values].sort((a, b) => a.name.localeCompare(b.name))
})

function reset() {
  champQuery.value = ''
  selectedChampion.value = null
}
</script>

<template>
  <ResponsiveDialog
    as="div"
    :class="cn('', className)"
    v-bind="$attrs">
    <ResponsiveDialogTrigger class="w-fit">
      <slot />
    </ResponsiveDialogTrigger>
    <LazyResponsiveDialogContent
      class="h-164 w-250 min-w-250 border-n3/70 rounded-xl overflow-hidden p-0 shadow-b4/30 shadow-xs drop-shadow-md"
      align="end">
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!" />
      <article
        class="inset-shadow-shade-sm inset-shadow-black/40 grid grid-cols-[1fr_6fr] rounded-xl overflow-hidden auto-rows-auto size-full">
        <header
          class="h-14.5 flex items-center row-start-1 col-span-full bg-b4/40 border-b border-b-b3/60 gap-3 pt-1 pl-1 px-4">
          <button
            v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
            class="btn btn-square grid place-items-center btn-ghost">
            <icon
              name="ix:undo"
              class="size-3.75 dst absolute" />
          </button>

          <button
            v-tippy="{ content: 'Randomize', placement: 'top' }"
            class="btn btn-square grid place-items-center btn-ghost">
            <icon
              name="shuffle"
              class="size-3 dst stroke-[1.5]" />
          </button>

          <div
            class="input ml-1 shadow-none inset-shadow-xs group/input w-full border-b3 focus-within:ring-bc/50 rounded-field bg-b1/70 justify-self-end flex relative h-10">
            <icon
              name="search"
              class="absolute left-2 pointer-events-none transition-opacity duration-200 opacity-40 group-focus-within/input:opacity-80 size-4.25" />
            <div
              class="search-wrapper w-full group-not-focus-within/input:italic h-full group-not-focus-within/input:text-bc/70" />
            <button
              v-if="champQuery !== ''"
              class="btn btn-ghost btn-xs btn-square absolute right-2"
              @click="reset()">
              <icon
                name="x-sm"
                class="shrink-0" />
            </button>
          </div>
          <button
            v-tippy="{ content: 'Close', placement: 'top' }"
            class="btn btn-square grid place-items-center btn-ghost">
            <icon
              name="x-sm"
              class="!size-5 shrink-0 absolute dst" />
          </button>
        </header>

        <section
          class="p-1 relative w-60 max-h-150 h-150 bg-b2/30 border-r-b3 border-r overflow-hidden">
          <div
            class="grid justify-items-center w-full px-1.25 pt-2.25 h-fit"></div>

          <ListboxRoot
            v-model:model-value="selectedChampion"
            :multiple="false"
            selection-behavior="replace"
            class="overflow-y-auto transition-all duration-200 h-inherit w-full max-h-imherit">
            <Teleport
              defer
              to=".search-wrapper">
              <ListboxFilter
                v-model:model-value="champQuery"
                type="text"
                class="size-full px-5 text-2 grow" />
            </Teleport>

            <ListboxVirtualizer
              v-slot="{ option }"
              as-child
              :options="result"
              :text-content="(o) => o.name"
              :estimate-size="40"
              class="h-inherit max-h-imherit w-full">
              <SlideInTopOutBottom class="size-full">
                <ListboxItem
                  :key="option.key"
                  :value="option.key"
                  :class="
                    cn(
                      'h-[40px] w-full px-1 mt-2 flex items-center gap-3 font-medium',
                    )
                  ">
                  <div
                    :class="
                      cn('btn btn-ghost w-full justify-start h-[34px] ', {
                        'btn-active': option.key === selectedChampion,
                      })
                    ">
                    <ChampionIcon
                      :id="option.id"
                      :alt="option.name"
                      class="size-10 rounded-lg bg-black **:text-white" />
                    <span class="grow text-start truncate">
                      {{ option.name }}
                    </span>
                    <ListboxItemIndicator>
                      <icon name="right" />
                    </ListboxItemIndicator>
                  </div>
                </ListboxItem>
              </SlideInTopOutBottom>
            </ListboxVirtualizer>
          </ListboxRoot>
        </section>

        <transition-fade
          as="section"
          group
          class="overflow-hidden size-full max-h-150 col-start-2 inset-shadow-sm">
          <transition-slide
            v-if="selectedChampion"
            group
            class="overflow-y-auto size-full max-h-150 w-full h-inherit h-min gap-8 grid grid-cols-4 p-8">
            <LazySplashCard
              v-for="skin in ix().skins[selectedChampion]"
              :key="skin.name"
              :text="skin.name"
              :alt="skin.name"
              :skin-url="getSkinSplash(selectedChampion, skin, 'tile')"
              @click="
                as().publicData.splash = getSkinSplash(
                  selectedChampion,
                  skin,
                  'centered',
                )
              " />
          </transition-slide>

          <div
            v-else
            class="size-full grid place-items-end p-6">
            <Badge
              variant="neutral"
              class="**:text-2 font-medium">
              Select or search a champion...
            </Badge>
          </div>
        </transition-fade>
      </article>
    </LazyResponsiveDialogContent>
  </ResponsiveDialog>
</template>
