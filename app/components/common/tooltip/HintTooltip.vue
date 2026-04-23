<script lang="ts" setup>
import type { ButtonProps, TooltipProps } from "@nuxt/ui"
import type { TooltipContentProps } from "reka-ui"
type Props = TooltipProps &
  TooltipContentProps & {
    label?: string
    type?: "hint" | "info" | "required"
    button?: ButtonProps
  }

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 8,
  side: "left",
  align: "end",
  arrow: false,
  type: "hint",
  button: () => ({
    size: "xs",
    variant: "ghost",
    icon: "i-ri-question-line"
  })
})

const btnUi = computed(() =>
  mergeUi(
    {
      base: "anchor -translate-y-px max-size-5",
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

const icons = {
  hint: "i-ri-question-line",
  info: "i-ri-information-line",
  required: "i-f7-asterisk-circle"
}

const showArrow = computed(() => !!props.arrow)
const tooltipText = computed(() =>
  props.type === "required" ? "Required" : props.label || props.text
)
const arrowUi = [
  "pointer-events-none absolute z-1 size-3.5 shrink-0 bg-neutral/82 drop-shadow-sm",
  "group-data-[side=left]/tt:top-1/2 group-data-[side=left]/tt:-right-3.5 group-data-[side=left]/tt:-translate-y-1/2 group-data-[side=left]/tt:[clip-path:polygon(0_0,100%_50%,0_100%)]",
  "group-data-[side=right]/tt:top-1/2 group-data-[side=right]/tt:-left-3.5 group-data-[side=right]/tt:-translate-y-1/2 group-data-[side=right]/tt:[clip-path:polygon(100%_0,0_50%,100%_100%)]",
  "group-data-[side=top]/tt:left-1/2 group-data-[side=top]/tt:-bottom-3.5 group-data-[side=top]/tt:-translate-x-1/2 group-data-[side=top]/tt:[clip-path:polygon(0_0,100%_0,50%_100%)]",
  "group-data-[side=bottom]/tt:left-1/2 group-data-[side=bottom]/tt:-top-3.5 group-data-[side=bottom]/tt:-translate-x-1/2 group-data-[side=bottom]/tt:[clip-path:polygon(50%_0,0_100%,100%_100%)]"
]

const open = shallowRef<boolean>(false)
</script>

<template>
  <UTooltip
    v-model:open="open"
    :content="tooltipContent"
    :arrow="false"
    :text="tooltipText"
    :ui="{
      content: 'relative z-999! h-max! max-h-max! w-fit max-w-66 overflow-visible',
      text: 'break-spaces w-fit text-pretty'
    }"
    @click="open = true">
    <slot>
      <UButton v-bind="button" :icon="icons[props.type]" :ui="btnUi" />
    </slot>
    <template #content>
      <span v-if="showArrow" aria-hidden="true" :class="arrowUi" />
      <slot name="tooltip">
        <span class="break-spaces w-fit text-pretty">
          {{ tooltipText }}
        </span>
      </slot>
    </template>
  </UTooltip>
</template>
