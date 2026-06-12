<script lang="ts" setup>
import type { ButtonProps, TooltipProps } from "@nuxt/ui"
import type { TooltipContentProps } from "reka-ui"
type Props = TooltipProps &
  TooltipContentProps & {
    label?: string
    type?: "hint" | "info" | "required"
    button?: ButtonProps
    color?: "base" | "neutral"
  }

const props = withDefaults(defineProps<Props>(), {
  arrow: true,
  type: "hint",
  button: () => ({
    size: "xs",
    variant: "link",
    icon: "i-ri-question-line",
  }),
})

const btnUi = computed(() =>
  mergeUi(
    {
      base: "anchor -translate-y-px max-size-5",
      leadingIcon: "size-3.75 opacity-50 group-hover/btn:opacity-100",
    },
    props.button.ui as Record<string, HTMLAttributes["class"]>
  )
)

const tooltipProps = reactiveOmit(props, "side", "type", "button")

const icons = {
  hint: "i-ri-question-line",
  info: "i-ri-information-line",
  required: "i-lucide:asterisk",
}

const tooltipText = computed(() =>
  props.type === "required" ? "Required" : props.text
)

const side = computed(() =>
  props.side || props.type === "required" ? "left" : "top"
)

const open = shallowRef<boolean>(false)
</script>

<template>
  <UTooltip
    v-bind="tooltipProps"
    v-model:open="open"
    :text="tooltipText"
    :content="{
      side,
    }"
    :ui="{
      ...props?.ui,
      content: cn(
        'relative z-999! h-max! max-h-max! w-fit max-w-66 overflow-visible rounded-r-2xl',
        tooltipProps.ui?.content,
        {
          ' bg-p1! text-pc ring-p3 ring-offset-p0': props.color === 'base',
        }
      ),
      arrow: cn(
        {
          'fill-p1! stroke-p3': props.color === 'base',
          'translate-y-0': ['top', 'bottom'].includes(
            String(props.content?.side)
          ),
        },
        tooltipProps.ui?.arrow
      ),
      text: cn('break-spaces w-fit text-pretty', tooltipProps.ui?.text),
    }"
    @click="open = true">
    <slot>
      <UButton v-bind="button" :icon="icons[props.type]" :ui="btnUi" />
    </slot>
    <template #content>
      <!--    <span v-if="showArrow" aria-hidden="true" :class="arrowUi" /> -->
      <slot name="tooltip">
        <span class="break-spaces w-fit text-pretty">
          {{ tooltipText }}
        </span>
      </slot>
    </template>
  </UTooltip>
</template>
