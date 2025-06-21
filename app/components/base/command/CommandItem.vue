<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'

import { useCurrentElement } from '@vueuse/core'
import { ListboxItem, useForwardPropsEmits, useId } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useCommand, useCommandGroup } from './cindex'

const props = defineProps<ListboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ListboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const id = useId()
const { filterState, allItems, allGroups } = useCommand()
const groupContext = useCommandGroup()

const isRender = computed(() => {
  if (!filterState.search) {
    return true
  }
  else {
    const filteredCurrentItem = filterState.filtered.items.get(id)
    // If the filtered items is undefined means not in the all times map yet
    // Do the first render to add into the map
    if (filteredCurrentItem === undefined) {
      return true
    }

    // Check with filter
    return filteredCurrentItem > 0
  }
})

const itemRef = ref()
const currentElement = useCurrentElement(itemRef)
onMounted(() => {
  if (!(currentElement.value instanceof HTMLElement))
    return

  // textValue to perform filter
  allItems.value.set(id, currentElement.value.textContent ?? props.value.toString())

  const groupId = groupContext?.id
  if (groupId) {
    if (!allGroups.value.has(groupId)) {
      allGroups.value.set(groupId, new Set([id]))
    }
    else {
      allGroups.value.get(groupId)?.add(id)
    }
  }
})
onUnmounted(() => {
  allItems.value.delete(id)
})
</script>

<template>
  <ListboxItem
    v-if="isRender"
    v-bind="forwarded"
    :id="id"
    ref="itemRef"
    :class="cn('relative flex cursor-default gap-2 select-none items-center rounded-md px-2 py-1.5 text-2 outline-none data-[highlighted]:bg-b2/60  = data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:-mx-1', props.class)"
    @select="() => {
      filterState.search = ''
    }">
    <slot />
  </ListboxItem>
</template>
