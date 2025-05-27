<script lang="ts" setup>
import { LazyMotion, m } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <LazyMotion :features="loadMinMotion" strict>
    <m.div v-bind="$attrs">
      <slot />
    </m.div>
  </LazyMotion>
</template>