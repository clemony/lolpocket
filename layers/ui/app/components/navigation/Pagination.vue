<script lang="ts" setup>
import type { PaginationProps } from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"

const props = withDefaults(
  defineProps<
    PaginationProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    size: "sm",
    activeColor: "neutral",
    color: "base",
    variant: "outline",
    activeVariant: "solid",
    square: true
  }
)
const emits = defineEmits(["update:page"])
const model = defineModel<number>("page", { default: 1 })

const picked = reactivePick(
  props,
  "size",
  "activeColor",
  "color",
  "variant",
  "activeVariant"
)

const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <UPagination v-bind="forwarded">
    <template #first>
      <UButton v-bind="picked" icon="i-lucide-chevrons-left" />
    </template>

    <template #prev>
      <UButton v-bind="picked" icon="i-lucide-chevron-left" />
    </template>

    <template #item="{ page }">
      <UButton v-bind="picked" :label="page.toString()" />
    </template>

    <template #next>
      <UButton v-bind="picked" icon="i-lucide-chevron-right" />
    </template>

    <template #last>
      <UButton v-bind="picked" icon="i-lucide-chevrons-right" />
    </template>
  </UPagination>
</template>
