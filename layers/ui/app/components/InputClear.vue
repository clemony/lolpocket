<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size = "3xs",
  variant = "ghost",
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
}>()
const emit = defineEmits(["clearInput"])
</script>

<template>
  <div v-auto-animate class="grid size-5 place-items-center">
    <UButton
      :size
      :variant
      icon="i-x"
      :ui="{
        leadingIcon: 'opacity-50',
        base: cn(
          'pointer-events-auto size-5! peer-has-[&_input]:opacity-0',
          className
        ),
      }"
      square
      @click.stop="emit('clearInput')" />
  </div>
</template>
