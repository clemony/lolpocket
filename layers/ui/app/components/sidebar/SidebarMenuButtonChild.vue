<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import type { SidebarMenuButtonVariants } from './sidebar-index'
import { sidebarMenuButtonVariants } from './sidebar-index'

export interface SidebarMenuButtonProps extends PrimitiveProps {
  class?: HTMLAttributes['class']
  isActive?: boolean
  size?: SidebarMenuButtonVariants['size']
  variant?: SidebarMenuButtonVariants['variant']
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  as: 'button',
  size: 'default',
  variant: 'default',
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
