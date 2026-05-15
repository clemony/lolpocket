<script lang="ts" setup>
import { LazyUButton, LazyUFieldGroup } from "#components"
import { RestrictToHorizontalAxis } from "@dnd-kit/abstract/modifiers"
import { useDraggable, useDroppable } from "@dnd-kit/vue"
import type { ButtonProps } from "@nuxt/ui"
import type { SortDirection } from "@tanstack/vue-table"
import type { ComputedRef } from "vue"

interface HeaderOptions {
  tooltip?: string
  draggable?: boolean
  sortable?: boolean
  sorted?: ComputedRef<false | SortDirection>
  toggleSort?: (desc?: boolean, isMulti?: boolean) => void
  clearSort?: () => void
}
const props = defineProps<{
  id: string
  index: number
  label: string
  disabled?: boolean
  options?: HeaderOptions
}>()

const headerOptions = computed(() => ({
  draggable: props.options?.draggable ?? true,
  sortable: props.options?.sortable ?? true,
  sorted: props.options?.sorted?.value ?? false
}))

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

const { isDragging } = useDraggable({
  id: computed(() => props.id),
  element,
  handle,
  disabled: computed(() => props.disabled || !headerOptions.value.draggable),
  type: "backpack-table-column",
  modifiers: [RestrictToHorizontalAxis],
  data: computed(() => ({
    columnId: props.id,
    index: props.index
  }))
})

const { isDropTarget } = useDroppable({
  id: computed(() => props.id),
  element,
  disabled: computed(() => props.disabled || !headerOptions.value.draggable),
  accept: "backpack-table-column",
  data: computed(() => ({
    columnId: props.id,
    index: props.index
  }))
})

const accessibleLabel = computed(
  () => props.label.toLowerCase() || props.id.toLowerCase()
)

const sortIcon = computed(() => {
  if (headerOptions.value.sorted === "asc") return "i-swap-right"
  if (headerOptions.value.sorted === "desc") return "i-swap-left"
  return "i-swap-2"
})

const sortLabel = computed(() => {
  if (headerOptions.value.sorted === "asc")
    return `Sort ${props.options?.tooltip || accessibleLabel.value} (desc)`
  if (headerOptions.value.sorted === "desc")
    return `Clear ${props.options?.tooltip || accessibleLabel.value} sort`
  return `Sort ${props.options?.tooltip || accessibleLabel.value} (asc)`
})

function onSort() {
  if (!headerOptions.value.sortable) return

  if (headerOptions.value.sorted === "desc" && props.options?.clearSort) {
    props.options.clearSort()
    return
  } else if (
    headerOptions.value.sorted === "asc" &&
    props.options?.toggleSort
  ) {
    props.options.toggleSort(true)
    return
  }
  props.options?.toggleSort?.()
}
</script>

<template>
  <div
    ref="element"
    :data-dragging="isDragging"
    :data-drop-target="isDropTarget"
    :class="
      cn(
        'group/column-header pointer-events-none my-1 flex h-9 max-h-9 min-h-9 w-full items-center justify-center gap-1 rounded-lg transition-all',
        /* dragging */
        'data-[dragging=true]:opacity-50 data-[drop-target=true]:bg-p3',

        {
          'justify-start': props.id === 'label'
        }
      )
    ">
    <UButton
      v-if="headerOptions.draggable"
      ref="handle"
      size="sm"
      variant="ghost"
      :disabled="!headerOptions.draggable"
      :ui="{
        base: cn('pointer-events-auto grow px-2.5', {
          'cursor-move!': headerOptions.draggable
        }),
        leadingIcon: 'opacity-40 group-hover/btn:opacity-100'
      }"
      :aria-label="`Move ${accessibleLabel} column`">
      <slot>
        <span class="font-semibold">{{ props.label }}</span>
      </slot>
    </UButton>

    <slot v-else>
      <span :class="{ 'grow font-semibold': props.label }">{{
        props.label
      }}</span>
    </slot>

    <Tooltip :label="sortLabel">
      <UButton
        v-if="headerOptions.sortable"
        size="sm"
        :active="!!headerOptions.sorted"
        variant="ghost"
        active-variant="solid"
        active-color="neutral"
        :square="!props.options?.draggable"
        :ui="{
          base: cn('anchor pointer-events-auto w-9!', {
            '': !props.label || !props.options?.draggable,
            '': !props.label
          }),
          leadingIcon: cn('rotate-90 opacity-50 group-hover/btn:opacity-100', {
            'opacity-100 text-nc': headerOptions.sorted
          })
        }"
        :aria-label="sortLabel"
        :icon="sortIcon"
        @click.stop="onSort" />
    </Tooltip>
  </div>
</template>
