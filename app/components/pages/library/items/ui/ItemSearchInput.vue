<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const {
  variant = "solid",
  color = "neutral",
  class: className,
} = defineProps<{
  source?: Index[]
  color?: InputProps["color"]
  class?: HTMLAttributes["class"]
  variant?: InputProps["variant"]
}>()

const { filters } = storeToRefs(is())
</script>

<template>
  <UInput
    v-model:model-value="filters.query"
    icon="i-search"
    floating
    :variant
    :color
    :ui="{
      root: 'w-full  grow',
      base: cn('w-full grow rounded-xl text-sm', className),
      leadingIcon: '**:stroke-[1.8]',
      trailing: '',
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
        color="neutral"
        variant="ghost"
        size="sm"
        :value="k" />
    </template>
  </UInput>
</template>
