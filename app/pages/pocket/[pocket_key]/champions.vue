<script setup lang="ts">
import { LayoutGroup, motion } from 'motion-v'
import { VueDraggable } from 'vue-draggable-plus'

definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  order: 1,
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

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
    </div>
  </div>
</template>

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
