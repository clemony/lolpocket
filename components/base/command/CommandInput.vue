<script setup lang="ts">
import type { ComboboxInputProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ComboboxInput, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<
  ComboboxInputProps & {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div
    class="flex items-center border-b px-3 border-b-b3"
    cmdk-input-wrapper
  >
    <icon
      name="teenyicons:search-outline"
      class="mr-2 h-4 w-4 shrink-0 opacity-50"
    />
    <ComboboxInput
      :spellcheck="false"
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('placeholder:text-bc/60 flex h-11 w-full rounded-md bg-b1/90 py-3 outline-hidden border-0 disabled:cursor-not-allowed disabled:opacity-50 *:select-all', props.class)"
    />
    <slot />
  </div>
</template>
