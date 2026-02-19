<script lang="ts" setup>
import { UCollapsible, UPopover } from "#components"
import type { ButtonProps } from "@nuxt/ui"
const {
  closed,
  label,
  icon,
  variant = "ghost",
  side = "left",
} = defineProps<{
  closed: boolean
  label: string
  icon: string
  side?: Side
  variant?: ButtonProps["variant"]
}>()

const base = "group w-full justify-between"

const buttonProps = computed<ButtonProps>(() =>
  closed
    ? {
        icon,
        variant: "ghost",
        ui: {
          base,
          label: "hidden",
        },
      }
    : {
        label,
        variant: "link",
        ui: {
          base,
        },
      }
)
</script>

<template>
  <component
    :is="closed ? UPopover : UCollapsible"
    :content="{
      side,
      align: 'start',
    }"
    :ui="{
      root: 'w-full',
      content: cn('max-h-90 overflow-scroll px-1.5', {
        'w-54 px-1.5': closed,
      }),
    }"
    :default-open="!closed">
    <slot>
      <UButton
        v-bind="buttonProps"
        :size="closed ? 'md' : 'lg'"
        :ui="{ base: closed ? 'size-10 ' : '' }"
        :variant>
        <template #trailing>
          <PlusMinusExpand v-if="!closed" />
        </template>
      </UButton>
    </slot>
    <template #content>
      <slot name="content" />
    </template>
  </component>
</template>
