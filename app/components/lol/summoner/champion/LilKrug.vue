<script lang="ts" setup></script>

<template>
  <div
    class="
      grid w-full shrink-0 grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center
      gap-5 px-4
    ">
    <Placeholder
      class="
        relative grid size-17 place-items-center overflow-hidden rounded-full
      "></Placeholder>

    <div class="flex flex-col justify-center gap-2 font-medium opacity-60 dst">
      <p>Krug</p>

      <p>0 Games</p>
    </div>

    <div class="flex grow flex-col items-end justify-center px-3 text-2">
      <p class="items-center font-medium text-nowrap dst"></p>

      <p class="items-center font-medium text-nowrap dst"></p>
    </div>

    <DonutSkeleton
      class="
        size-18 dst
        *:opacity-60
      "
      label="0%"></DonutSkeleton>
  </div>
</template>
