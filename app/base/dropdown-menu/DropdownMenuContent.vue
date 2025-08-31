<script setup lang="ts">
import type { DropdownMenuContentEmits, DropdownMenuContentProps } from 'reka-ui'
import {
  DropdownMenuContent,

  DropdownMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(
  defineProps<DropdownMenuContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  },
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="cn('z-50  overflow-hidden rounded-lg border border-b3/80  bg-b1/94 backdrop-blur-md p-1.5 text-bc shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out  data-[side=bottom]:slide-in-from-top-100 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-(--reka-dropdown-menu-trigger-width)', props.class)"
      @close-auto-focus.prevent>
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
