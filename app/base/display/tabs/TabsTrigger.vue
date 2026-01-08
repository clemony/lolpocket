<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<
  TabsTriggerProps & {
    value?: string | number | null
    on?: TabsTriggerVariants['on']
    base?: TabsTriggerVariants['base']
    class?: HTMLAttributes['class']
    hover?: TabsTriggerVariants['hover']
    variant?: TabsTriggerVariants['variant']
  }
>(), {
  base: 'btn',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    :value="props.value"
    v-bind="forwarded"
    :class="
      cn(
        tabsTriggerVariants({ base, variant, hover, on }),
        'group/tt z-1 size-full',
        props.class,
      )
    ">
    <slot />
  </TabsTrigger>
</template>
