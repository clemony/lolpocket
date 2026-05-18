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
  keys: ["label", "iconKey", "_champion", "champions"]
})

const searchSuggestions = computed(() => {
  return [
    {
      label: "By Role...",
      items: positionSchema.options
    }
  ]
})
</script>

<template>
  <div class="flex size-full grow flex-col">
    <div class="sticky top-0 z-1 w-full bg-p0 p-2">
      <UButton
        variant="link"
        size="sm"
        :ui="{
          base: 'opacity-60 hover:opacity-100',
          leadingIcon: 'size-3.5',
          label: 'text-xs'
        }"
        label="Back to menu"
        icon="i-left" />
    </div>
    <div
      v-if="search.length <= 2 || (search.length > 2 && !results.length)"
      class="mt-16 grid w-full place-items-center px-6">
      <UEmpty
        size="sm"
        variant="outline"
        icon="i-search"
        title="Search"
        description="Find pockets or folders within your backpack." />

      <div class="flex w-full flex-col">
        <div>Suggestions</div>
        <div class="flex w-full flex-col">
          <div class="">
            By Role...
            <div class="flex flex-wrap gap-2">
              <UButton
                v-for="role in positionSchema.options"
                :key="role"
                size="xs"
                :ui="{ label: 'text-xs', base: 'max-h-6 bg-p2/40 px-3' }"
                :label="role" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
