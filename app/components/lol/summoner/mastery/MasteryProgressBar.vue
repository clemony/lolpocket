<script lang="ts" setup>
import { motion } from "motion-v"
import { ProgressRoot } from "reka-ui"

const {
  class: className,
  current,
  mastery,
  progress: p
} = defineProps<{
  mastery: ChampionMastery
  class?: HTMLAttributes["class"]
  current?: number
  progress?: boolean
}>()

const progress = computed(
  () =>
    Math.round(
      (mastery.pointsSinceLevel /
        (mastery.pointsSinceLevel + mastery.pointsUntilLevel)) *
        100 *
        100
    ) / 100
)
const value = computed(() => {
  if (mastery.pointsUntilLevel <= 0) {
    return 100
  } else if (p) {
    return current
  } else {
    return Math.round(
      (mastery.pointsSinceLevel /
        (mastery.pointsSinceLevel + mastery.pointsUntilLevel)) *
        100
    )
  }
})
</script>

<template>
  <ProgressRoot :model-value="value" as-child>
    <div class="gradient relative w-full">
      <!-- TRACK (CLIPS FILL ONLY) -->
      <div
        class="relative z-0 h-3 w-full overflow-hidden rounded-xl border border-neutral/20 bg-linear-to-r from-p4/70 to-p4/80 shadow-xs inset-shadow-xs">
        <!-- GLOW LAYER (NO CLIP) -->
        <div class="pointer-events-none absolute inset-0 z-10">
          <div
            class="bar-outline-glow bar-edge-prism absolute inset-0"
            :data-level="
              (mastery.level ?? 0) >= 10 ? 10 : (mastery.level ?? 0)
            " />
        </div>

        <!-- FILL -->
        <motion.div
          class="relative h-full origin-left"
          :style="{ width: `${value}%` }">
          <div
            class="gradient-progress animate-prism absolute inset-0 rounded-[2px] brightness-90 saturate-200"
            :data-level="
              (mastery.level ?? 0) >= 10 ? 10 : (mastery.level ?? 0)
            ">
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
