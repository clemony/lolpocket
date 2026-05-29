<script lang="ts" setup>
import { pocketSidebarContextUi } from "~/domain/pocket/utils/menu/contextActions"
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <UTheme
    :props="{
      button: {
        variant: 'highlight',
        color: 'primary'
      },
      badge: { size: 'xs', color: 'neutral' }
    }"
    :ui="{
      button: {
        base: cn(
          'relative my-0! w-full max-w-full gap-2.5 hover:bg-p1',
          /* badge label */
          '[&_.label]:w-full [&_.label]:truncate [&_.label]:text-start [&_.label]:align-baseline [&_.label]:text-md [&_.label]:font-medium [&_.label]:tracking-tight',

          /* dragging */
          'dragging:bg-p1/80 dragging:inset-ring! dragging:inset-ring-p2! dragging:backdrop-blur-sm',

          /* active */
          'group-open/btn:bg-p1 group-active/btn:bg-p1',

          /* targetted */
          'targetted:bg-neutral targetted:text-nc targetted:[&_span]:text-nc!',

          /* editing */
          /*           'group-data-[editing=false]/btn:pointer-events-none group-data-[editing=true]/btn:pointer-events-auto', */

          /* droppable */
          '',

          /* trailing */
          '[&_.trailing-icon]:transition-rotate [&_.trailing-icon]:pointer-events-none [&_.trailing-icon]:-ml-1 [&_.trailing-icon]:size-4.5 [&_.trailing-icon]:shrink-0 [&_.trailing-icon]:align-icon [&_.trailing-icon]:opacity-50 [&_.trailing-icon]:duration-200 [&_.trailing-icon]:open:-rotate-180 [&_.trailing-icon]:hover:opacity-100 targetted:[&_.trailing-icon]:text-nc targetted:[&_.trailing-icon]:opacity-100'
        ),
        leadingAvatar: 'pointer-events-none -translate-x-0.5',
        trailingIcon: cn(
          'trailing-rotate pointer-events-none -ml-1 size-4! shrink-0 align-icon opacity-60 group-open/btn:-rotate-180 group-hover/btn:opacity-100 group-targetted/btn:text-nc group-targetted/btn:opacity-100'
        ),
        leadingIcon:
          'pointer-events-none group-targetted/btn:text-nc! group-targetted/btn:**:text-nc!',
        label:
          'pointer-events-none truncate text-start align-baseline text-sm font-medium tracking-tight'
      },
      badge: {
        base: 'pointer-events-none h-4.25! shrink-0 rounded-[0.44rem] px-1.5',
        label: 'text-xs font-semibold'
      },
      input: {
        root: 'inline-flex h-10 max-h-10 w-full max-w-full grow align-baseline',
        leadingAvatar: '-translate-x-0.5',
        base: 'w-full scrollbar-none overflow-x-scroll pr-14 pl-10.75 text-start align-baseline text-sm font-medium tracking-tight select-all'
      },
      contextMenu: pocketSidebarContextUi
    }">
    <slot />
  </UTheme>
</template>
