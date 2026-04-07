<script lang="ts" setup></script>

<template>
  <div
    class="grid w-full shrink-0 grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center gap-5 px-4">
    <UButton
      class="pointer-events-none rounded-full text-pc/40"
      wrapper-class="bg-p2!"
      color="secondary"
      size="xl" />

    <div
      class="flex flex-col justify-center gap-2 py-px font-medium opacity-60 drop-shadow-2xs">
      <UButton as="span" :ui="{ base: 'h-3 w-26' }" color="secondary" />

      <UButton as="span" :ui="{ base: 'h-3 w-18' }" color="secondary" />
    </div>

    <div class="flex grow flex-col items-end justify-center px-3 text-sm">
      <UButton
        as="span"
        :ui="{ base: 'items-center font-medium text-nowrap drop-shadow-2xs' }"
        color="secondary" />

      <UButton
        as="span"
        :ui="{ base: 'items-center font-medium text-nowrap drop-shadow-2xs' }"
        color="secondary" />
    </div>

    <Icon name="i-lucide-circle" class="size-14 opacity-50 drop-shadow-2xs" />
  </div>
</template>
