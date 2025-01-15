<script setup lang="ts">
  import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarSeparator
    :class="cn('bg-b2 -mx-1 my-1 h-px', props.class)"
    v-bind="forwardedProps" />
</template>
