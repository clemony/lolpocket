<script lang="ts" setup>
import { pocketSidebarContextUi } from "~/domain/pocket/menu/contextActions"
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
          'group-dragging/btn:bg-p1/80 group-dragging/btn:inset-ring! group-dragging/btn:inset-ring-p2! group-dragging/btn:backdrop-blur-sm',

          /* active */
          'group-open/btn:bg-p1 group-active/btn:bg-p1',

          /* targetted */
          'group-targetted/btn:bg-neutral group-targetted/btn:[&_span]:text-nc! group-targetted/btn:[&_svg]:text-nc',

          /* droppable */
          ''
        ),
        leadingAvatar: '-translate-x-0.5',
        trailingIcon:
          'trailing-rotate pointer-events-none size-4 shrink-0 align-icon group-open/btn:-rotate-180',
        label:
          'truncate text-start align-baseline text-sm font-medium tracking-tight'
      },
      badge: {
        base: 'h-4.25! shrink-0 rounded-[0.44rem] px-1.5',
        label: 'text-xs font-semibold'
      },
      input: {
        root: 'inline-flex h-10 max-h-10 max-w-full grow align-baseline',
        leadingAvatar: '-translate-x-0.5',
        base: 'pr-14 pl-10 text-start align-baseline text-sm font-medium tracking-tight select-all'
      },
      contextMenu: pocketSidebarContextUi
    }">
    <slot />
  </UTheme>
</template>
