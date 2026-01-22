<script setup lang="ts">
import type { ListboxGroupProps } from 'reka-ui'
import { ListboxGroup, ListboxGroupLabel, useId } from 'reka-ui'
import { computed, onMounted, onUnmounted } from 'vue'
import { provideCommandGroupContext, useCommand } from '../../composables/ui/useCommand'

const props = defineProps<
  ListboxGroupProps & {
    class?: HTMLAttributes['class']
    heading?: string
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const { allGroups, filterState } = useCommand()
const id = useId()

const isRender = computed(() =>
  !filterState.search ? true : filterState.filtered.groups.has(id),
)

provideCommandGroupContext({ id })
onMounted(() => {
  if (!allGroups.value.has(id))
    allGroups.value.set(id, new Set())
})
onUnmounted(() => {
  allGroups.value.delete(id)
})
</script>

<template>
  <ListboxGroup
    v-bind="delegatedProps"
    :id="id"
    :class="
      cn('overflow-hidden p-1 text-bc **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-sm **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-bc/50',
         props.class,
      )
    "
    :hidden="isRender ? undefined : true">
    <ListboxGroupLabel
      v-if="heading"
      class="px-2 py-1.5 text-sm font-medium text-bc/50">
      {{ heading }}
    </ListboxGroupLabel>

    <slot />
  </ListboxGroup>
</template>
