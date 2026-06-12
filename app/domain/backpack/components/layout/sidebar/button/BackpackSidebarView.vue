<script lang="ts" setup>
import type { TabsProps } from "@nuxt/ui"

const props = defineProps<TabsProps>()
const tabList = computed(() => [
  {
    label: "Backpack",
    value: "backpack",
    slot: "backpack",
    icon: "i-backpack"
  },
  {
    label: "Pocket",
    value: "pocket",
    slot: "pocket"
  }
])

const currentTab = shallowRef<string>("backpack")

const ui = computed(() =>
  mergeUi(
    {
      root: "h-full",
      leadingIcon: "hidden",
      list: "h-11",
      trigger: "h-11",
      label: "group-active/trigger:font-semibold",
      indicator: "h-10"
    },
    props.ui as UiProps
  )
)
</script>

<template>
  <UTabs v-model:model-value="currentTab" :items="tabList" :ui />
</template>
