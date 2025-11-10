<script lang="ts" setup></script>

<template>
  <div
    class=""
    :class="
      cn(
        'relative size-full overflow-hidden rounded-lg shadow-sm drop-shadow-sm',

        //after
        /*       'after:bg-radial  after:from-black/9 after:from-30% after:z-1  after:inset-0 after:to-black/60 after:to-60% after:pointer-events-none after:absolute after:size-full before:inset-shadow-sm before:inset-shadow-black', */

        //before
        `
          before:pointer-events-none before:absolute before:inset-0 before:z-1
          before:size-full before:-bg-linear-175 before:from-transparent
          before:from-40% before:to-black/50 before:to-70%
        `,
      )
    ">
    <slot />
  </div>
</template>
