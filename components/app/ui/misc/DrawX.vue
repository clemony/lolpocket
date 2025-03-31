<script lang="ts" setup>
import { motion } from 'motion-v'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

const shape = {
  strokeWidth: 10,
  strokeLinecap: 'round',
  fill: 'transparent',
}
</script>

<template>

    <motion.line
      x1="220"
      y1="30"
      x2="360"
      y2="170"
      stroke="#000000"
      :variants="draw"
      :custom="2"
      :style="shape" />
    <motion.line
      x1="220"
      y1="170"
      x2="360"
      y2="30"
      stroke="#000000"
      :variants="draw"
      :custom="2.5"
      :style="shape" />
 
</template>