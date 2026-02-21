<script lang="ts" setup>
import { UCollapsible, UPopover } from "#components"
import type { ButtonProps } from "@nuxt/ui"
const {
  closed: collapsed,
  label,
  icon,
  variant = "link",
  side = "left",
} = defineProps<{
  closed: boolean
  label: string
  icon: string
  side?: Side
  variant?: ButtonProps["variant"]
}>()

const base = "group w-full justify-between"
</script>

<template>
  <component
    :is="collapsed ? UPopover : UCollapsible"
    :content="{
      side,
      align: 'start',
    }"
    :ui="{
      root: 'w-full',
      content: cn('max-h-90 overflow-scroll px-1.5', {
        'w-54 px-1.5': collapsed,
      }),
    }"
    :default-open="!collapsed">
    <slot>
      <UButton
        :square="collapsed"
        :block="!collapsed"
        :icon
        :size="collapsed ? 'md' : 'lg'"
        :variant="collapsed ? 'ghost' : variant"
        :ui="{
          base,
          label: collapsed ? 'hidden' : '',
        }">
        <template #trailing>
          <PlusMinusExpand v-if="!collapsed" />
        </template>
      </UButton>
    </slot>
    <template #content>
      <slot name="content" />
    </template>
  </component>
</template>
