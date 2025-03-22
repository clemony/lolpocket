<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tippy :class="cn('opacity-50 hover:opacity-100 transition-opacity dr-20', props.class)">
    <icon name="ph:info" />

    <template #content>
      <b>WP</b>: Weighted Probability<br />
      <Separator class="opacity-10 my-0.5" />
      Calculated using Bayesian inference--A<br />
      method in statistics to calculate probability<br />
      based on previous evidence.
    </template>
  </tippy>
</template>