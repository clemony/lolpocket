<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const {
  variant = "solid",
  color = "neutral",
  ui,
  source,
} = defineProps<{
  source?: Index[]
  color?: InputProps["color"]
  ui?: InputProps["ui"]
  variant?: InputProps["variant"]
}>()

const { filters } = storeToRefs(is())
</script>

<template>
  <UInput
    v-model:model-value="filters.query"
    icon="i-search"
    :variant
    :color
    :ui="{
      root: cn('w-full grow', ui?.root),
      base: cn('w-full grow rounded-lg text-sm', ui?.base),
      leadingIcon: cn('**:stroke-[1.8]', ui?.leadingIcon),
      trailing: ui?.trailing,
    }"
    placeholder="Search items...">
    <template #trailing>
      <LazyInputClear
        v-if="filters.query"
        variant="solid"
        color="p0"
        class="mr-2"
        @clear-input="filters.query = ''" />
      <UKbd
        v-for="k in ['meta', 'shift', 'K']"
        v-else
        :key="k"
        square
        :color
        variant="ghost"
        size="sm"
        :value="k" />
    </template>
  </UInput>
</template>
