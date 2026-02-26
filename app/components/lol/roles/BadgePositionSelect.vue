<script lang="ts" setup>
import { mapPositions } from "#shared/constants/misc/positions"
import type { ButtonProps } from "@nuxt/ui"
import { SelectTrigger } from "reka-ui"

const {
  side,
  sideOffset,
  variant = "outline",
  align,
  alignOffset,
  class: className,
  modelValue: mv,
  size = "12",
} = defineProps<{
  class?: HTMLAttributes["class"]
  modelValue: string | null
  side?: Side
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const emit = defineEmits(["update:select"])
const currentValue = shallowRef<string>("All")

watch(
  () => mv,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
    if (newVal) currentValue.value = mv ?? "All"
  }
)
onMounted(() => {
  currentValue.value = mv ?? "All"
})
</script>

<template>
  <Select
    v-model:model-value="currentValue"
    @update:model-value="emit('update:select', currentValue)">
    <SelectTrigger
      :class="
        cn(
          `group/s relative w-44 justify-start inset-shadow-xs transition-all duration-200 fx-0 hover:ring hover:ring-pc/50`,
          className
        )
      "
      :position="currentValue">
      <component
        :is="`i-lp-${currentValue}`"
        :class="cn('size-4.5! shrink-0 text-pc! ds-2xs')" />

      <SelectValue placeholder="all" />
      <icon
        class="absolute right-1.5 size-4 opacity-50 group-hover/s:text-pc! group-hover/s:opacity-100"
        name="up-down" />
    </SelectTrigger>
    <LazySelectContent
      class="top-[calc(var(--reka-select-trigger-height)+2px)] w-(--reka-select-trigger-width)!"
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in mapPositions"
          :key="position.label"
          :value="position.label">
          <PositionBadge :position="position.label" active />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
