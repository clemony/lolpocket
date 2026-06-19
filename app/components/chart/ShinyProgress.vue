<script lang="ts" setup>
import type { ProgressProps } from "@nuxt/ui"
import { motion } from "motion-v"
import type { ProgressRootProps } from "reka-ui"
import { ProgressRoot } from "reka-ui"

const props = withDefaults(
  defineProps<
    ProgressRootProps & {
      gradient?: number
    }
  >(),
  {
    gradient: 10,
  }
)

const delegated = reactiveOmit(props, "gradient")
</script>

<template>
  <ProgressRoot v-bind="delegated" :model-value="props.modelValue" as-child>
    <div class="gradient relative w-full">
      <!-- TRACK (CLIPS FILL ONLY) -->
      <div
        class="relative z-0 h-3 w-full overflow-hidden rounded-xl border border-neutral/20 bg-linear-to-r from-p4/70 to-p4/80 shadow-xs inset-shadow-xs">
        <!-- GLOW LAYER (NO CLIP) -->
        <div class="pointer-events-none absolute inset-0 z-10">
          <div
            class="bar-outline-glow bar-edge-prism absolute inset-0"
            :data-level="props.gradient" />
        </div>

        <!-- FILL -->
        <motion.div
          class="relative h-full origin-left"
          :style="{ width: `${modelValue}%` }">
          <div
            class="gradient-progress animate-prism absolute inset-0 rounded-[2px] brightness-90 saturate-200"
            :data-level="gradient">
            <!-- SHEEN -->
            <div class="bar-sheen absolute inset-0" />

            <!-- INNER GLOW (still clipped) -->
            <div class="ring-inner-glow absolute inset-0" />
          </div>
        </motion.div>
      </div>
    </div>
  </ProgressRoot>
</template>
