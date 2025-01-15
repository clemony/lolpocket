<script setup lang="ts">
  import { TagsInputItem, type TagsInputItemProps, useForwardProps } from 'radix-vue';

  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TagsInputItem
    v-bind="forwardedProps"
    :class="cn('bg-b2/60 py-2px data-[state=active]:ring-neutral/80 flex h-7 items-center rounded-md px-px data-[state=active]:ring-1', props.class)">
    <slot />
  </TagsInputItem>
</template>
