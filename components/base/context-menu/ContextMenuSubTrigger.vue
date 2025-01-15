<script setup lang="ts">
  import { type HTMLAttributes, computed } from 'vue';
  import { ContextMenuSubTrigger, type ContextMenuSubTriggerProps, useForwardProps } from 'radix-vue';

  const props = defineProps<
    ContextMenuSubTriggerProps & {
      class?: HTMLAttributes['class'];
      inset?: boolean;
    }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-b2/60 focus:text-bc data-[state=open]:bg-b2/60 data-[state=open]:text-bc flex cursor-default items-center gap-3.5 rounded-sm px-2 py-1.5 font-semibold outline-hidden select-none',
        inset && 'pl-8',
        props.class
      )
    ">
    <slot />
    <icon
      name="teenyicons:right-small-outline"
      class="ml-auto h-4 w-4" />
  </ContextMenuSubTrigger>
</template>
