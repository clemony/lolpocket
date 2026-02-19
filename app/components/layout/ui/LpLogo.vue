<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  variant = "ghost",
  color = "neutral",
  size = "md",
} = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
}>()
</script>

<template>
  <Tooltip side="bottom" text="Nexus" :side-offset="16">
    <UButton
      :to="{ name: 'nexus' }"
      :ui="{
        base: cn('group/logo', className),
        label: cn(
          'block font-bold transition-opacity duration-200 group-hover/logo:opacity-100',
          {
            'text-[1.4rem]': size === 'md',
          }
        ),
        leadingIcon:
          'opacity-0 absolute  group-hover/logo:opacity-0 transition-opacity duration-200',
      }"
      :color
      :variant
      :size
      label="LP"
      icon="nexus"
      square
      tabindex="0">
    </UButton>
  </Tooltip>
</template>
