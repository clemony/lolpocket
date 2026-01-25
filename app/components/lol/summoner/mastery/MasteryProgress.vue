<script lang="ts" setup>
import { motion } from 'motion-v'
import { ProgressRoot } from 'reka-ui'

const { class: className, current, mastery, progress: p } = defineProps<{
  mastery: ChampionMastery
  class?: HTMLAttributes['class']
  current?: number
  progress?: boolean
}>()

const progress = computed(
  () => Math.round((mastery.pointsSinceLevel / (mastery.pointsSinceLevel + mastery.pointsUntilLevel)) * 100 * 100) / 100,
)
const value = computed(() => {
  if (mastery.pointsUntilLevel <= 0) {
    return 100
  }
  else if (p) {
    return current
  }
  else {
    return Math.round(mastery.pointsSinceLevel / (mastery.pointsSinceLevel + mastery.pointsUntilLevel) * 100)
  }
})
</script>

<template>
  <tippy
    placement="bottom"
    data-icon="lp:mastery"
    :offset="[0, 14]"
    :class="cn('', { 'pointer-events-none': !mastery }, className)"
    theme="neutral"
  >
    <ProgressRoot
      :model-value="value"
      as-child
    >
      <div class="relative w-full">
        <!-- TRACK (CLIPS FILL ONLY) -->
        <div
          class="
        relative z-0 h-3 w-full overflow-hidden
        rounded-xl border border-neutral/20
        bg-linear-to-r from-b3/70 to-b3/80
        shadow-xs inset-shadow-xs
      "
        >
          <!-- GLOW LAYER (NO CLIP) -->
          <div
            class="pointer-events-none absolute inset-0 z-10"
          >
            <div
              :data-level="mastery.level >= 10 ? 10 : mastery.level"
              class="mastery-bar-outline-glow mastery-bar-edge-prism absolute inset-0"
            />
          </div>

          <!-- FILL -->
          <motion.div
            :style="{ width: `${value}%` }"
            class="relative h-full origin-left"
          >
            <div
              :data-level="mastery.level >= 10 ? 10 : mastery.level"
              class="mastery-gradient-progress animate-prism absolute inset-0 rounded-[2px] after:absolute after:right-0 after:z-3 after:size-full after:rounded-r-[2px] after:border after:border-b4 after:inset-shadow-sm"
            >
              <!-- SHEEN -->
              <div class="mastery-bar-sheen absolute inset-0" />

              <!-- INNER GLOW (still clipped) -->
              <div class="ring-inner-glow absolute inset-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </ProgressRoot>

    <template
      v-if="!p"
      #content
    >
      <div class="w-68 max-w-68!">
        <div class="flex items-center justify-between py-1">
          <span class="flex items-center gap-2">
            <Icon
              name="lp:mastery"
              class="size-3.5"
            />
            Lv. progress:</span>
          <span>      {{ mastery?.pointsSinceLevel }}/ {{ mastery.pointsSinceLevel + mastery.pointsUntilLevel }} points</span>
        </div>

        <p class="inline py-1 text-pretty italic opacity-80">
          *other milestones may be required <br>
          &nbsp;for progression
        </p>
      </div>
    </template>
  </tippy>
</template>