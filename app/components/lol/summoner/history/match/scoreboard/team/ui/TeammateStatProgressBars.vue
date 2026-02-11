<script lang="ts" setup>
import type { BarStat } from "../types"

const { stat, class: className } = defineProps<{
  stat: BarStat
  class?: HTMLAttributes["class"]
}>()

const target = useTemplateRef<HTMLElement>("target")
</script>

<template>
  <Tooltip
    :text="stat.tip"
    arrow
    :class="
      cn(
        'badge-tooltip-hover relative flex grow basis-1/3 flex-col justify-center gap-1 px-1',
        className
      )
    ">
    <div class="progress-label w-full">
      <Icon
        :name="stat.icon?.name ?? ''"
        :class="cn('inline size-3.5 opacity-70', stat.icon?.class)" />
      <span>
        {{
          stat?.value && roundDecimal(stat?.value / 1000) > 1 ?
            `${roundDecimal(stat?.value / 1000)}k`
          : stat?.value && stat?.value < 1000 ? stat?.value
          : 0
        }}
      </span>
    </div>
    <Progress
      class="h-1.25 w-full bg-p3"
      :color="stat?.color"
      :model-value="roundDecimalToPercent(stat?.value, stat?.max)" />
  </Tooltip>
</template>
