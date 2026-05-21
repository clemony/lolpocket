<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"

const { pockets } = storeToRefs(pocketStore())
const { settings } = storeToRefs(user())
const { search, toggleSearch } = useBackpack()

const source = computed(() => ({
  ...settings.value?.folders,
  ...pockets.value
}))
const results = useSearch(source, search, {
  keys: ["label", "iconKey", "champions"]
})

interface SearchSuggestionItem {
  count?: number
  label: string
  value: string
}

type PocketArrayKey<Value> = {
  [Key in keyof Pocket]-?: NonNullable<Pocket[Key]> extends Value[]
    ? Key
    : never
}[keyof Pocket]

type PocketStringArrayKey = PocketArrayKey<string>

function mapPocketValues(
  key: PocketStringArrayKey,
  options: {
    label: (value: string) => string
  }
): SearchSuggestionItem[] {
  const counts = pockets.value
    .flatMap((p) => p[key] ?? [])
    .filter((value): value is string => Boolean(value))
    .reduce<Record<string, SearchSuggestionItem>>((acc, value) => {
      acc[value] ??= {
        count: 0,
        label: options.label(value),
        value
      }
      acc[value].count = (acc[value].count ?? 0) + 1

      return acc
    }, {})

  return Object.values(counts).sort(
    (a, b) => (b.count ?? 0) - (a.count ?? 0) || a.label.localeCompare(b.label)
  )
}
const tagKeys = computed<SearchSuggestionItem[]>(() =>
  mapPocketValues("tags", {
    label: (tag) => tag
  })
)

const championKeys = computed<SearchSuggestionItem[]>(() =>
  mapPocketValues("champions", {
    label: (champion) => champNameByKey(champion) ?? champion
  })
)

const searchSuggestions = computed<
  {
    items: SearchSuggestionItem[]
    label: string
    ui?: Record<string, string>
  }[]
>(() => {
  return [
    {
      label: "Tags",
      items: tagKeys.value.slice(0, 8)
    },
    {
      label: "Role",
      items: positionSchema.options.map((position) => ({
        label: position,
        value: position
      }))
    },
    {
      label: "Champion",
      items: championKeys.value.slice(0, 8)
    }
  ].filter((suggestion) => suggestion.items.length)
})

function applySuggestion(item: SearchSuggestionItem) {
  search.value = item.value
}

function toggle() {
  toggleSearch(false)
}
</script>

<template>
  <div class="inset-0 flex size-full flex-col">
    <div class="sticky top-0 z-1 w-full bg-p0 p-2">
      <UButton
        variant="link"
        size="sm"
        :ui="{
          base: 'opacity-60 hover:opacity-100',
          leadingIcon: 'size-3.5',
          label: 'text-xs'
        }"
        label="Back to pockets"
        icon="i-left"
        @click="toggle()" />
    </div>
    <div
      v-if="search.length <= 2 || (search.length > 2 && !results.length)"
      class="flex w-full flex-col gap-12 px-6 py-12">
      <UEmpty
        size="sm"
        variant="outline"
        icon="i-search"
        title="Search"
        description="Find pockets or folders within your backpack." />

      <div class="flex w-full flex-col gap-1">
        <div class="w-full text-2xs font-bold uppercase opacity-60">
          Suggestions
        </div>
        <div
          v-for="suggestion in searchSuggestions"
          :key="suggestion.label"
          class="flex w-full flex-col gap-4 py-2">
          <Separator
            :label="suggestion.label"
            :ui="{ label: 'text-2xs font-bold uppercase opacity-60' }"
            label-position="end" />
          <div
            :class="
              cn(
                'flex w-full flex-wrap gap-x-2 gap-y-3',
                suggestion.ui?.container
              )
            ">
            <UButton
              v-for="(item, i) in suggestion.items"
              :key="item.value || i"
              size="xs"
              icon="i-hash"
              :ui="{
                label: 'text-xs',
                base: 'max-h-6 w-min max-w-min gap-0 bg-p2/20 px-2.5',
                leadingIcon: 'size-3.5'
              }"
              :label="item.label"
              @click="applySuggestion(item)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
