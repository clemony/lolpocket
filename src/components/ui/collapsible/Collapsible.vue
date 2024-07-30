<script setup lang="ts">
import { ref, watch } from 'vue';
import { CollapsibleRoot, useForwardPropsEmits } from 'radix-vue';
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'radix-vue';

const props = defineProps<CollapsibleRootProps>();
const emits = defineEmits<CollapsibleRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const isOpen = ref(false);

// Watch for changes in the open state from props
watch(() => props.open, (newValue) => {
  isOpen.value = newValue;
});

const updateOpenState = (value: boolean) => {
  isOpen.value = value;
  emits('update:open', value); // Emit the updated state
};
</script>

<template>
  <CollapsibleRoot v-bind="forwarded" :open="isOpen" @change="updateOpenState">
    <slot :open="isOpen" />
  </CollapsibleRoot>
</template>
