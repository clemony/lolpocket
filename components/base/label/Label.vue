<script setup lang="ts">
  import { Label, type LabelProps } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';
  import { Primitive, type PrimitiveProps } from 'radix-vue';
  import { type LabelVariants, labelVariants } from './lindex';

  interface Props extends PrimitiveProps {
    variant?: LabelVariants['variant'];
    size?: LabelVariants['size'];
    button?: LabelVariants['button'];
    class?: HTMLAttributes['class'];
  }

  const props = withDefaults(defineProps<Props>(), {
    as: 'label',
  });
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        labelVariants({
          variant,
          size,
          button,
        }),
        props.class
      )
    ">
    <slot />
  </Primitive>
</template>
