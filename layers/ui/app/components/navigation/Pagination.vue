<script lang="ts" setup>
import type { PaginationProps } from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"

const props = withDefaults(
  defineProps<
    PaginationProps & {
      class?: HTMLAttributes["class"]
      first?: boolean
      next?: boolean
      last?: boolean
      prev?: boolean
      item?: boolean
    }
  >(),
  {
    size: "md",
    activeColor: "base",
    color: "primary",
    variant: "ghost",
    activeVariant: "outline",
    square: true,

    first: true,
    next: true,
    last: true,
    prev: true,
    item: true
  }
)
const emits = defineEmits(["update:page"])
const model = defineModel<number>("page", { default: 1 })

const ui = {
  base: "aspect-square anchor disabled:opacity-20! **:stroke-[2.4]  rounded-xl!"
}
const hidden = {
  base: "hidden! size-px! absolute pointer-events-none opacity-0"
}

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
      <UButton
        v-bind="picked"
        icon="i-lucide-chevrons-left"
        :ui="
          props.first === false || props.showEdges === false ? hidden : ui
        " />
    </template>

    <template #prev>
      <UButton
        v-bind="picked"
        icon="i-lucide-chevron-left"
        :ui="!props.prev ? hidden : ui" />
    </template>

    <template #item="{ item: it }">
      <UButton
        v-if="it.type === 'page'"
        :active="it.value === model"
        v-bind="picked"
        :ui="
          !props.item || (props.siblingCount === 0 && it.value !== model)
            ? hidden
            : {
              base: cn(
                'data-[selected=true]:inset-shadow-sm data-[selected=true]:inset-shadow-black/5!',
                ui?.base
              )
            }
        "
        :label="it.value.toString()" />
    </template>

    <template #next>
      <UButton
        v-bind="picked"
        icon="i-lucide-chevron-right"
        :ui="!props.next ? hidden : ui" />
    </template>

    <template #last>
      <UButton
        v-bind="picked"
        icon="i-lucide-chevrons-right"
        :ui="props.last === false ? hidden : ui" />
    </template>
  </UPagination>
</template>
