<script lang="ts" setup>
import type { AvatarProps, TooltipProps } from "@nuxt/ui"
import { Primitive } from "reka-ui"

const props = defineProps<
  AvatarProps & {
    tooltip?: TooltipProps
  }
>()

const delegated = reactiveOmit(props, "class", "tooltip", "as")
</script>

<template>
  <Primitive :as="props.as" :class="cn('relative', props?.class)">
    <UTooltip v-bind="props.tooltip">
      <UAvatar
        v-bind="delegated"
        :style
        :ui="{
          ...props.ui,
          root: cn('hover-3d', props.ui?.root),
        }" />
    </UTooltip>
    <div v-for="i in 8" :key="i" />
    <slot />
  </Primitive>
</template>
