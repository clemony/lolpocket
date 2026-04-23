<script lang="ts" setup>
import type { ButtonProps, TooltipProps } from "@nuxt/ui"
import type { TooltipContentProps } from "reka-ui"
type Props = TooltipProps &
  TooltipContentProps & {
    label: string
    button?: ButtonProps
  }

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 8,
  side: "left",
  align: "end",
  arrow: false,
  button: () => ({ size: "xs", variant: "ghost", icon: "i-ri-question-line" })
})

const btnUi = computed(() =>
  mergeUi(
    {
      base: "anchor -translate-y-px",
      leadingIcon: "size-3.75 opacity-30 group-hover/btn:opacity-100"
    },
    props.button.ui as Record<string, HTMLAttributes["class"]>
  )
)

const tooltipContent = reactivePick(
  props,
  "side",
  "sideOffset",
  "align",
  "alignOffset"
)
const tooltip = computed(() =>
  props.arrow
    ? {
        ...(typeof props.arrow === "object" ? props.arrow : {}),
        rounded: false,
        width: 12,
        height: 12
      }
    : false
)

const open = shallowRef<boolean>(false)
</script>

<template>
  <UTooltip
    v-bind="tooltip"
    v-model:open="open"
    :content="tooltipContent"
    :text="label || props.text"
    :ui="{
      content: 'z-999! h-max! max-h-max! w-fit max-w-66',
      text: 'break-spaces w-fit text-pretty',
      arrow:
        'overflow-hidden rounded-none bg-current text-neutral/82 [clip-path:polygon(0_0,100%_50%,0_100%)] [&>path]:hidden'
    }"
    @click="open = true">
    <slot>
      <UButton v-bind="button" :ui="btnUi" />
    </slot>
    <template #content>
      <slot name="tooltip" />
    </template>
  </UTooltip>
</template>
