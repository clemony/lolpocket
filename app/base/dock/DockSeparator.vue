<script setup lang="ts">
import { ORIENTATION_INJECTION_KEY } from './injectionKeys'

const orientation = inject(ORIENTATION_INJECTION_KEY, 'vertical')
</script>

<template>
  <div
    :class="
      cn('relative block bg-b3', orientation === 'vertical' ? 'w-4/5 h-0.5' : 'h-4/5 w-0.5')
    "></div>
</template>
