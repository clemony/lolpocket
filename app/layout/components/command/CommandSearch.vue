<script lang="ts" setup>
import { getDeviceKey } from "~/utils/config/handleDevice";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { ControlLeft, ControlRight, K, MetaLeft, MetaRight } = useMagicKeys();

watchEffect(() => {
  if (
    (ControlLeft.value ||
      ControlRight.value ||
      MetaRight.value ||
      MetaLeft.value) &&
    K.value
  ) {
    console.log("Shift + A have been pressed");
  }
});
</script>

<template>
  <button
    v-tippy="'Search'"
    :class="
      cn(
        `
          group
          hover:ringneutral/50
          z-1 mx-1 flex h-8 w-20 cursor-text! flex-nowrap items-center
          self-center rounded-xl border border-b4/60 bg-b1/50 pr-2 pl-2.75
          text-2 text-nowrap inset-shadow-xs transition-colors duration-150
          hover:ring-1
        `,
        props.class,
      )
    "
    class=""
    @click.stop="ui().commandOpen = true"
  >
    <span class="relative -left-0.25 grid size-5 place-items-center">
      <icon
        name="weui:search-filled"
        class="size-4.75 shrink-0 opacity-60 dst"
      />
    </span>

    <span
      class="mt-px grow truncate text-left font-medium tracking-tight text-bc/60"
    >
      <slot />
    </span>

    <span class="px-1 font-medium text-bc/80!">{{ getDeviceKey() }} K</span>
  </button>
</template>
