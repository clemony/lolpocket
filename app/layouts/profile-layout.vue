<script lang="ts" setup>
import type { DashboardPanelProps, TabsItem } from "@nuxt/ui"

const props = defineProps<
  DashboardPanelProps & {
    routes?: TabsItem[]
  }
>()
const open = shallowRef<boolean>(false)
const route = useRoute()
</script>

<template>
  <UDashboardGroup
    unit="rem"
    class="flex max-h-screen min-h-screen flex-1 grow justify-center gap-0 bg-p1">
    <DashboardSidebar />
    <!-- page -->
    <UDashboardPanel
      resizable
      :ui="{
        root: 'inset-0 flex rounded-6xl p-0',
        body: cn('relative flex shrink-0 flex-col gap-0! overflow-hidden p-0!'),
      }">
      <template #body>
        <div
          class="absolute inset-0 z-auto mx-auto flex flex-1 grow overflow-y-auto pr-12">
          <slot name="header" />

          <slot />
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
