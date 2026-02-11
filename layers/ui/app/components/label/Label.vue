<script setup lang="ts">
import type { LabelProps } from "reka-ui"
import { Label } from "reka-ui"

interface Props extends LabelProps {
  class?: HTMLAttributes["class"]
}

const props = defineProps<
  Props & {
    class?: HTMLAttributes["class"]
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'group/label text-md leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class
      )
    ">
    <slot />
  </Label>
</template>
