<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  }
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwarded"
      :class="
        cn(
          'z-50 w-64 rounded-xl border bg-b1/90 backdrop-blur-md border-b2   shadow-lg outline-none overflow-hidden',
          props.class,
        )
      ">
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
