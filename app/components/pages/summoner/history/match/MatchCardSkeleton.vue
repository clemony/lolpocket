<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  error?: string
}>()
</script>

<template>
  <div
    class="bg-b2/30 drop-shadow-xs border-b3/40 p-0 h-44 w-220 field grid justify-center **:select-none text-xs shadow-warm-soft overflow-visible">
    <div
      class="flex gap-7 opacity-60 py-6 size-full items-start overflow-hidden cursor-pointer pl-6 pr-6">
      <div class="flex w-38 h-34 **:select-none flex-col justify-start gap-1.5">
        <Skeleton class="w-20 h-1/2 mb-2" />

        <Skeleton class="size-full" />
      </div>

      <div class="flex gap-3 w-full gap-8">
        <div class="flex flex-col gap-5 h-34 justify-between items-start">
          <!-- champ image -->

          <Skeleton class="h-1/2 w-64" />

          <Skeleton class="flex h-1/2 gap-8 w-full" />
        </div>

        <Skeleton class="w-1/2 h-34 !rounded-lg" />

        <Skeleton class="w-1/2 h-34 !rounded-lg" />
      </div>
    </div>
  </div>
</template>
