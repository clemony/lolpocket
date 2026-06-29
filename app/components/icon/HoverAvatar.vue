<script lang="ts" setup>
import { Tooltip, UTooltip } from "#components"
import type { AvatarProps, TooltipProps } from "@nuxt/ui"
import { Primitive } from "reka-ui"

const props = defineProps<{
  avatar?: AvatarProps
  tooltip?: TooltipProps & {
    followCursor?: boolean
  }
  style?: CSSStyleRule
}>()

const delegated = reactiveOmit(props, "style", "tooltip")
</script>

<template>
  <Tooltip as="div" v-bind="props.tooltip">
    <UAvatar
      v-bind="delegated"
      :style
      :ui="{
        ...props.avatar?.ui,
        root: cn(
          'relative duration-300 ease-spring hover:scale-110',
          props.avatar?.ui?.root
        ),
      }" />

    <template #content>
      <slot />
    </template>
  </Tooltip>
</template>
