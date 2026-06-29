<script lang="ts" setup>
import type { DashboardPanelProps, TabsItem } from "@nuxt/ui"

const props = defineProps<
  DashboardPanelProps & {
    routes?: TabsItem[]
  }
>()
const open = shallowRef<boolean>(false)
const route = useRoute()
const { settings, hotkeys, account, summoner } = storeToRefs(user())
</script>

<template>
  <UDashboardGroup
    unit="rem"
    class="flex max-h-screen min-h-screen flex-1 grow justify-center bg-p1 pr-12">
    <DashboardSidebar />
    <!-- page -->
    <UDashboardPanel
      resizable
      :ui="{
        root: 'inset-0 flex flex-1 grow flex-row-reverse p-0',
        body: cn(
          'relative flex h-screen w-full shrink-0 flex-col gap-0! overflow-hidden py-0!'
        ),
      }">
      <template #body>
        <div class="absolute inset-0 z-auto size-full overflow-y-auto">
          <slot name="header" />

          <slot />
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
