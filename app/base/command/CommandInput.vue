<script setup lang="ts">
import type { ListboxFilterProps } from 'reka-ui'
import { ListboxFilter, useForwardProps } from 'reka-ui'
import { useCommand } from './cindex'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ListboxFilterProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const { filterState } = useCommand()
</script>

<template>
  <div
    class="flex items-center border-b-b3/65 border-b px-3"
    cmdk-input-wrapper>
    <icon
      name="search"
      class="mr-2 h-4 w-4 shrink-0 opacity-50" />

    <ListboxFilter
      v-bind="{ ...forwarded, ...$attrs }"
      v-model="filterState.search"

      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 text-2 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)" />
  </div>
</template>
