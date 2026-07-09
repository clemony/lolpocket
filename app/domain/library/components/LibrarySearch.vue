<script lang="ts" setup>
import type { ButtonProps, InputProps, KbdProps } from "@nuxt/ui"
const {
  variant = "soft",
  color = "neutral",
  autofocus = false,
  ui,
  clearVariant = "outline",
  clearColor = "neutral",
} = defineProps<{
  color?: InputProps["color"]
  ui?: InputClearUi
  autofocus?: boolean
  variant?: InputProps["variant"]
  clearVariant?: ButtonProps["variant"]
  clearColor?: ButtonProps["color"]
}>()
const modelValue = defineModel<string>("modelValue", { default: "" })

const input = ref<{ inputRef: HTMLInputElement | null } | null>(null)
const innerInput = computed(() => input.value?.inputRef ?? null)
const keybindItems = [
  {
    label: "Sub page search",
    kbds: localStore().hotkeys?.subSearch,
    onSelect: () => {
      innerInput.value?.focus()
    },
  },
]
defineShortcuts(extractShortcuts(keybindItems))
</script>

<template>
  <UInput
    ref="input"
    v-model:model-value="modelValue"
    icon="i-search"
    :variant
    :autofocus="autofocus"
    :color
    :ui="{
      root: cn('group/input w-full grow', ui?.root),
      base: cn(
        'w-full grow rounded-[0.58rem] text-sm focus-within:placeholder:opacity-0',
        ui?.base
      ),
      leadingIcon: cn(
        '**:stroke-[1.8]',
        color === 'neutral' ? 'text-nc/80' : '',
        ui?.leadingIcon
      ),
      trailing: ui?.trailing,
    }"
    placeholder="Search items...">
    <template #trailing>
      <LazyInputClear
        v-if="modelValue"
        :variant="clearVariant"
        :color="clearColor"
        :ui="ui?.clear"
        @clear-input="modelValue = ''" />
      <UKbd
        v-for="k in localStore().hotkeys?.subSearch"
        v-else
        :key="k"
        square
        :color="color as KbdProps['color']"
        :class="
          cn(
            'pointer-events-none mx-px text-xs group-focus-within/input:absolute group-focus-within/input:opacity-0',
            color === 'neutral' ? 'opacity-100' : 'opacity-80'
          )
        "
        variant="subtle"
        size="sm"
        :value="k" />
    </template>
  </UInput>
</template>
