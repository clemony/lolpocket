<script lang="ts" setup>
import type { FeedbackType } from "@dnd-kit/dom"
import { Feedback } from "@dnd-kit/dom"
import type { UseSortableInput } from "@dnd-kit/vue/sortable"
import { useSortable } from "@dnd-kit/vue/sortable"
import type { IconProps } from "~/types/ui.types"

const props = defineProps<{
  id: string | number
  type: string
  group: string
  data?: UseSortableInput["data"]
  icon: IconProps
  index: number
  drag?: FeedbackType
}>()

const element = useTemplateRef<HTMLElement>("element")
const { isDragging } = useSortable({
  id: computed(() => `${props.group}:${props.id}`),
  index: computed(() => props.index),
  type: props.drag
    ? `${props.drag === "clone" ? "clone:" : ""}${props.type}`
    : props.type,
  data: props.data ?? undefined,
  group: props.group,
  accept: props.type,
  plugins: [Feedback.configure({ feedback: props.drag ?? "default" })],
  element
})
</script>

<template>
  <div
    ref="element"
    :class="
      cn('relative shrink-0', {
        '': isDragging
      })
    ">
    <HoverIcon v-bind="props.icon" />
    <slot />
  </div>
</template>
