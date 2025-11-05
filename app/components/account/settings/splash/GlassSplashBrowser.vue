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

      class="grid h-screen w-screen min-w-screen justify-center p-0 backdrop-blur">
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!" />

      <div class=" relative flex w-screen max-w-screen flex-col items-center gap-8 overflow-x-hidden overflow-y-auto px-32">
        <Input
          v-model:model-value="searchQuery"
          class="bg-b1/90 absolute sticky top-0 z-2 mt-44 h-14 w-full max-w-160 shrink-0 rounded-xl backdrop-blur ">
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
                class="dst size-3.75" />
            </Button>

            <Button
              v-tippy="{ content: 'Randomize', placement: 'top' }"
              shape="square"
              class="size-8"
              hover="neutral"
              variant="ghost">
              <icon
                name="shuffle"
                class="dst size-3.5 stroke-[1.5]" />
            </Button>
          </template>
        </Input>

        <RadioGroup

          v-if="!selectedChampion"
          v-model:model-value="selectedChampion"
          as="div"
          class="mask-t-from-50% mask-t-to-96% mx-auto flex h-max  max-h-screen w-fit flex-wrap justify-center gap-8  overflow-x-hidden pt-64">
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
              class="absolute size-full bg-black *:object-cover **:text-white" />
            <Badge
              variant="neutral"
              size="xl"
              class="bg-neutral/86 absolute  bottom-2 left-2 truncate backdrop-blur">
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
          class="h-inherit grid size-full h-min max-h-150 w-full grid-cols-3 gap-6 overflow-y-auto p-8">
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
          class="grid size-full place-items-end p-6">
          <Badge
            variant="neutral"
            class="**:text-2 font-medium">
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
          class="hover:**:text-bc hover:bg-b1/80 border-0 **:text-white "
          shape="square">
          <icon
            name="x"
            class="size-6 **:stroke-[1.5]" />
        </Button>
      </DialogClose>
    </LazyGlassDialogContent>
  </Dialog>
</template>
