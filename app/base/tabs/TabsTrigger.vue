<script lang="ts" setup>
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  TabsTriggerProps & {
    value?: string | number | null
<<<<<<< HEAD
    active?: TabsTriggerVariants['active']
    base?: TabsTriggerVariants['base']
    class?: HTMLAttributes['class']
    hover?: TabsTriggerVariants['hover']
    size?: TabsTriggerVariants['size']
    variant?: TabsTriggerVariants['variant']
=======
    class?: HTMLAttributes['class']
    contrast?: boolean
>>>>>>> refs/remotes/origin/main
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    :value="props.value"
    v-bind="forwarded"
<<<<<<< HEAD
    :class=" cn('', tabsTriggerVariants({ base, variant, size, hover, active }), props.class)">
=======
    :class="
      cn('inline-flex gap-3 items-center justify-center whitespace-nowrap  px-3  py-1.25 text-3 z-2 cursor-pointer  hover:text-bc hover:**:text-bc **:text-bc text-bc ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20  data-[state=active]:bg-transparent font-medium  data-[state=active]:shadow-none', {
           ' on:text-bc on:**:text-bc':
             !props.contrast,
           ' on:text-nc on:**:text-nc ':
             props.contrast,
         },
         props.class,
      )
    ">
>>>>>>> refs/remotes/origin/main
    <slot />
  </TabsTrigger>
</template>
