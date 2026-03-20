<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"

const {
  variant = "solid",
  color = "neutral",
  ui,
  source
} = defineProps<{
  source?: Index[]
  color?: InputProps["color"]
  ui?: InputProps["ui"]
  variant?: InputProps["variant"]
}>()

const { filters } = storeToRefs(is())

const input = ref<{ inputRef: HTMLInputElement | null } | null>(null)
const innerInput = computed(() => input.value?.inputRef ?? null)
const keybindItems = [
  {
    label: "Sub page search",
    kbds: user().keybinds?.subSearch,
    onSelect: () => {
      innerInput.value?.focus()
    }
  }
]
defineShortcuts(extractShortcuts(keybindItems))
</script>

<template>
  <UInput
    ref="input"
    v-model:model-value="filters.query"
    icon="i-search"
    :variant
    :color
    :ui="{
      root: cn('w-full grow', ui?.root),
      base: cn(
        'h-11 w-full grow rounded-[0.58rem] text-sm focus-within:ring focus-within:ring-pc/80 focus-within:ring-offset-2 focus-within:ring-offset-p0 focus-within:placeholder:opacity-0',
        ui?.base
      ),
      leadingIcon: cn('text-nc/80 **:stroke-[1.8]', ui?.leadingIcon),
      trailing: ui?.trailing
    }"
    placeholder="Search items...">
    <template #trailing>
      <LazyInputClear
        v-if="filters.query"
        variant="outline"
        :color
        class="mr-2"
        @clear-input="filters.query = ''" />
      <UKbd
        v-for="k in user().keybinds?.subSearch"
        v-else
        :key="k"
        square
        :color
        class="opacity-100"
        variant="ghost"
        size="sm"
        :value="k" />
    </template>
  </UInput>
</template>
