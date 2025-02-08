<script setup lang="ts">
import {
  ContextMenuSubContent,

  useForwardPropsEmits,
} from 'radix-vue'
import type { DropdownMenuSubContentEmits, DropdownMenuSubContentProps } from 'radix-vue'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSubContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DropdownMenuSubContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuSubContent
    v-bind="forwarded"
    :class="
      cn(
        'z-50 min-w-52 overflow-hidden rounded-md border border-b3/60 bg-b1/90 backdrop-blur-md py-2 pl-1 pr-2   shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 !text-2 **:text-2',
        props.class,
      )
    "
  >
    <slot />
  </ContextMenuSubContent>
</template>
