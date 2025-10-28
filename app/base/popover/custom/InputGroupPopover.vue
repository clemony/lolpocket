<script setup lang="ts">
const { class: className, modelValue: mv } = defineProps<{
  class?: HTMLAttributes['class']
  modelValue?: string
}>()

const emit = defineEmits(['clear:input'])
const modelValue = computed (() => mv)
</script>

<template>
  <Popover>
    <PopoverTrigger :class="cn('w-full  cursor-text', className)">
      <InputGroup class="h-12">
        <InputGroupAddon>
          <icon
            name="search"
            class="size-4.5 opacity-50" />
        </InputGroupAddon>
        <InputGroupInput
          v-model:model-value="modelValue"
          @focus.prevent />

        <InputGroupClear
          class="mr-6"
          @clear:input="emit('clear:input')" />
        <InputGroupAddon align="inline-end">
          <icon
            name="filter"
            class="size-4.5 mr-2 opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </PopoverTrigger>
    <slot />
  </Popover>
</template>