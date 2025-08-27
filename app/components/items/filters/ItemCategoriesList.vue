<script setup lang="ts">
import { ListboxContent, ListboxItem, ListboxItemIndicator, ListboxRoot } from 'reka-ui'
import { itemTags } from '~/utils/filter/itemFilters'

const is = useItemStore()
function handleReset() {
  is.itemGridApi?.refreshCells()
}
// TODO FIx this for ag grid rfresh
function handleChange() {
  is.itemGridApi?.refreshCells()
}
</script>

<template>
  <ListboxRoot
    v-model:model-value="fi().filters.tags"
    :multiple="true"
    @entry-focus.prevent>
    <ListboxContent
      class="w-full pt-0 pb-1 "
      @entry-focus.prevent
      @highlight.prevent>
      <ListboxItem
        v-for="tag in itemTags"
        :key="tag.id"
        as-child
        :value="tag.id">
        <!-- <icon name="tick-sm" /> -->
        <Button
          variant="ghost"
          size="sm"
          :class="cn('justify-start capitalize')">
          {{ tag.displayName }}
          <ListboxItemIndicator class="h-fit w-auto aspect-square justify-self-end justify-end">
            <input
              type="checkbox"
              class="checkbox checkbox-xs pointer-events-none checkbox-neutral"
              :checked="true" />
          </ListboxItemIndicator>
        </Button>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>

<style scoped></style>
