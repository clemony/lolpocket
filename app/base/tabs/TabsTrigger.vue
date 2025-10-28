<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  TabsTriggerProps & {
    value?: string | number | null
    active?: TabsTriggerVariants['active']
    base?: TabsTriggerVariants['base']
    class?: HTMLAttributes['class']
    hover?: TabsTriggerVariants['hover']
    size?: TabsTriggerVariants['size']
    variant?: TabsTriggerVariants['variant']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    :value="props.value"
    v-bind="forwarded"
    :class=" cn('', tabsTriggerVariants({ base, variant, size, hover, active }), props.class)">
    <slot />
  </TabsTrigger>
</template>
