<script setup lang="ts">
import { cn } from '@lib/utils'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
<DropdownMenuSubTrigger v-bind="forwardedProps" :class="cn(
  'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 font-size-2 outline-hidden focus:bg-b2/60 data-[state=open]:bg-b2/60',
  props.class,
)">
  <slot />
  <icon icon="teenyicons:right-small-outline" class="ml-auto h-4 w-4" />
</DropdownMenuSubTrigger>
</template>
