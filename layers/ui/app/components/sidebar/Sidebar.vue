<script setup lang="ts">
import type { SidebarProps } from './sidebar-index'
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from './sidebar-utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarProps>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas',
})

const { isMobile, openMobile, setOpenMobile, state } = useSidebar()
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    v-bind="$attrs"
    data-slot="sidebar"
    :class="
      cn(
        'flex h-full w-(--sidebar-width) flex-col bg-tint-p2/40 text-pc',
        props.class,
      )
    ">
    <slot />
  </div>

  <Sheet
    v-else-if="isMobile"
    v-bind="$attrs"
    :open="openMobile"
    @update:open="setOpenMobile">
    <SheetContent
      class="bg-sidebar w-(--sidebar-width) p-0 text-pc [&>button]:hidden"
      data-sidebar="sidebar"
      data-slot="sidebar"
      data-mobile="true"
      :side="side"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
      }">
      <SheetHeader class="sr-only">
        <SheetTitle>Sidebar</SheetTitle>
        <SheetDescription>Displays the mobile sidebar.</SheetDescription>
      </SheetHeader>
      <div class="flex size-full flex-col">
        <slot />
      </div>
    </SheetContent>
  </Sheet>

  <div
    v-else
    class="group peer hidden text-pc md:block"
    data-slot="sidebar"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side">
    <!-- This is what handles the sidebar gap on desktop  -->
    <div
      :class="
        cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )
      " />
    <div
      v-bind="$attrs"
      :class="
        cn(
          'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'border-p3 group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border group-data-[side=right]:border',
          props.class,
        )
      ">
      <div
        class="bg-sidebar/90 flex size-full flex-col border-p3 backdrop-blur-lg group-data-[variant=floating]:rounded-xl group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        data-sidebar="sidebar">
        <slot />
      </div>
    </div>
  </div>
</template>
