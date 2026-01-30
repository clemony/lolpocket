<script setup lang="ts">
import type {
  DropdownMenuContentEmits,
  DropdownMenuContentProps,
} from 'reka-ui'
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(
  defineProps<
    DropdownMenuContentProps & {
      class?: HTMLAttributes['class']
      theme?: TippyTheme
      animation?: TippyAnimation
    }
  >(),
  {
    sideOffset: 4,
    animation: 'shift-toward',
    theme: 'base, clean',
  }
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'animation', 'theme')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :data-theme="props.theme"
      :data-placement="forwarded.side"
      :data-animation="props.animation"
      :class="cn('tippy-box', props.class)"
      @close-auto-focus.prevent
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
