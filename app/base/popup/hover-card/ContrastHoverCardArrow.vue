<script lang="ts" setup>
import { HoverCardArrow } from "reka-ui";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <HoverCardArrow as-child :height="8" :width="8">
    <div class="relative -mb-6 size-7">
      <icon
        name="fa:caret-down"
        :class="
          cn(
            `
              textneutral/77 mask-clip-bottom absolute bottom-3 size-7!
              stroke-accent stroke-[0.5] drop-shadow-xs
            `,
            props.class,
          )
        "
      />
    </div>
  </HoverCardArrow>
</template>
