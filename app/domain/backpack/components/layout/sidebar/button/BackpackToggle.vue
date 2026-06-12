<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "ghost",
  color: "neutral",
  size: "md"
})

const { sidebarCollapsed, toggleSidebar } = useBackpack()

const ui = computed<ButtonProps["ui"]>(() =>
  mergeUi(
    {
      base: cn("anchor", {
        "": sidebarCollapsed.value
      }),
      leadingIcon: "size-4.5"
    },
    props?.ui as UiProps
  )
)
</script>

<template>
  <UButton
    v-bind="props"
    :ui
    :icon="
      sidebarCollapsed
        ? 'i-icon-park-outline-left-expand'
        : 'i-icon-park-outline-left-bar'
    "
    @click="toggleSidebar()" />
</template>
