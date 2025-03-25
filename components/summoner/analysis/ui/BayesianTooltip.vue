<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tippy :class="cn('flex gap-1 transition dr-20 !cursor-info', props.class)">
    <span class="hover:underline underline-offset-2 !cursor-info"><slot  /></span>
    <icon name="ph:info" class="size-3.5"/>

    <template #content>
      <b>WP</b>: Weighted Probability<br />
      <Separator class="opacity-10 my-0.5" />
      Calculated using Bayesian inference--A<br />
      method in statistics to calculate probability<br />
      based on previous evidence.
    </template>
  </tippy>
</template>