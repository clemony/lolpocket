<script lang="ts" setup>
import type { DialogContentEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'

/* import { DrawerContent, FadeDialogContent } from '#components' */

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
  side?: Side
}>()

const emits = defineEmits<DialogContentEmits>()

const isDesktop = useMediaQuery('(min-width: 768px)')

const delegatedProps = computed(() => {
  const { side, class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <FadeDialogContent
    v-if="isDesktop"
    :class="cn('', props.class)"
    v-bind="forwarded">
    <slot />
  </FadeDialogContent>

  <DrawerContent
    v-else
    :side="side"
    :class="cn('', props.class)"
    v-bind="forwarded">
    <slot />
  </DrawerContent>
</template>
