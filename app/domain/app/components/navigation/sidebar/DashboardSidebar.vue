<script lang="ts" setup>
import { motion } from "motion-v"

import { sidebarTabItems } from "~/domain/app/constants/sidebar-tabs"

const open = defineModel<boolean>("open", { default: true })

const tabModel = shallowRef<string | undefined>("menu")
const sidebar = useTemplateRef<HTMLElement>("sidebar")

const query = shallowRef<string | undefined>(undefined)
const el = useTemplateRef<HTMLElement>("el")
const { style } = useScrollShadow(el, {
  size: 30,
})

provide("sidebarState", { open })

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

function toggleCollapse() {
  open.value = !open.value
}

watch(
  () => open.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <USidebar
    v-model:open="open"
    variant="inset"
    side="left"
    collapsible="icon"
    rail
    :ui="{
      root: '[--sidebar-width-icon:4rem] [--sidebar-width:24rem]',
      inner:
        'group/sidebar gap-8 divide-none group-collapsed/sidebar:max-w-(--sidebar-width-icon)!',
      container: '@container px-4 py-1.5 group-collapsed/sidebar:px-3!',
      body: 'relative rounded-6xl p-0!',
      header: 'flex h-fit items-center p-0!',
      footer: 'px-0!',
      rail: 'mask-y-from-80% mask-y-to-100%',
    }">
    <template #header>
      <DashboardSidebarHeader
        @update:sidebar="toggleCollapse()"
        @update:query="query = $event" />
    </template>
    <UButton
      size="lg"
      variant="ghost"
      icon="i-chevron-left"
      @click="toggleCollapse()" />
    <div
      ref="el"
      :style="sidebarTabItems[String(tabModel)]?.overlay ? style : undefined"
      class="flex flex-1 scrollbar-none overflow-y-auto px-0! py-0 **:scrollbar-none">
      <SidebarTheme>
        <component :is="sidebarTabItems[String(tabModel)]?.component" :open />
      </SidebarTheme>
    </div>
    <template #footer>
      <DashboardSidebarFooter :open />
    </template>
  </USidebar>
</template>
