<script lang="ts" setup>
import type { DialogContentProps } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes['class']
  }
>()

const emit = defineEmits(['dialog:close', 'update:splash'])

const champQuery = ref<string | null>('')
const selectedChampion = ref<string | null>(null)

const searchQuery = ref<string>('')
const search = useSearch(
  championIndex, // array or ref
  searchQuery
)

const result = computed(() => {
  if (search?.value?.length) {
    return search.value.length
      ? search.value
      : [...championIndex].sort((a, b) => a.name.localeCompare(b.name))
  }
  else {
    return championIndex
  }
})

function reset() {
  champQuery.value = ''
  selectedChampion.value = null
}

const delegated = omitUIProps(props)
const forwarded = useForwardPropsEmits(delegated)

const btnClass
  = '  border-white/30 *:opacity-50  hover:bg-b1/30 hover:opacity-100 '
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogTrigger
      :class="
        cn(
          'group/icon pointer-events-auto relative z-0 grid aspect-square size-fit shrink-0 cursor-pointer place-items-center self-center rounded-full shadow-xs ring ring-transparent ring-offset-2 ring-offset-transparent drop-shadow-sm transition-colors duration-300 hover:ring-b4 hover:ring-offset-neutral',
          props.class,
        )
      "
    >
      <slot />
    </DialogTrigger>
    <LazyGlassDialogContent
      class="grid h-screen w-screen min-w-screen overflow-hidden p-0 backdrop-blur-sm"
    >
      <HiddenDialogHeader
        title="Select a custom profile splash."
        desc="Personalize your profile with your favorite champion!"
      />

      <div
        class="relative mx-auto scrollbar-hidden flex w-full max-w-3/5 flex-col overflow-hidden px-32"
      >
        <!-- search -->
        <InputGroup
          :as="selectedChampion ? 'button' : 'div'"
          :class="
            cn(
              'ring-none focus-within:inset-shadow-0 sticky top-0 z-2 mt-44 h-20 w-full shrink-0 items-center gap-3 rounded-none border-x-0 border-t-0 border-b border-b-transparent! py-3 shadow-none inset-shadow-none outline-none selection:bg-white/40 selection:text-black focus-within:border-b-white/50! focus-within:ring-0! focus-within:outline-0',
              { 'cursor-pointer **:pointer-events-none': selectedChampion },
            )
          "
          @click="selectedChampion ? (selectedChampion = null) : ''"
        >
          <InputGroupAddon align="inline-start">
            <Icon
              class="size-5! text-white/50! **:stroke-[1.8]"
              :name="selectedChampion ? 'arrow-left' : 'search'"
            />
          </InputGroupAddon>
          <InputGroupInput
            v-if="selectedChampion"
            v-model:model-value="selectedChampion"
            class="font-bold text-white select-none **:text-[2.6rem]!"
            read-only
          />
          <InputGroupInput
            v-else
            v-model:model-value="searchQuery"
            class="font-bold text-white **:text-[2.6rem]!"
          />
          <InputGroupClear
            class="**:text-white"
            @clear-input="
              selectedChampion
                ? (selectedChampion = null)
                : (searchQuery = null)
            "
          />
        </InputGroup>

        <!-- default list -->
        <Listbox
          v-if="!selectedChampion"
          v-model="selectedChampion"
          class="w-full"
          :multiple="false"
        >
          <ListboxContent
            class="flex h-screen w-full grow flex-col gap-8 overflow-x-hidden mask-t-from-80% mask-t-to-96% text-start"
          >
            <ListboxItem
              v-for="item in result"
              :key="item.key"
              class="gap-6 text-white"
              :value="item.key"
            >
              <ChampionIcon
                :id="item.id"
                class="size-12 rounded-full"
                :alt="item.name"
              />
              <h1 class="text-white">
                {{ item.name }}
              </h1>
            </ListboxItem>
          </ListboxContent>
        </Listbox>

        <!-- search list -->
        <Listbox v-else-if="selectedChampion" as-child>
          <ListboxContent
            class="grid w-full grid-cols-4 gap-8 overflow-y-auto mask-t-from-90% mask-t-to-98% px-2 pt-18 pb-32"
          >
            <LazySplashCard
              v-for="skin in skinIndex[selectedChampion]"
              :key="skin.name"
              :text="skin.name"
              :alt="skin.name"
              :skin-url="getSplash(selectedChampion, 'tile', skin)"
              @click="
                emit(
                  'update:splash',
                  getSplash(selectedChampion, 'uncentered', skin),
                )
              "
            />
          </ListboxContent>
        </Listbox>

        <!-- else -->
        <div v-else class="grid size-full place-items-end p-6">
          <Badge class="font-medium **:text-sm" color="neutral">
            Select or search a champion...
          </Badge>
        </div>
      </div>

      <div class="pointer-events-auto fixed top-6 right-6 z-20 flex gap-3">
        <Button
          v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
          class="rounded-full size-8"
          :class="btnClass"
          variant="outline"
        >
          <icon class="size-4.5 text-white dst" name="refresh" />
        </Button>

        <Button
          v-tippy="{ content: 'Randomize', placement: 'top' }"
          class="rounded-full size-8"
          :class="btnClass"
          variant="outline"
        >
          <icon class="size-4.5 stroke-[1.3] text-white dst" name="shuffle" />
        </Button>

        <DialogClose as-child>
          <Button class="rounded-full size-8" :class="btnClass" variant="outline">
            <icon class="size-5.5 text-white **:stroke-[1.7]" name="x" />
          </Button>
        </DialogClose>
      </div>
    </LazyGlassDialogContent>
  </Dialog>
</template>
