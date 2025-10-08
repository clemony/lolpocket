<script lang="ts" setup>
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
  <Dialog
    v-bind="$attrs">
    <DialogTrigger
      :class="
        cn(
          'group/icon z-0 shrink-0 cursor-pointer self-center  size-fit shadow-xs drop-shadow-sm   rounded-full pointer-events-auto  aspect-square  grid place-items-center relative transition-colors duration-300  hover:ring-b4 ring-transparent ring hover:ring-offset-neutral ring-offset-3 ring-offset-transparent  ',
          className,
        )
      ">
      <slot />
    </DialogTrigger>
    <LazyGlassDialogContent

      class="min-w-screen w-screen h-screen backdrop-blur p-0 justify-center grid">
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!" />

      <div class=" w-screen max-w-screen overflow-x-hidden items-center relative px-32 overflow-y-auto flex flex-col gap-8">
        <Input
          v-model:model-value="searchQuery"
          class="h-14 mt-44 w-full max-w-160 shrink-0 z-2 rounded-xl sticky top-0 bg-b1/90 backdrop-blur absolute ">
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
                class="size-3.5 dst stroke-[1.5]" />
            </Button>
          </template>
        </Input>

        <RadioGroup

          v-if="!selectedChampion"
          v-model:model-value="selectedChampion"
          as="div"
          class="overflow-x-hidden pt-64 justify-center mask-t-from-50% mask-t-to-96%  max-h-screen h-max flex flex-wrap gap-8  w-fit mx-auto">
          <label
            v-for="item in result"
            :key="item.key"
            for="item-key"
            :class="
              cn('max-w-60 min-w-50 min-h-40 inset-shadow-sm inset-shadow-black/30 max-h-50 basis-1/2 relative rounded-md overflow-hidden')
            ">
            <Champion
              :img="ix().getSplash(item.id, 'tile')"
              :alt="item.name"
              class="*:object-cover size-full absolute bg-black **:text-white" />
            <Badge
              variant="neutral"
              size="xl"
              class="absolute bottom-2  left-2 bg-neutral/86 backdrop-blur truncate">
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
        </div>

        <div
          v-else
          class="size-full grid place-items-end p-6">
          <Badge
            variant="neutral"
            class="**:text-2 font-medium">
            Select or search a champion...
          </Badge>
        </div>
      </div>
      <DialogClose
        class="fab pointer-events-auto z-20 top-6 right-6"
        as-child>
        <Button
          variant="ghost"
          size="lg"
          class="**:text-white border-0 hover:**:text-bc hover:bg-b1/80 "
          shape="square">
          <icon
            name="x"
            class="size-6 **:stroke-[1.5]" />
        </Button>
      </DialogClose>
    </LazyGlassDialogContent>
  </Dialog>
</template>
