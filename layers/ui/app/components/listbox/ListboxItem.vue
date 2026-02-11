<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"
import type { ListboxItemProps } from "reka-ui"
import { ListboxItem, useForwardPropsEmits } from "reka-ui"

interface Props extends ListboxItemProps {
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {})

const delegatedProps = reactiveOmit(props)

const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <ListboxItem
    v-bind="forwardedProps"
    class="h-fit w-full outline-0! outline-offset-0!"
    :autofocus="false">
    <slot />
  </ListboxItem>
</template>
