<script lang="ts" setup>
  import { DialogDescription as DrawerDescription, type DialogDescriptionProps as DrawerDescriptionProps } from 'radix-vue';
  import { computed, type HtmlHTMLAttributes } from 'vue';

  const props = defineProps<DrawerDescriptionProps & { class?: HtmlHTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });
</script>

<template>
  <DrawerDescription
    v-bind="delegatedProps"
    :class="cn('text-1 text-bc/60', props.class)">
    <slot />
  </DrawerDescription>
</template>
