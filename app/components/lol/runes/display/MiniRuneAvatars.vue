<script setup lang="ts">
import type { RuneSet } from "~~/shared/schema";

const { class: className, set } = defineProps<{
  class?: HTMLAttributes["class"];
  set: RuneSet;
}>();
</script>

<template>
  <div
    :class="
      cn(
        `
      avatar-group translate-x-px items-center justify-end -space-x-2.5
    `,
        className,
      )
    "
  >
    <div class="avatar size-8 border-3! group-open/trig:border-b2">
      <Keystone :id="set.keystone" class="-mt-px -ml-px size-7" />
    </div>
    <div
      class="avatar relative grid size-7 place-items-center! border-1! border-b4/60 bg-b1 group-open/trig:border-b2"
    >
      <img
        :alt="set.secondary.path"
        :src="`/img/paths/${set.secondary.path}.webp`"
        class="absolute size-4.5 shrink-0"
      />
    </div>
  </div>
</template>
