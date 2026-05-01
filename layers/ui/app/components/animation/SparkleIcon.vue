<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <svg
    class="twinkle"
    viewBox="0 0 32 32"
    aria-hidden="true"
    :class="cn('size-4', className)">
    <g class="sparkle-main">
      <path
        d="M9.33333333,16 C15.5555556,16.8888889 19.1111111,20.4444444 20,26.6666667 C20.8888889,20.4444444 24.4444444,16.8888889 30.6666667,16 C24.4444444,15.1111111 20.8888889,11.5555556 20,5.33333333 C19.1111111,11.5555556 15.5555556,15.1111111 9.33333333,16" />
    </g>

    <g class="sparkle-small sparkle-small-top">
      <path d="M5.33333333,2.66666667 L5.33333333,10.6666667" />
      <path d="M1.33333333,6.66666667 L9.33333333,6.66666667" />
    </g>

    <g class="sparkle-small sparkle-small-bottom">
      <path d="M5.33333333,21.3333333 L5.33333333,29.3333333" />
      <path d="M1.33333333,25.3333333 L9.33333333,25.3333333" />
    </g>
  </svg>
</template>

<style lang="css" scoped>
.twinkle {
  overflow: visible;
  color: currentColor;
}

.twinkle path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.66666667;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sparkle-main,
.sparkle-small {
  transform-box: fill-box;
  transform-origin: center;
}

.sparkle-main {
  animation: twinkle-main 1.8s ease-in-out infinite;
}

.sparkle-small-top {
  animation: twinkle-small 1.8s ease-in-out infinite;
}

.sparkle-small-bottom {
  animation: twinkle-small 1.8s ease-in-out 0.45s infinite;
}

@keyframes twinkle-main {
  0%,
  100% {
    opacity: 0.72;
    transform: scale(0.92) rotate(0deg);
  }

  42% {
    opacity: 1;
    transform: scale(1.08) rotate(2deg);
  }

  64% {
    opacity: 0.9;
    transform: scale(0.98) rotate(0deg);
  }
}

@keyframes twinkle-small {
  0%,
  24%,
  100% {
    opacity: 0.25;
    transform: scale(0.72);
  }

  42% {
    opacity: 1;
    transform: scale(1.12);
  }

  58% {
    opacity: 0.55;
    transform: scale(0.9);
  }
}
</style>
