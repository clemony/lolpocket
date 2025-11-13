<script lang="ts" setup>
import { runeToPath } from "~~/shared/indexes";

const { id, class: className } = defineProps<{
  class?: HTMLAttributes["class"];
  id?: number | null;
}>();
const loaded = ref(false);
const imgEl = useTemplateRef<HTMLImageElement>("imgEl");

watch(
  () => id,
  () => {
    loaded.value = false;
    nextTick(() => {
      if (imgEl.value?.complete) {
        loaded.value = true;
      }
    });
  },
);
const img = `/img/runes/${runeToPath[id]}/${id}.webp`;
</script>

<template>
  <Label
    variant="base"
    :class="
      cn(
        `
          relative grid aspect-square size-17 h-full place-items-center
          overflow-hidden rounded-full border border-b2 bg-b2/30 p-0
          transition-all duration-300
        `,
        {
          'drop-shadow-sm shadow-sm inset-shadow-sides  shadow-black/20 border border-black/60 inset-shadow-black/60':
            loaded,
        },
        className,
      )
    "
  >
    <slot />
    <img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="img"
      :alt="ix().runeNameById(id)"
      :class="
        cn('size-full rounded-full transition-all duration-300', {
          'scale-108 ': loaded,
        })
      "
      @load="loaded = true"
    />
  </Label>
</template>
