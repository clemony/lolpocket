<script setup lang="ts">
import { keystoneIndex } from "#shared/indexes";

const {
  id,
  as = "div",
  class: className,
  size = "sq",
} = defineProps<{
  class?: HTMLAttributes["class"];
  id?: number;
  as?: string;
  size?: ElementVariants["size"];
}>();
</script>

<template>
  <Element
    :as
    :class="
      cn(
        'relative shrink-0 overflow-hidden',
        elementVariants({ size }),
        className,
      )
    "
  >
    <img
      :src="`/img/runes/${id}.webp`"
      :alt="ix().runeNameById(id)"
      :class="
        cn('absolute top-0 left-0 size-full self-center object-contain', {
          'scale-110': keystoneIndex.includes(id),
          ' rounded-full inset-ring inset-ring-black/80':
            !keystoneIndex.includes(id),
        })
      "
    />
    <slot />
  </Element>
</template>
