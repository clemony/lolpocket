<script lang="ts" setup>
import type { DashboardPanelProps, TabsItem } from "@nuxt/ui"

const props = defineProps<
  DashboardPanelProps & {
    routes?: TabsItem[]
    backdrop?: {
      src?: string
      width?: number
      height?: number
      class: HTMLAttributes["class"]
    }
    ui?: {
      root?: HTMLAttributes["class"]
    }
  }
>()
const open = shallowRef<boolean>(false)
const route = useRoute()
</script>

<template>
  <div
    :class="
      cn(
        'relative flex h-screen max-h-screen flex-1 items-start overflow-hidden bg-p1',
        props.ui?.root
      )
    ">
    <DashboardSidebar />
    <div
      class="relative inset-0 z-2 flex h-full flex-1 items-start justify-center gap-0 rounded-6xl bg-p0 shadow-sm ring shadow-black/12 ring-p2">
      <!-- page -->

      <slot name="header" />
      <slot />
    </div>
  </div>
</template>
