<script setup lang="ts">
import type { ListboxFilterProps } from 'reka-ui'
import { ListboxFilter, useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<
  ListboxFilterProps & {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <div
    class="flex items-center border-b border-b-p3/65 px-3"
    cmdk-input-wrapper>
    <icon
      class="mr-2 size-4 shrink-0 opacity-50"
      name="search" />

    <ListboxFilter
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-pc/50 disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        )
      " />
  </div>
</template>
