<script setup lang="ts">
import { LayoutGroup } from "motion-v"
import { VueDraggable } from "vue-draggable-plus"
import { useChampionContextMenu } from "~/domain/champions/useChampionContextMenu"

useSeoMeta({
  title: "[title]",
  description: "[description]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogTitle: "[og:title]",
  ogUrl: "[og:url]",
  twitterCard: "summary",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterTitle: "[twitter:title]",
})

definePageMeta({
  name: "pocket-champions",
  title: "champions",
  order: 1,
})

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
)

const isDragging = ref(false)

function onStart() {
  isDragging.value = true
}

const source = computed(() => {
  const champions = pocket.value?.champions ?? []
  return champFilter()
    .filtered.filter((r: string): r is string => Boolean(r))
    .filter((r: string) => !champions.includes(r))
})

// shallowRef prevents Vue from deeply tracking reorder mutations
const rendered = shallowRef<string[]>([])

// Sync rendered list to source, debounced to avoid flickers
const syncRendered = useDebounceFn(() => {
  const newList = source.value
  if (JSON.stringify(newList) !== JSON.stringify(rendered.value))
    rendered.value = [...newList]
}, 100)

watch(source, syncRendered, { deep: true, immediate: true })

function onEnd(e: { newIndex?: number; oldIndex?: number }) {
  isDragging.value = false
  const { newIndex, oldIndex } = e
  if (newIndex == null || oldIndex == null) return
  if (oldIndex === newIndex) return

  const moved = rendered.value.splice(oldIndex, 1)[0]
  if (!moved) return
  rendered.value.splice(newIndex, 0, moved)

  // update the real store order here:
  champFilter().reorder(rendered.value)
}

watch(source, () => {
  if (!isDragging.value) syncRendered()
})

function onAdd(e: { oldIndex?: number }) {
  console.log("🌱 - onAdd - e:", e)
  if (e.oldIndex == null) return
  pocket.value?.champions?.splice(e.oldIndex, 1)
  champFilter().reorder(rendered.value.sort())
}

const { show } = useChampionContextMenu()

function showContextMenu(e: MouseEvent, champion: string) {
  if (!pocket.value) return
  show(e, champion, pocket.value)
}
</script>

<template>
  <div class="inset-0 z-auto pt-12">
    <div
      class="sticky -top-56 z-2 w-full items-center space-y-6 bg-p0/98 pt-10 pb-6 backdrop-blur-sm">
      <div class="flex items-center gap-8 px-1">
        <h1 class="capitalize">Champions</h1>
        <ChampionQuote
          v-once
          class="grow text-end text-sm font-normal text-nowrap whitespace-nowrap italic" />
        <UInputGroupPopover
          v-model:model-value="champFilter().filters.query"
          class="max-w-140"
          @clear-input="champFilter().filters.query = ''">
          <ChampFilterPopoverContent />
        </UInputGroupPopover>
      </div>
      <SelectedChampions />
    </div>

    <div class="z-auto mx-auto flex w-full gap-8">
      <VueDraggable
        v-model="rendered"
        class="inset-0 grid h-fit w-full auto-rows-max grid-cols-[repeat(auto-fill,minmax(70px,1fr))] justify-between gap-4 p-1 pb-44"
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
        @start="onStart()"
        @end="onEnd($event)"
        @add="onAdd($event)">
        <LayoutGroup>
          <AnimatePresence v-if="pocket" mode="sync">
            <PocketChampion
              v-for="champion in rendered"
              :key="champion"
              :k="champion"
              :pocket="pocket" />
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
