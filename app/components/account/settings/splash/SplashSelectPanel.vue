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

const emit = defineEmits(['dialog:close', 'update:splash'])

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
    v-bind="$attrs">
    <ResponsiveDialogTrigger
      :class="
        cn(
          'group/icon z-0 shrink-0 cursor-pointer self-center  size-fit shadow-xs drop-shadow-sm   rounded-full pointer-events-auto  aspect-square  grid place-items-center relative transition-colors duration-300  hover:ring-b4 ring-transparent ring hover:ring-offset-neutral ring-offset-3 ring-offset-transparent  ',
          className,
        )
      ">
      <slot />
    </ResponsiveDialogTrigger>
    <LazyResponsiveDialogContent
      class="h-164 w-250 min-w-250 border-n3/70 rounded-xl overflow-hidden p-0 shadow-b4/30 shadow-xs drop-shadow-md">
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!" />
      <article
        class="inset-shadow-shade-sm inset-shadow-black/40 grid grid-cols-[1fr_6fr] rounded-lg overflow-hidden auto-rows-auto size-full">
        <header
          class="h-14.5 flex items-center row-start-1 col-span-full bg-b4/40 border-b border-b-b3/60 gap-2 pt-1 pl-3 pr-3">
          <button
            v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
            class="btn btn-square grid place-items-center btn-ghost">
            <icon
              name="refresh"
              class="size-3.75 dst absolute" />
          </button>

          <button
            v-tippy="{ content: 'Randomize', placement: 'top' }"
            class="btn btn-square grid place-items-center btn-ghost">
            <icon
              name="shuffle"
              class="size-3.5 dst stroke-[1.5]" />
          </button>

          <Input
            v-model:model-value="searchQuery"
            class="h-11 -mt-px">
            <icon name="search" />
          </Input>
          <Button
            v-tippy="{ content: 'Close', placement: 'top' }"
            variant="ghost"
            shape="square">
            <icon
              name="x"
              class="size-4 shrink-0 absolute dst" />
          </Button>
        </header>

        <RadioGroup
          v-model:model-value="selectedChampion"
          :multiple="false"
          as="div"
          selection-behavior="replace"
          class="overflow-y-auto transition-all duration-200 h-full p-1 relative w-60 max-h-150 h-150 bg-b2/30 border-r-b3 border-r ">
          <Label
            v-for="item in result"
            :key="item.key"
            variant="ghost"
            :class="
              cn('w-full overflow-hidden', {
                'btn-active': item.key === selectedChampion,
              })
            ">
            <ChampionIcon
              :id="item.id"
              for="item-key"
              :alt="item.name"
              class="size-10 rounded-lg bg-black **:text-white" />
            <span class="grow text-start truncate">
              {{ item.name }}
            </span>
            <RadioGroupItem
              name="item-key"
              :value="item.key">
              <icon name="right" />
            </RadioGroupItem>
          </Label>
        </RadioGroup>

        <transition-fade
          as="section"
          group
          class="overflow-hidden size-full max-h-150 col-start-2 inset-shadow-sm">
          <transition-slide
            v-if="selectedChampion"
            group
            class="overflow-y-auto size-full max-h-150 w-full h-inherit h-min gap-6 grid grid-cols-3 p-8">
            <LazySplashCard
              v-for="skin in ix().skins[selectedChampion]"
              :key="skin.name"
              :text="skin.name"
              :alt="skin.name"
              :skin-url="getSkinSplash(selectedChampion, skin, 'tile')"
              @click="emit('update:splash',
                           getSkinSplash(
                             selectedChampion,
                             skin,
                             'centered',
                           ))
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
