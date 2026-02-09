<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number // 0–100
    size?: number // px
    thickness?: number // px
    mastery?: number // your gradient theme
    speed?: number // rotation duration
    particles?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    particles: true,
    size: 90,
    speed: 14,
    thickness: 10,
  }
)

const dim = props.size
const radius = dim / 2 - props.thickness / 2
const circumference = 2 * Math.PI * radius

const strokeOffset = computed(
  () => circumference - (props.value / 100) * circumference
)

// unique mask id (important!)
const _uid = crypto.randomUUID()
const mastery = computed(() => (props.mastery ?? 0) >= 10 ? 10 : (props.mastery ?? 0))
</script>

<template>
  <div
    :class="
      cn(
        'mastery-ring mastery-gradient relative inline-block -rotate-90 rounded-full bg-p2',
        props.class,
      )
    "
    :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="absolute inset-0 scale-100 rounded-full border border-p3" />
    <!-- GRADIENT RING (rotates around the arc mask) -->
    <div
      class="mastery-gradient-progress repeat-infinite absolute inset-0 animate-spin overflow-hidden rounded-full ring [animation-duration:2.5s]"
      :data-mastery="mastery"
      :style="{
        animationDuration: `${speed}s`,
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }" />

    <!-- INNER GLOW -->
    <div
      class="ring-inner-glow pointer-events-none absolute inset-0"
      :style="{
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }" />

    <!-- OUTER GLOW -->
    <div
      class="ring-outer-glow pointer-events-none absolute inset-0"
      :style="{
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }" />

    <!-- SVG MASK + OUTLINE -->
    <svg
      class="absolute inset-0"
      :width="size"
      :height="size"
      :viewBox="`0 0 ${dim} ${dim}`">
      <defs>
        <mask :id="`arc-mask-${_uid}`">
          <circle
            :cx="dim / 2"
            :cy="dim / 2"
            :r="radius"
            fill="none"
            stroke="white"
            :stroke-width="thickness"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeOffset" />
        </mask>
      </defs>

      <!-- OUTLINE RIM -->
      <circle
        class="ring-outline"
        :cx="dim / 2"
        :cy="dim / 2"
        :r="radius"
        fill="none"
        :stroke-width="thickness * 0.33" />
    </svg>
  </div>
</template>

<style scoped>
@import '#layers/ui/app/assets/css/components/mastery-progress.css';
</style>
