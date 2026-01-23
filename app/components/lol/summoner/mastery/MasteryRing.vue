<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number // 0–100
    size?: number // px
    thickness?: number // px
    level?: number // your gradient theme
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
const radius = (dim / 2) - (props.thickness / 2)
const circumference = 2 * Math.PI * radius

const strokeOffset = computed(() =>
  circumference - (props.value / 100) * circumference
)

// unique mask id (important!)
const _uid = crypto.randomUUID()
const level = computed (() => props.level >= 10 ? 10 : props.level)
</script>

<template>
  <div
    :class="cn('mastery-ring bg-b2 relative inline-block -rotate-90 rounded-full', props.class)"
    :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="border-b3 absolute inset-0 scale-100 rounded-full border" />
    <!-- GRADIENT RING (rotates around the arc mask) -->
    <div
      :data-level="level"
      class="mastery-gradient-progress repeat-infinite absolute inset-0 animate-spin overflow-hidden rounded-full ring [animation-duration:2.5s]"
      :style="{
        animationDuration: `${speed}s`,
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }"></div>

    <!-- INNER GLOW -->
    <div
      class="ring-inner-glow pointer-events-none absolute inset-0"
      :style="{
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }"></div>

    <!-- OUTER GLOW -->
    <div
      class="ring-outer-glow pointer-events-none absolute inset-0"
      :style="{
        mask: `url(#arc-mask-${_uid})`,
        WebkitMask: `url(#arc-mask-${_uid})`,
      }"></div>

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
        :cx="dim / 2"
        :cy="dim / 2"
        :r="radius"
        fill="none"
        class="ring-outline"
        :stroke-width="thickness * 0.33" />
    </svg>
  </div>
</template>
