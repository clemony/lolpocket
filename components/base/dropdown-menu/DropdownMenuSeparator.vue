<script setup lang="ts">
  import { DropdownMenuSeparator, type DropdownMenuSeparatorProps } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<
    DropdownMenuSeparatorProps & {
      class?: HTMLAttributes['class'];
    }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });
</script>

<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="cn('bg-neutral/10 -mx-1 my-1 h-px', props.class)" />
</template>
