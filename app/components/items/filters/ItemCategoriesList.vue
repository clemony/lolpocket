<script setup lang="ts">
import { itemTags } from '@appdata'

function handleReset() {
  is().itemGridApi?.refreshCells()
}
<<<<<<< HEAD
// @todo FIx this for ag grid rfresh
=======
// TODO FIx this for ag grid rfresh
>>>>>>> refs/remotes/origin/main
function handleChange() {
  is().itemGridApi?.refreshCells()
}
</script>

<template>
  <Listbox
    v-model:model-value="is().filters.tags"
    :multiple="true"
    @entry-focus.prevent>
    <ListboxContent
      class="w-full "
      @entry-focus.prevent
      @highlight.prevent>
      <ListboxItem
        v-for="tag in itemTags"
        :key="tag.id"
        as-child
        :value="tag.id">
        {{ tag.name }}

        <ListboxItemIndicator />
      </ListboxItem>
    </ListboxContent>
  </Listbox>
</template>

<style scoped></style>
