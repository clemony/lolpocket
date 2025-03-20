<script lang="ts" setup>

</script>

<template>
  <tippy :offset="[2, 2]" class="underline underline-offset-2 cursor-help">
    APD
    <template #content>
      <b>APD</b>: Absolute Percentage Diff<br />
      <Separator class="opacity-10 my-0.5" />
      A simple calculation of the number<br />
      difference on a physical line.<br />
      Used to easily see winrate percentage<br />
      change over time.
    </template>
  </tippy>
</template>