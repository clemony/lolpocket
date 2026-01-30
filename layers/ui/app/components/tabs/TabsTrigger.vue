<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    TabsTriggerProps & {
      value?: string | number | null
      on?: TabsTriggerVariants['on']
      class?: HTMLAttributes['class']
    }
  >(),
  {}
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :value="props.value"
    :on
    :class="cn('group/tt z-1 size-full', props.class)"
  >
    <slot />
  </TabsTrigger>
</template>
