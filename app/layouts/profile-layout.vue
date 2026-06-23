<script lang="ts" setup>
import type { DashboardPanelProps, TabsItem } from "@nuxt/ui"
import { provideProfileScrollBody } from "~/domain/summoner/composables/useProfileScrollBody"

const props = defineProps<
  DashboardPanelProps & {
    routes?: TabsItem[]
  }
>()
const open = shallowRef<boolean>(false)
const route = useRoute()
const { settings, hotkeys, account, summoner } = storeToRefs(user())
const body = useTemplateRef<HTMLElement>("body")

provideProfileScrollBody(body)
</script>

<template>
  <UDashboardGroup
    unit="rem"
    class="flex max-h-screen min-h-screen flex-1 grow justify-center bg-p1">
    <!-- page -->
    <UDashboardPanel
      resizable
      :ui="{
        root: 'inset-0 flex flex-1 grow p-0',
        body: cn(
          'relative flex h-screen w-full shrink-0 flex-col gap-0! overflow-hidden py-0!'
        ),
      }">
      <template #body>
        <div
          ref="body"
          class="absolute inset-0 z-auto size-full overflow-y-auto px-12!">
          <slot name="header" />

          <slot />
        </div>
      </template>
    </UDashboardPanel>
    <DashboardSidebar />
  </UDashboardGroup>
</template>
