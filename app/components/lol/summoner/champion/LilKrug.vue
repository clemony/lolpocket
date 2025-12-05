<script lang="ts" setup></script>

<template>
  <div
    class="
      grid w-full shrink-0 grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center
      gap-5 px-4
    ">
    <Button

      class="pointer-events-none text-bc/40"
      wrapper-class="bg-b2!"
      variant="secondary"
      size="c-14" />

    <div class="flex flex-col justify-center gap-1 py-px font-medium opacity-60 dst">
      <p class="italic">
        No champions
      </p>

      <p class="text-bc/60">
        0 games played
      </p>
    </div>

    <div class="flex grow flex-col items-end justify-center px-3 text-2">
      <p class="items-center font-medium text-nowrap dst"></p>

      <p class="items-center font-medium text-nowrap dst"></p>
    </div>

    <DonutSkeleton
      thickness="4px"
      class="size-14 dst *:opacity-60"
      label="0%"></DonutSkeleton>
  </div>
</template>
