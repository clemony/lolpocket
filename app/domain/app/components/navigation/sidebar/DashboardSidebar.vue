<script lang="ts" setup>
import { motion } from "motion-v"

import { sidebarTabItems } from "~/domain/app/constants/sidebar-tabs"

const collapsed = shallowRef<boolean>(false)

const tabModel = shallowRef<string | undefined>("menu")
const sidebar = useTemplateRef<HTMLElement>("sidebar")

const query = shallowRef<string | undefined>(undefined)
const el = useTemplateRef<HTMLElement>("el")
const { style } = useScrollShadow(el, {
  size: 30,
})

provide("sidebarState", { collapsed })

const oldIndex = shallowRef<number>(0)
const newIndex = shallowRef<number>(0)

function handleTab(e: number) {
  oldIndex.value = newIndex.value
  newIndex.value = e
}

function handleUpdateSidebar(e: string) {
  handleTab(Object.keys(sidebarTabItems).indexOf(e))
  tabModel.value = e
}
const tab = computed(() => (oldIndex.value > newIndex.value ? "0%" : "-100%"))
</script>

<template>
  <UDashboardSidebar
    ref="sidebar"
    v-model:collapsed="collapsed"
    side="left"
    collapsible
    resizable
    :max-size="34"
    :default-size="28"
    :min-size="16"
    :collapsed-size="8"
    rail
    :ui="{
      handle: 'w-12',
      root: '@container max-h-max gap-8 divide-none overflow-hidden bg-p0 py-12 pr-0! pl-11 shadow-none ring-0',
      body: 'relative max-h-max overflow-hidden rounded-6xl bg-p0 p-0! ring ring-p2',
      header: 'flex h-fit items-center py-0 pr-1 pl-0',
      footer: 'p-0!',
      //rail: 'mask-y-from-80% mask-y-to-100%',
    }">
    <template #header>
      <DashboardSidebarHeader
        @update:sidebar="handleUpdateSidebar($event)"
        @update:query="query = $event" />
    </template>
    <div
      ref="el"
      :style="sidebarTabItems[String(tabModel)]?.overlay ? style : undefined"
      class="flex flex-1 scrollbar-none overflow-y-auto px-4! py-0 **:scrollbar-none">
      <SidebarTheme>
        <component :is="sidebarTabItems[String(tabModel)]?.component" />
      </SidebarTheme>
    </div>
    <template #footer>
      <DashboardSidebarFooter />
    </template>
  </UDashboardSidebar>
</template>
