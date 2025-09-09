<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tippy :class="cn('flex gap-1 transition dr-20 cursor-info', props.class)">
    <span class="hover:underline underline-offset-2"><slot /></span>

    <icon
      name="ph:info"
      class="size-3.5" />

    <template #content>
      <b>APD</b>

      : Absolute Percentage Diff<br />

      <Separator class="opacity-10 my-0.5" />

      A simple calculation of the number<br />

      difference on a physical line.<br />

      Used to easily see winrate percentage<br />
      change over time.
    </template>
  </tippy>
</template>