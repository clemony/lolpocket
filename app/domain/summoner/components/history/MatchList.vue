<script lang="ts" setup>
import type { VirtualItem } from "@tanstack/vue-virtual"
import type { ComponentPublicInstance } from "vue"
import { useVirtualizer } from "@tanstack/vue-virtual"
import { useProfileScrollBody } from "~/domain/summoner/composables/useProfileScrollBody"
import {
  getElementScrollMargin,
  getVirtualItemTransform,
} from "~/domain/summoner/utils/virtualScroll"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const store = matchFilter()
const { filteredMatches } = storeToRefs(store)
const { loading, loadingOlder, loadMessage, matches } = storeToRefs(sMatches())
const list = useTemplateRef<HTMLElement>("list")
const scrollBody = useProfileScrollBody()
const scrollMargin = shallowRef(0)

const hasMatches = computed(() => filteredMatches.value?.length > 0)

type MatchListRow =
  | {
      key: string
      kind: "match"
      match: MatchData
    }
  | {
      key: "load-more"
      kind: "load-more"
    }

const rows = computed<MatchListRow[]>(() => [
  ...filteredMatches.value.map(match => ({
    key: match.matchId,
    kind: "match" as const,
    match,
  })),
  { key: "load-more", kind: "load-more" },
])

const virtualizer = useVirtualizer(
  computed(() => ({
    count: rows.value.length,
    estimateSize: (index: number) =>
      rows.value[index]?.kind === "load-more" ? 128 : 156,
    overscan: 3,
    gap: 12,
    paddingStart: 4,
    paddingEnd: 8,
    isScrollingResetDelay: 120,
    getItemKey: (index: number) => rows.value[index]?.key ?? index,
    getScrollElement: () => scrollBody?.value ?? null,
    scrollMargin: scrollMargin.value,
  }))
)

const virtualItems = computed(() => virtualizer.value.getVirtualItems())
const totalSize = computed(() => virtualizer.value.getTotalSize())
const virtualRows = computed(() =>
  virtualItems.value
    .map(virtualItem => ({
      row: rows.value[virtualItem.index],
      virtualItem,
    }))
    .filter((item): item is { row: MatchListRow, virtualItem: VirtualItem } =>
      Boolean(item.row)
    )
)

function measureScrollMargin() {
  const scrollElement = scrollBody?.value
  const listElement = list.value
  if (!scrollElement || !listElement) return

  scrollMargin.value = getElementScrollMargin(scrollElement, listElement)
}

function refreshVirtualizer() {
  measureScrollMargin()
  virtualizer.value.measure()
}

function measureElement(el: Element | ComponentPublicInstance | null) {
  if (!el) return
  const element = el instanceof Element ? el : el.$el
  if (element instanceof Element) virtualizer.value.measureElement(element)
}

watch(
  [() => rows.value.length, () => scrollBody?.value, () => list.value],
  () => nextTick(refreshVirtualizer),
  { flush: "post" }
)

onMounted(() => {
  nextTick(refreshVirtualizer)
  useEventListener(window, "resize", () => nextTick(refreshVirtualizer))
})
</script>

<template>
  <div
    :class="
      cn(
        '@container flex w-full min-w-220 grow flex-col items-center gap-10 overflow-x-visible!',
        className
      )
    ">
    <!--     <LazyUAlert
      v-if="loadMessage"
      icon="reset"
      class="w-full"
      :title="loadMessage"
      @click="loadMessage = ''" />
 -->
    <!-- loading skeleton -->
    <div v-if="loading" class="flex w-full flex-col gap-8">
      <LazyUSkeleton
        v-for="i in 12"
        :key="i"
        class="field-box h-40 w-full min-w-full grow" />
    </div>

    <!-- empty state -->
    <div
      v-else-if="!hasMatches"
      class="grid h-64 place-items-center font-medium">
      No matches found with these filters.
    </div>

    <!-- virtualized rows -->
    <div
      v-else-if="matches?.length"
      ref="list"
      class="relative w-full overflow-x-visible! pt-36 pb-2"
      :style="{ height: `${totalSize}px` }">
      <div
        v-for="{ row, virtualItem } in virtualRows"
        :key="String(virtualItem.key)"
        :ref="measureElement"
        :data-index="virtualItem.index"
        class="absolute top-0 left-0 w-full overflow-x-visible!"
        :style="{
          transform: getVirtualItemTransform(virtualItem.start, scrollMargin),
        }">
        <MatchCard v-if="row.kind === 'match'" :match="row.match" />
        <MatchListLoadFooter v-else />
      </div>
    </div>
  </div>
</template>
