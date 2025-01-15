<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    pocketKey?: string;
    col2Class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <div
    class="relative grid h-[calc(100%-30px)] max-h-[calc(100%-30px)] w-full grid-cols-[150px_auto_300px] gap-14 pr-8 pl-7"
    :key="props.pocketKey">
    <div class="h-fit w-full items-start gap-3">
      <div class="flex h-auto flex-col gap-4 font-medium tracking-tight">
        <LayoutSpacer />
        <slot name="col1" />
      </div>
    </div>

    <div :class="cn('max-h-inherit carousel carousel-vertical h-full w-full overflow-x-hidden overflow-y-scroll', props.col2Class)">
      <slot name="col2" />
    </div>

    <div class="relative h-full max-h-full">
      <LayoutSpacer />

      <slot name="col3" />
    </div>
  </div>
</template>

<style scoped></style>
