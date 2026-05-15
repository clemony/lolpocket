<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"

const { pockets } = storeToRefs(pocketStore())
const { settings } = storeToRefs(user())
const { search } = useBackpack()

const source = computed(() => ({
  ...settings.value?.folders,
  ...pockets.value
}))
const results = useSearch(source, search, {
  keys: ["label", "iconKey", "_champion", "champions"]
})
</script>

<template>
  <div class="flex size-full grow flex-col">
    <div
      v-if="search.length <= 2 || (search.length > 2 && !results.length)"
      class="mt-16 grid w-full place-items-center px-6">
      <UEmpty
        size="sm"
        variant="outline"
        icon="i-search"
        title="Search"
        description="Find pockets or folders within your backpack." />
    </div>
  </div>
</template>
