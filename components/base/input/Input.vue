<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  import { useVModel } from '@vueuse/core';

  const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
  }>();

  const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
  }>();

  const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
  });
</script>

<template>
  <input
    v-model="modelValue"
    spellcheck="false"
    :class="
      cn(
        'border-b3 text-2 file:text-2 placeholder:text-bc/60 focus-visible:ring-neutral/40 hover:ring-neutral/5 flex h-8 w-full rounded-md border bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:font-medium hover:ring-1 focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    " />
</template>
