<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { DropdownMenuSubTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn('text-2 focus:bg-b2/60 data-[state=open]:bg-b2/60 flex cursor-default items-center rounded-sm px-2 py-1.5 outline-hidden select-none', props.class)"
  >
    <slot />
    <icon
      name="teenyicons:right-small-outline"
      class="ml-auto h-4 w-4"
    />
  </DropdownMenuSubTrigger>
</template>
