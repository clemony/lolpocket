<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  variant = "ghost",
  color = "neutral",
  size = "md",
  side = "bottom",
  ui
} = defineProps<
  ButtonProps & {
    side?: Side
  }
>()
</script>

<template>
  <Tooltip :side label="Nexus" :side-offset="16">
    <UButton
      to="/nexus"
      :ui="{
        base: cn('group/logo grid shrink-0 place-items-center p-0', ui?.base),
        label: cn(
          'truncate-none ellipsis-none block overflow-visible leading-none font-black',
          {
            'text-2xl': size === 'md'
          },
          ui?.label
        )
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
