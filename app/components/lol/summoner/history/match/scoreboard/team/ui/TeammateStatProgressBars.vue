<script lang="ts" setup>
const { color, icon, max, tip, value } = defineProps<{
  value: number
  max: number
  tip?: string
  icon: string[]
  color?: string
}>()

const target = useTemplateRef<HTMLElement>('target')
</script>

<template>
  <div
    :data-tip="tip"
    class="relative flex grow basis-1/3 flex-col justify-center gap-1 hover:underline">
    <div
      class="progress-label w-full">
      <Icons
        :name="icon[0]"
        :class="cn('inline size-3.5 opacity-70', icon[1])" />
      <span>
        {{ value && roundDecimal(value / 1000) > 1
          ? `${roundDecimal(value / 1000)}k`
          : value && value < 1000
            ? value
            : 0 }}
      </span>
    </div>
    <Progress
      :color
      class="h-1.25 w-full"
      :model-value="roundDecimalToPercent(value, max)">
    </Progress>
  </div>
</template>

<style scoped>
  @reference '@css/tailwind.css';

.progress-label {
  @apply text-1 flex shrink-0  *:shrink-0 leading-4 font-bold  gap-1 items-center;
}
</style>