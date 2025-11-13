<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "reka-ui";

const open = ref(false);
const anchor = ref({
  x: 0,
  y: 0,
});

const position = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      bottom: anchor.value.y,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      ...anchor.value,
    }) as DOMRect,
}));
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      class="border-muted-foreground/30 flex h-32 w-48 items-center justify-center rounded-lg border border-dashed text-sm font-medium dark:text-foreground"
      @pointerenter="open = true"
      @pointerleave="open = false"
      @pointermove="
        (ev) => {
          anchor.x = ev.clientX;
          anchor.y = ev.clientY;
        }
      "
    >
      Container
    </div>
    <TooltipRoot :open="open">
      <TooltipTrigger :reference="position" />
      <TooltipPortal>
        <TooltipContent
          side="top"
          :side-offset="12"
          class="bg-card border-muted-foreground/30 rounded-md border px-4 py-2 text-sm"
          update-position-strategy="always"
        >
          Following

          <TooltipArrow
            class="fill-card stroke-muted-foreground/30 -translate-y-[1px]"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
