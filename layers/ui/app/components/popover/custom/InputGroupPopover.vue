<script setup lang="ts">
const { class: className, modelValue: mv } = defineProps<{
  class?: HTMLAttributes['class']
  modelValue?: string
}>()

const emit = defineEmits(['clearInput'])
const modelValue = computed(() => mv)
</script>

<template>
  <Popover>
    <PopoverTrigger :class="cn('w-full cursor-text', className)">
      <InputGroup class="h-12">
        <InputGroupAddon>
          <icon class="size-4.5 opacity-50" name="search" />
        </InputGroupAddon>
        <InputGroupInput v-model:model-value="modelValue" @focus.prevent />

        <InputGroupClear class="mr-6" @clear-input="emit('clearInput')" />
        <InputGroupAddon align="inline-end">
          <icon class="mr-2 size-4.5 opacity-50" name="filter" />
        </InputGroupAddon>
      </InputGroup>
    </PopoverTrigger>
    <slot />
  </Popover>
</template>
