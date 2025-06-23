<script lang="ts" setup>

</script>

<template>
  <div
    class=" "
    :class="cn(
      'size-full overflow-hidden relative rounded-lg shadow-sm drop-shadow-sm ',

      //after
      /*       'after:bg-radial  after:from-black/9 after:from-30% after:z-1  after:inset-0 after:to-black/60 after:to-60% after:pointer-events-none after:absolute after:size-full before:inset-shadow-sm before:inset-shadow-black', */

      //before
      'before:-bg-linear-165 before:inset-0 before:from-transparent before:z-1  before:from-40% before:to-black/60 before:to-70% before:pointer-events-none before:absolute before:size-full ')">
    <slot />
  </div>
</template>