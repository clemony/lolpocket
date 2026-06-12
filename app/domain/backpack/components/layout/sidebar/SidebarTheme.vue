<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"
import { pocketSidebarContextUi } from "~/domain/backpack/utils/folder/ui"
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
      avatar: {
        image: 'translate-y-1 scale-180',
        root: 'overflow-hidden shadow-xs drop-shadow-xs'
      },
      fieldGroup: {
        base: cn(
          'cursor-context hover:divide-x-p3! divide-x-transparent! relative w-full max-w-full divide-x! overflow-hidden rounded-lg p-0 hover:bg-p1',
          /* dragging */
          'dragging:bg-p1/80 dragging:inset-ring! dragging:inset-ring-p2! dragging:backdrop-blur-sm',

          /* active */
          'group-open/btn:bg-p1 group-active/btn:bg-p1 open:bg-p1',

          /* targetted */
          'targetted:bg-neutral targetted:text-nc targetted:[&_span]:text-nc!'
        )
      },
      button: {
        base: cn(
          'cursor-context relative my-0! grow gap-2.5 border-transparent hover:bg-p1',
          /* badge label */
          '[&_.label]:w-full [&_.label]:truncate [&_.label]:text-start [&_.label]:align-baseline [&_.label]:text-md [&_.label]:font-medium [&_.label]:tracking-tight hover:[&_.label]:underline',

          /* dragging */
          'dragging:bg-p1/80 dragging:inset-ring! dragging:inset-ring-p2! dragging:backdrop-blur-sm',

          /* active */
          'group-open/btn:bg-p1 group-active/btn:bg-p1 open:bg-p1',

          /* targetted */
          'targetted:bg-neutral targetted:text-nc targetted:[&_span]:text-nc!',

          /* editing */
          /*           'group-data-[editing=false]/btn:pointer-events-none group-data-[editing=true]/btn:pointer-events-auto', */

          /* droppable */
          '',

          /* trailing */
          '[&_.trailing-icon]:transition-rotate [&_.trailing-icon]:pointer-events-none [&_.trailing-icon]:-ml-1 [&_.trailing-icon]:size-4.5 [&_.trailing-icon]:shrink-0 [&_.trailing-icon]:align-icon [&_.trailing-icon]:opacity-50 [&_.trailing-icon]:duration-200 [&_.trailing-icon]:hover:opacity-100 data-[collapsed=false]:[&_.trailing-icon]:-rotate-180 targetted:[&_.trailing-icon]:text-nc targetted:[&_.trailing-icon]:opacity-100'
        ),
        leadingAvatar: 'pointer-events-none -translate-x-0.5',
        trailingIcon: cn(
          'trailing-rotate pointer-events-none -ml-1 size-4! shrink-0 align-icon opacity-60 group-open/btn:-rotate-180 group-hover/btn:opacity-100 group-targetted/btn:text-nc group-targetted/btn:opacity-100'
        ),
        leadingIcon:
          'pointer-events-none group-targetted/btn:text-nc! group-targetted/btn:**:text-nc!',
        label:
          'pointer-events-none truncate text-start align-baseline text-sm font-medium tracking-tight group-hover/btn:underline'
      },
      badge: {
        base: 'pointer-events-none h-4.25! shrink-0 rounded-[0.44rem]! px-1.5',
        label: 'text-xs font-semibold'
      },
      input: {
        root: 'inline-flex h-10 max-h-10 w-full max-w-full grow align-baseline',
        leadingAvatar: '-translate-x-0.5',
        base: 'w-full scrollbar-none overflow-x-scroll pr-14 pl-10.75 text-start align-baseline text-sm font-medium tracking-tight select-all'
      },
      contextMenu: pocketSidebarContextUi,
      collapsible: {
        root: 'w-full max-w-full overflow-hidden',
        content: cn(
          'relative my-0! ml-4.5 grid max-h-fit w-full max-w-[calc(100%-var(--spacing)*4.5)] auto-rows-auto gap-y-1.5 overflow-hidden py-0.5 pr-4 pl-2.5',
          'before:pointer-events-none before:absolute before:inset-y-2 before:left-px before:w-px before:border-l before:border-l-p4/60'
        )
      }
    }">
    <slot />
  </UTheme>
</template>
