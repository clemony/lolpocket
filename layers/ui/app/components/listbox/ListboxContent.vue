<script setup lang="ts">
import type { ListboxContentProps } from "reka-ui"
import { ListboxContent, useForwardProps } from "reka-ui"

const props = defineProps<
  ListboxContentProps & {
    class?: HTMLAttributes["class"]
  }
>()

const delegated = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegated)
</script>

<template>
  <ListboxContent
    v-auto-animate
    v-bind="forwarded"
    :autofocus="false"
    :class="cn('w-full gap-1 py-1', props.class)">
    <slot />
  </ListboxContent>
</template>
