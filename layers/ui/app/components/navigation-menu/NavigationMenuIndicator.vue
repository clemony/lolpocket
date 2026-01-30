<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from 'reka-ui'
import { motion } from 'motion-v'
import { NavigationMenuIndicator, useForwardProps } from 'reka-ui'

const props = defineProps<
  NavigationMenuIndicatorProps & {
    class?: HTMLAttributes['class']
    sideOffset?: number
    alignOffset?: number
    iconClass?: HTMLAttributes['class']
    orientation?: 'vertical' | 'horizontal'
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <!--   <NavigationMenuIndicator
    v-bind="forwarded"
    :class="cn('absolute NavigationMenuIndicator will-change-[position,opacity]  pointer-events-none z-3 grid  place-items-center  ', props.class)">
    <div :class="cn('grid size-8 absolute mask-b-from-68% mask-b-to-69% -top-0.5  place-items-center  ', props.iconClass)">
      <icon
        name="ion:caret-up-sharp"
        :class="cn('!size-8 mask-b-from-70% mask-b-to-90% text-b1/91 stroke-6 text-shadow-sm *:stroke-b4 drop-shadow-xs drop-shadow-black/30 ')" />
    </div>
  </NavigationMenuIndicator> -->

  <NavigationMenuIndicator
    :class="
      cn(
        'absolute top-full z-100 mt-px flex h-[10px] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) items-end justify-center overflow-hidden to-98% mask-b-from-97% transition-[all,transform_250ms_ease] data-[state=hidden]:opacity-0',
        props.class,
      )
    "
    as-child
  >
    <motion.div
      :initial="{
        opacity: 0,
        scale: 0.8,
      }"
      :animate="{
        opacity: 1,
        scale: 1,
      }"
      :exit="{
        opacity: 0,
        scale: 0.8,
      }"
      :transition="{
        type: 'spring',
        bounce: 0.25,
      }"
    >
      <div
        class="border-b4/70 bg-b1/94 relative top-[70%] size-4 rotate-45 border"
      />
    </motion.div>
  </NavigationMenuIndicator>
</template>
