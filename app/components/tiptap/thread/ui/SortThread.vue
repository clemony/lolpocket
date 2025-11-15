<script setup lang="ts">
import { parseAbsoluteToLocal } from '@internationalized/date'

const { thread } = defineProps<{
  thread: CommentData[] | null
}>()
useScrollToHash('#app')
const sort = shallowRef<string>('best')
const sortedComments = ref<CommentData[]>(null)
function sortComments() {
  if (!thread)
    return

  const comments = [...thread]

  if (sort.value === 'best') {
    comments.sort(
      (a, b) => a.score - b.score
    )
  }
  else if (sort.value === 'new') {
    comments.sort(
      (a, b) =>
        parseAbsoluteToLocal(b.created).toDate().getTime()
        - parseAbsoluteToLocal(a.created).toDate().getTime(),
    )
  }

  return (sortedComments.value = comments)
}

onMounted(() => {
  sortComments()
})

defineExpose({
  sortedComments,
})
</script>

<template>
  <Select
    v-model:model-value="sort"
    :disabled="!thread.length"
    @update:model-value="sortComments()">
    <VarSelectTrigger
      variant="ghost"
      hover="inset"
      class="
        w-28 justify-start pl-3
        hover:border-b4/50!
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
        w-29.5 -translate-y-[calc(var(--reka-select-trigger-height)+6px)]!
        **:text-3
      ">
      <SelectItem
        class="pr-1!"
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
