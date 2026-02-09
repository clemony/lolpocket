<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits(["dialog:close", "update:splash"])

const champQuery = ref<string | null>("")
const selectedChampion = ref<string | null>(null)

const searchQuery = ref<string>("")
const search = useSearch(
  championIndex, // array or ref
  searchQuery
)

const result = computed(() => {
  if (search?.value?.length) {
    return search.value.length ?
        search.value
      : [...championIndex].sort((a, b) => a.name.localeCompare(b.name))
  } else {
    return championIndex
  }
})
console.log("🥸 - result:", result)

function reset() {
  champQuery.value = ""
  selectedChampion.value = null
}
</script>

<template>
  <UModal v-bind="$attrs">
    <UButton
      :class="
        cn(
          'group/icon hover:ring-b4 pointer-events-auto relative z-0 grid aspect-square size-fit shrink-0 cursor-pointer place-items-center self-center overflow-hidden rounded-full shadow-xs ring ring-transparent ring-offset-3 ring-offset-transparent drop-shadow-sm transition-colors duration-300 hover:ring-offset-neutral',
          className
        )
      ">
      <slot />
    </UButton>
    <template #content>
      <div
        class="shadow-b4/30 h-164 w-250 min-w-250 overflow-hidden rounded-xl border-n3/70 p-0 shadow-xs drop-shadow-md">
        <HiddenDialogHeader
          title="Select a custom profile splash."
          desc="Personalize your profile with your favorite champion!" />
        <article
          class="grid size-full auto-rows-auto grid-cols-[1fr_6fr] overflow-hidden rounded-lg inset-shadow-shade-sm inset-shadow-black/40">
          <header
            class="bg-b4/40 col-span-full row-start-1 flex h-14.5 items-center gap-2 border-b border-b-p3/60 px-3 pt-1">
            <button
              v-tippy="{ content: 'Reset to Automatic', placement: 'top' }"
              class="btn grid btn-square place-items-center btn-ghost">
              <icon class="absolute size-3.75 dst" name="refresh" />
            </button>

            <button
              v-tippy="{ content: 'Randomize', placement: 'top' }"
              class="btn grid btn-square place-items-center btn-ghost">
              <icon class="size-3.5 stroke-[1.5] dst" name="shuffle" />
            </button>

            <UInput
              v-model:model-value="searchQuery"
              class="-mt-px h-11"
              icon="search" />
           <UButton
              v-tippy="{ content: 'Close', placement: 'top' }"
              variant="ghost"
              shape="square">
              <icon class="absolute size-4 shrink-0 dst" name="x" />
            </UButton>
          </header>

          <Listbox
            v-model:model-value="selectedChampion"
            class="relative h-150 max-h-150 w-60 overflow-y-auto border-r border-r-p3 bg-p2/30 p-1 transition-all duration-200"
            :multiple="false"
            as="div"
            selection-behavior="replace">
            <ListboxContent>
              <ListboxItem
                v-for="item in result"
                :key="item.key"
                :value="item.key ?? ''"
                variant="ghost"
                :class="
                  cn('w-full overflow-hidden', {
                    'btn-active': item.key === selectedChampion,
                  })
                ">
                <Champion
                  :id="item.id"
                  class="size-7 rounded-md bg-black **:text-white"
                  for="item-key"
                  :alt="item.name" />
                <span class="grow truncate text-start">
                  {{ item.name }}
                </span>
                <ListboxItemIndicator>
                  <icon name="right" />
                </ListboxItemIndicator>
              </ListboxItem>
            </ListboxContent>
          </Listbox>

          <transition-fade
            class="col-start-2 size-full max-h-150 overflow-hidden inset-shadow-sm"
            as="section"
            group>
            <transition-slide
              v-if="selectedChampion"
              class="grid size-full h-min max-h-150 w-full grid-cols-3 gap-6 overflow-y-auto p-8"
              group>
              <LazySplashCard
                v-for="skin in skinIndex[selectedChampion]"
                :key="skin.name"
                :text="skin.name"
                :alt="skin.name"
                :skin-url="getSplash(selectedChampion, 'tile', skin)"
                @click="
                  emit(
                    'update:splash',
                    getSplash(selectedChampion, 'centered', skin)
                  )
                " />
            </transition-slide>

            <div v-else class="grid size-full place-items-end p-6">
              <Badge class="font-medium **:text-sm" color="neutral">
                Select or search a champion...
              </Badge>
            </div>
          </transition-fade>
        </article>
      </div>
    </template>
  </UModal>
</template>
