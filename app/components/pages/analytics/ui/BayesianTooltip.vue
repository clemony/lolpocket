<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tippy :class="cn('dr-20 !cursor-info flex gap-1 transition', props.class)">
    <span
      class="
        !cursor-info underline-offset-2
        hover:underline
      ">
      <slot />
    </span>

    <icon
      name="ph:info"
      class="size-3.5" />

    <template #content>
      <b>WP</b>

      : Weighted Probability
      <br />

      <Separator class="my-0.5 opacity-10" />

      Calculated using Bayesian inference--A
      <br />

      method in statistics to calculate probability
      <br />
      based on previous evidence.
    </template>
  </tippy>
</template>
