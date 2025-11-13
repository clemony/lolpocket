<script lang="ts" setup>
import type { Pocket } from "~~/shared/schema";

const {
  class: className,
  pocket: p,
  size,
} = defineProps<{
  class?: HTMLAttributes["class"];
  pocket: Pocket;
  size: LabelVariants["size"];
}>();

const pocket = computed(() => p);
</script>

<template>
  <Label
    v-if="pocket"
    v-tippy="{
      content: ps().pinned.includes(pocket.key) === true ? 'Unpin' : 'Pin',
      theme: 'neutral',
      placement: 'bottom',
    }"
    variant="ghost"
    base="btn"
    :size
    hover="neutral"
    :class="
      cn(
        `
      group/pin pointer-events-auto size-7! rounded-full
      *:absolute *:mt-px *:size-4.25
    `,
        className,
      )
    "
  >
    <!--     <input
      v-model="ps().pinned"
      type="checkbox"
      class="peer hidden" /> -->

    <icon
      name="pin"
      class="*:stroke-[1.8] group-hover/pin:opacity-0 peer-checked:opacity-0"
    />

    <icon
      name="pin-solid"
      class="opacity-0 group-hover/pin:not-checked:text-bc/50 group-hover/pin:not-checked:opacity-100 peer-checked:opacity-90"
    />

    <icon
      name="iconoir:pin-slash-solid"
      class="opacity-0 peer-checked:text-bc group-hover/pin:peer-checked:opacity-80"
    />
  </Label>
</template>
