<script setup lang="ts">
import { parseAbsoluteToLocal } from '@internationalized/date'

useScrollToHash('#app')
const sort = shallowRef<string>('best')
const sortedComments = ref<CommentSchema[]>(null)
function sortComments() {
  const comments = [...as().comments] // make a shallow copy to avoid mutating original

  if (sort.value === 'best') {
    comments.sort((a, b) =>
      (b.upvotes.length - b.downvotes.length) - (a.upvotes.length - a.downvotes.length))
  }

  else if (sort.value === 'new') {
    comments.sort((a, b) =>
      parseAbsoluteToLocal(b.created).toDate().getTime()
      - parseAbsoluteToLocal(a.created).toDate().getTime()
    )
  }

  return sortedComments.value = comments
}

onMounted (() => {
  sortComments()
})

defineExpose({
  sortedComments
})
</script>

<template>
  <Select
    v-model:model-value="sort"
    :disabled="!as().comments.length"
    @update:model-value="sortComments()">
    <VarSelectTrigger
      variant="ghost"
      hover="inset"
      class="
        w-28 justify-start pl-3
        hover:!border-b4/50
      "
      size="sm">
      <SelectValue />
      <icon
        name="down"
        class="
          absolute right-2 size-4 opacity-60
          group-hover/select:opacity-100
        " />
    </VarSelectTrigger>
    <LazySelectContent
      align="end"
      class="
        w-29.5 !-translate-y-[calc(var(--reka-select-trigger-height)+6px)]
        **:text-3
      ">
      <SelectItem
        class="!pr-1"
        value="best">
        Best
      </SelectItem>
      <SelectItem
        class="pr-0"
        value="new">
        New
      </SelectItem>
    </LazySelectContent>
  </Select>
</template>