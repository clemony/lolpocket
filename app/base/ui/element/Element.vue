<script setup lang="ts">
import type { AsTag, PrimitiveProps } from "reka-ui";
import { Primitive } from "reka-ui";

const {
  as = "div",
  base = "none",
  class: className,
} = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes["class"];
    variant?: ElementVariants["variant"];
    size?: ElementVariants["size"];
    hover?: ElementVariants["hover"];
    base?: ElementVariants["base"];
    as?: AsTag | string;
  }
>();
</script>

<template>
  <Primitive
    :as="as"
    v-bind="$attrs"
    :class="cn('', elementVariants({ base, variant, size, hover }), className)"
  >
    <slot />
  </Primitive>
</template>
