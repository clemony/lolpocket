<script setup lang="ts">
const { class: className, modelValue: mv } = defineProps<{
  class?: HTMLAttributes["class"]
  modelValue?: string
}>()

const emit = defineEmits(["clearInput"])
const modelValue = computed(() => mv)
</script>

<template>
  <UPopover>
    <UButton :class="cn('w-full cursor-text', className)">
      <UInput>
        <InputClear class="mr-6" @clear-input="emit('clearInput')" />
        <UButton size="2xs" icon="i-filter" />
      </UInput>
    </UButton>
    <slot />
  </UPopover>
</template>
