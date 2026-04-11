<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"
import type { AcceptableValue, ListboxItemProps } from "reka-ui"
import { ListboxItem, useForwardPropsEmits } from "reka-ui"

const props = withDefaults(
  defineProps<
    ListboxItemProps & {
      class?: HTMLAttributes["class"]
      value: AcceptableValue
    }
  >(),
  {}
)

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <ListboxItem v-bind="forwardedProps" tabindex="-1" :autofocus="false">
    <slot v-bind="forwardedProps" />
  </ListboxItem>
</template>
