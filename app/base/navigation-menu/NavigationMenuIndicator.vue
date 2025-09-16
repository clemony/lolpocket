<script setup lang="ts">
import { motion } from 'motion-v'
import type { NavigationMenuIndicatorProps } from 'reka-ui'
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
        'absolute data-[state=hidden]:opacity-0  top-full w-(--reka-navigation-menu-indicator-size) mask-b-from-97% to-98% translate-x-(--reka-navigation-menu-indicator-position) mt-[1px] z-[100] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]',
        props.class,
      )
    "
    as-child>
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
      }">
      <div
        class="relative top-[70%] h-[12px] w-[12px] rotate-[45deg] bg-b1/94 border border-b4/70" />
    </motion.div>
  </NavigationMenuIndicator>
</template>
