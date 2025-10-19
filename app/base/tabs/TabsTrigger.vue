<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  TabsTriggerProps & {
    value?: string | number | null
    class?: HTMLAttributes['class']
    contrast?: boolean
    base?: TabListVariants['base']
    variant?: TabListVariants['variant']
    hover?: TabListVariants['hover']
    size?: TabListVariants['size']
    on?: TabListVariants['active']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    :value="props.value"
    v-bind="forwarded"
    :class="
      cn({
           ' on:text-bc on:**:text-bc':
             !props.contrast,
           ' on:text-nc on:**:text-nc ':
             props.contrast,
         },
         tabTriggerVariants({ variant, hover, size, base, active: on }),
         props.class,
      )
    ">
    <slot />
  </TabsTrigger>
</template>
