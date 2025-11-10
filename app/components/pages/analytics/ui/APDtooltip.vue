<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tippy :class="cn('dr-20 cursor-info flex gap-1 transition', props.class)">
    <span
      class="
        underline-offset-2
        hover:underline
      "><slot /></span>

    <icon
      name="ph:info"
      class="size-3.5" />

    <template #content>
      <b>APD</b>

      : Absolute Percentage Diff
      <br />

      <Separator class="my-0.5 opacity-10" />

      A simple calculation of the number
      <br />

      difference on a physical line.
      <br />

      Used to easily see winrate percentage
      <br />
      change over time.
    </template>
  </tippy>
</template>
