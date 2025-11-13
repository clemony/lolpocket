import { SliderRange, SliderRoot, SliderThumb, SliderTrack, TooltipContent,
TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
import { ref } from 'vue'
<script setup lang="ts">
const sliderValue = ref([50]);
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <SliderRoot
      v-model="sliderValue"
      class="relative flex h-5 w-[200px] touch-none items-center select-none"
      :max="100"
      :step="1"
    >
      <SliderTrack class="bg-blackA10 relative h-[3px] grow rounded-full">
        <SliderRange class="absolute h-full rounded-full bg-white" />
      </SliderTrack>

      <TooltipRoot disable-closing-trigger>
        <TooltipTrigger as-child>
          <SliderThumb
            class="shadow-blackA7 block h-5 w-5 rounded-[10px] bg-white shadow-[0_2px_10px] hover:bg-violet3 focus:shadow-blackA8 focus:shadow-[0_0_0_5px] focus:outline-none"
            aria-label="Volume"
          />
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            class="bg-card text-foreground border-muted rounded border px-2 py-1 text-xs font-semibold"
            :side-offset="6"
          >
            {{ sliderValue[0] }}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </SliderRoot>
  </TooltipProvider>
</template>
