<script lang="ts" setup>
import { skinIndex } from '~~/shared/indexes'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['dialog:close', 'update:splash'])

const champQuery = ref<string | null>('')
const selectedChampion = ref<string | null>(null)

const searchQuery = ref<string>('')
const { results: championResult } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery,
)

const result = computed(() => {
  const values = championResult?.value?.length
    ? championResult.value
    : ix().champions
  return [...values].sort((a, b) => a.name.localeCompare(b.name))
})

function reset() {
  champQuery.value = ''
  selectedChampion.value = null
}
</script>

<template>
  <Dialog v-bind="$attrs">
    <DialogTrigger
      :class="
        cn(
          `
            group/icon pointer-events-auto relative z-0 grid aspect-square
            size-fit shrink-0 cursor-pointer place-items-center self-center
            rounded-full shadow-xs ring ring-transparent ring-offset-3
            ring-offset-transparent drop-shadow-sm transition-colors
            duration-300
            hover:ring-b4 hover:ring-offset-neutral
          `,
          className,
        )
      ">
      <slot />
    </DialogTrigger>
    <LazyGlassDialogContent
      class="
        grid h-screen w-screen min-w-screen justify-center p-0 backdrop-blur
      ">
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!" />

      <div
        class="
          relative flex w-screen max-w-screen flex-col items-center gap-8
          overflow-x-hidden overflow-y-auto px-32
        ">
        <Input
          v-model:model-value="searchQuery"
          class="
            sticky top-0 z-2 mt-44 h-14 w-full max-w-160 shrink-0 rounded-xl
            bg-b1/90 backdrop-blur
          ">
          <icon name="search" />

          <template #3>
            <Button
              v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
              shape="square"
              class="size-8"
              hover="neutral"
              variant="ghost">
              <icon
                name="refresh"
                class="size-3.75 dst" />
            </Button>

            <Button
              v-tippy="{ content: 'Randomize', placement: 'top' }"
              shape="square"
              class="size-8"
              hover="neutral"
              variant="ghost">
              <icon
                name="shuffle"
                class="size-3.5 stroke-[1.5] dst" />
            </Button>
          </template>
        </Input>

        <RadioGroup
          v-if="!selectedChampion"
          v-model:model-value="selectedChampion"
          as="div"
          class="
            mx-auto flex h-max max-h-screen w-fit flex-wrap justify-center gap-8
            overflow-x-hidden mask-t-from-50% mask-t-to-96% pt-64
          ">
          <label
            v-for="item in result"
            :key="item.key"
            for="item-key"
            :class="
              cn(`
                relative max-h-50 min-h-40 max-w-60 min-w-50 basis-1/2
                overflow-hidden rounded-md inset-shadow-sm inset-shadow-black/30
              `)
            ">
            <Champion
              :img="getSplash(item.id, 'tile')"
              :alt="item.name"
              class="
                absolute size-full bg-black
                *:object-cover
                **:text-white
              " />
            <Badge
              variant="neutral"
              size="xl"
              class="
                absolute bottom-2 left-2 truncate bg-neutral/86 backdrop-blur
              ">
              {{ item.name }}
            </Badge>
            <RadioGroupItem
              name="item-key"
              class="hidden"
              :value="item.key">
            </RadioGroupItem>
          </label>
        </RadioGroup>

        <div
          v-else-if="selectedChampion"
          group
          class="
            grid size-full h-min max-h-150 w-full grid-cols-3 gap-6
            overflow-y-auto p-8
          ">
          <LazySplashCard
            v-for="skin in skinIndex[selectedChampion]"
            :key="skin.name"
            :text="skin.name"
            :alt="skin.name"
            :skin-url="getSplash(selectedChampion, 'tile', skin)"
            @click="
              emit(
                'update:splash',
                getSplash(selectedChampion, 'centered', skin),
              )
            " />
        </div>

        <div
          v-else
          class="grid size-full place-items-end p-6">
          <Badge
            variant="neutral"
            class="
              font-medium
              **:text-2
            ">
            Select or search a champion...
          </Badge>
        </div>
      </div>
      <DialogClose
        class="fab pointer-events-auto top-6 right-6 z-20"
        as-child>
        <Button
          variant="ghost"
          size="12"
          class="
            border-0
            **:text-white
            hover:bg-b1/80 hover:**:text-bc
          "
          shape="square">
          <icon
            name="x"
            class="
              size-6
              **:stroke-[1.5]
            " />
        </Button>
      </DialogClose>
    </LazyGlassDialogContent>
  </Dialog>
</template>
