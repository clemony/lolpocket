<script lang="ts" setup>
const { color, class: className, icon, max, tip, value } = defineProps<{
  value: number
  max: number
  tip?: string
  icon: string[]
  class?: HTMLAttributes['class']
  color?: string
}>()

const target = useTemplateRef<HTMLElement>('target')
</script>

<template>
  <Tooltip
    :text="tip"
    arrow
    :class="cn('badge-tooltip-hover relative flex grow basis-1/3 flex-col justify-center gap-1 px-1', className)">
    <div class="progress-label w-full">
      <Icons
        wrapper-class="size-3"
        :name="icon[0]"
        :class="cn('inline size-3.5 opacity-70', icon[1])" />
      <span>
        {{
          value && roundDecimal(value / 1000) > 1
            ? `${roundDecimal(value / 1000)}k`
            : value && value < 1000 ? value
              : 0
        }}
      </span>
    </div>
    <Progress
      class="h-1.25 w-full bg-p3"
      :color
      :model-value="roundDecimalToPercent(value, max)" />
  </Tooltip>
</template>
