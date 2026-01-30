<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive, useForwardProps } from 'reka-ui'
import { useTippy } from 'vue-tippy'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes['class']
      as?: string | HTMLElement
    }
  >(),
  {
    as: 'div',
  }
)

const tippyBox = useTemplateRef<HTMLElement>('tippyBox')
const tippy = useTemplateRef<HTMLElement>('tippy')

const forwarded = useForwardProps(props)
useTippy(tippyBox, {
  content: tippy.value,
})
</script>

<template>
  <Primitive
    v-bind="forwarded"
    ref="tippyBox"
    :as="as"
    :class="cn('', props.class)"
  >
    <slot />

    <div ref="tippy">
      <slot name="content" />
    </div>
  </Primitive>
</template>
