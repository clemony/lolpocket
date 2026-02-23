<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  variant = "ghost",
  color = "neutral",
  size = "md",
  side = "bottom",
} = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
  side?: Side
}>()
</script>

<template>
  <Tooltip :side label="Nexus" :side-offset="16">
    <UButton
      to="/nexus"
      :ui="{
        base: cn('group/logo', className),
        label: cn(
          'truncate-none ellipsis-none block overflow-visible font-bold',
          {
            'text-[1.4rem]': size === 'md',
          }
        ),
      }"
      :color
      :variant
      :size
      label="LP"
      square
      tabindex="0">
    </UButton>
  </Tooltip>
</template>
