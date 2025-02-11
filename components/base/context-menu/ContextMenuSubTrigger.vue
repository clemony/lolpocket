<script setup lang="ts">
import {
  ContextMenuSubTrigger,

  useForwardProps,
} from 'radix-vue'
import type { ContextMenuSubTriggerProps } from 'radix-vue'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuSubTriggerProps & {
  as?: string
  class?: HTMLAttributes['class']
  icon?: string
  iconClass?: string
}>()

const delegatedProps = computed(() => {
  const { class: _, as = 'div', ...delegated } = props
  return { as, ...delegated }
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none focus:bg-base-200/60 gap-1 focus:text-base-content data-[state=open]:bg-base-200/60 data-[state=open]:text-accent-foreground relative group',
      props.class,
    )"
  >
    <div class="size-7 overflow-hidden grid place-items-center">
    </div>
    <slot />
    <LittleIcon icon="stash:chevron-right-light" class="absolute  right-2 size-6 text-bc shrink-0 opacity-100" />
  </ContextMenuSubTrigger>
</template>
<!-- group-data-[state=open]:-scale-x-100   transition-all duration-50 -->