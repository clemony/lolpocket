<script lang="ts" setup></script>

<template>
  <div
    class="grid w-full shrink-0 grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center gap-5 px-4"
  >
    <Button
      class="text-bc/40 pointer-events-none"
      wrapper-class="bg-b2!"
      variant="secondary"
      size="c-14"
    />

    <div
      class="dst flex flex-col justify-center gap-2 py-px font-medium opacity-60"
    >
      <Element class="h-3 w-26" variant="secondary" base="btn" />

      <Element class="h-3 w-18" variant="secondary" base="btn" />
    </div>

    <div class="flex grow flex-col items-end justify-center px-3 text-sm">
      <p class="dst items-center font-medium text-nowrap" />

      <p class="dst items-center font-medium text-nowrap" />
    </div>

    <DonutSkeleton class="dst size-14 opacity-50" thickness="4px" label="" />
  </div>
</template>
