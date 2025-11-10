<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  error?: string
}>()
</script>

<template>
  <div
    class="
      field grid h-44 w-220 justify-center overflow-visible border-b3/40
      bg-b2/30 p-0 text-2 shadow-warm-soft drop-shadow-xs
      **:select-none
    ">
    <div
      class="
        flex size-full cursor-pointer items-start gap-7 overflow-hidden py-6
        pr-6 pl-6 opacity-60
      ">
      <div
        class="
          flex h-34 w-38 flex-col justify-start gap-1.5
          **:select-none
        ">
        <Skeleton class="mb-2 h-1/2 w-20" />

        <Skeleton class="size-full" />
      </div>

      <div class="flex w-full gap-3 gap-8">
        <div class="flex h-34 flex-col items-start justify-between gap-5">
          <!-- champ image -->

          <Skeleton class="h-1/2 w-64" />

          <Skeleton class="flex h-1/2 w-full gap-8" />
        </div>

        <Skeleton class="h-34 w-1/2 !rounded-lg" />

        <Skeleton class="h-34 w-1/2 !rounded-lg" />
      </div>
    </div>
  </div>
</template>
