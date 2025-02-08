<script setup lang="ts">
import {
  ContextMenuItem,

  useForwardPropsEmits,
} from 'radix-vue'
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'radix-vue'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes['class'],  icon?: string, iconClass?: string }>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="cn(
      'relative flex gap-1 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none focus:bg-b2/60 focus:text-bc data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )"
  >
  <div class="size-7 overflow-hidden grid place-items-center">
    <LittleIcon v-if="props.icon" :icon="props.icon" :class="cn('dst', props.iconClass)" />
  </div>
    <slot />
  </ContextMenuItem>
</template>
