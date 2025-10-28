<script setup lang="ts">
<<<<<<< HEAD
import { LayoutGroup, motion } from 'motion-v'
import { VueDraggable } from 'vue-draggable-plus'
=======
import { motion } from 'motion-v'
>>>>>>> refs/remotes/origin/main

definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  order: 1,
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

<<<<<<< HEAD
const isDragging = ref(false)

function onStart() {
  isDragging.value = true
}

const source = computed(() =>
  cs().filtered.filter(r => !pocket.champions.includes(r))
)

// shallowRef prevents Vue from deeply tracking reorder mutations
const rendered = shallowRef<string[]>([])

// Sync rendered list to source, debounced to avoid flickers
const syncRendered = useDebounceFn(() => {
  const newList = source.value
  if (JSON.stringify(newList) !== JSON.stringify(rendered.value))
    rendered.value = [...newList]
}, 100)

watch(source, syncRendered, { deep: true, immediate: true })

function onEnd(e) {
  isDragging.value = false
  const { newIndex, oldIndex } = e
  if (oldIndex === newIndex)
    return

  const moved = rendered.value.splice(oldIndex, 1)[0]
  rendered.value.splice(newIndex, 0, moved)

  // update the real store order here:
  cs().reorder(rendered.value)
}

watch(source, () => {
  if (!isDragging.value)
    syncRendered()
})

function onAdd(e) {
  console.log('🌱 - onAdd - e:', e)
  pocket.champions.splice(e.oldIndex, 1)
  cs().reorder(rendered.value.sort())
}

const { show } = useChampionContextMenu()

function showContextMenu(e: MouseEvent, champion: string) {
  show(e, champion, pocket)
}
</script>

<template>
  <div class="inset-0 z-auto pt-12">
    <div class="w-full space-y-6 pt-10 pb-6 sticky z-2 bg-b1/98 backdrop-blur items-center  -top-56 ">
      <div class=" flex items-center gap-8 px-1 ">
        <h1 class="capitalize ">
          Champions
        </h1>
        <ChampionQuote
          v-once
          class="italic whitespace-nowrap text-nowrap text-2 font-normal  grow text-end" />
        <InputGroupPopover

          v-model:model-value="cs().filters.query"
          class="max-w-140"
          @clear:input="cs().filters.query = ''">
          <ChampFilterPopoverContent />
        </InputGroupPopover>
      </div>
      <SelectedChampions />
    </div>

    <div class="w-full flex gap-8  z-auto   mx-auto">
      <VueDraggable
        v-model="rendered"
        :group="{
          name: 'champions',
          pull: 'clone',
          put: true,
        }"
        :sort="false"
        :animation="150"
        ease="ease-in-out"
        filter="undraggable"
        chosen-class="champion-icon-ghost-class"
        drag-class="champion-icon-ghost-class"
        ghost-class="champion-icon-ghost-class"
        layout="position"
        class="h-fit justify-between grid auto-rows-max p-1 grid-cols-[repeat(auto-fill,minmax(70px,1fr))] w-full inset-0 pb-44  gap-4"
        @start="onStart()"
        @end="onEnd($event)"
        @add="onAdd($event)">
        <LayoutGroup>
          <AnimatePresence mode="sync">
            <PocketChampion
              v-for="champion in rendered"
              :key="champion"
              :k="champion"
              :pocket />
          </AnimatePresence>
        </LayoutGroup>
      </VueDraggable>
=======
const containerRef = ref<HTMLElement>()
const { height } = useElementSize(containerRef)
const baseHeight = ref<number | null>(null)

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)
watchEffect(() => {
  if (!baseHeight.value && results.value.length === ix().champions.length) {
    baseHeight.value = height.value
  }
})
</script>

<template>
  <div class="inset-0 z-auto">
    <div class="w-full py-10 px-1 sticky z-2 bg-b1/98 backdrop-blur items-center  -top-56 ">
      <div class=" flex items-center">
        <h1 class="capitalize w-85">
          Champions
        </h1>
        <div class="flex gap-3 items-center grow ">
          <Input
            v-model="cs().filters.query"
            size="lg"
            aria-label="Search champions"
            placeholder="Search champions..."
            class=" border-b4/60 grow "
            type="text"
            @clear:input="cs().filters.query = ''">
            <icon
              name="search" />
          </Input>

          <BadgePositionSelect
            v-model:model-value="cs().filters.position"
            @update:select="e => cs().filters.position = e" />

          <ToggleGroup
            type="single"
            class="gap-0"
            as-child>
            <ButtonGroup>
              <ToggleGroupItem
                class="bg-b1"
                size="lg"
                value="az"
                variant="outline"
                shape="square">
                <icon
                  name="qlementine-icons:sort-alpha-asc-16"
                  class="size-5 " />
              </ToggleGroupItem>
              <ToggleGroupItem
                class="bg-b1"
                size="lg"
                value="za"
                variant="outline"
                shape="square">
                <icon
                  name="qlementine-icons:sort-alpha-desc-16"
                  class="size-5" />
              </ToggleGroupItem>
            </ButtonGroup>
          </ToggleGroup>
        </div>
      </div>
    </div>
    <SelectedChampions />
    <div class="w-full flex gap-8  z-auto   mx-auto">
      <motion.div
        layout
        class="h-fit justify-between grid grid-flow-row auto-cols-auto p-1 grid-cols-[repeat(auto-fill,minmax(70px,1fr))] w-full inset-0 pb-44  gap-4">
        <AnimatePresence>
          <motion.div
            v-for="champion in cs().filtered.filter(r => !pocket.champions.includes(r.key))"
            :key="champion.id">
            <PocketChampion
              :align-offset="-9"
              :champion
              :pocket />
          </motion.div>
        </AnimatePresence>
      </motion.div>
>>>>>>> refs/remotes/origin/main
    </div>
  </div>
</template>

<<<<<<< HEAD
        <!--
          :id="champion.key"
          :data-id="champion.key"
          class="size-fit  aspect-square target shrink-0 p-0"> -->
          <!--        <PocketChampion
            :align-offset="-9"
            :k="champion.key"
          :pocket /> -->
<style>
.champion-icon-ghost-class {
  height: 100%;
  width: 100%;
  padding: 0;
  flex-grow: 1;
  aspect-ratio: 1;
}
</style>
=======
<!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
>>>>>>> refs/remotes/origin/main
