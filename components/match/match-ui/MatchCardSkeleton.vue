<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  error?: string
}>()
</script>

<template>
  <div class="bg-b2/30 drop-shadow-xs border-b3/40 p-0  h-44 w-220 field grid justify-center **:select-none text-2 shadow-warm-soft overflow-visible">
    <div class="flex gap-7 opacity-60 py-6 w-full items-start overflow-hidden  cursor-pointer group/collapse pl-6 pr-4 ">
      <div class="flex w-38 h-full **:select-none flex-col justify-start gap-1.5">
        <Skeleton class="w-20 h-11 mb-2" />
        <Skeleton class="size-full" />
      </div>
      <div class="flex gap-3 w-full">
        <div class="flex flex-col gap-3 grow ">
          <div class="flex items-start">
            <!-- champ image -->

            <Skeleton class="size-full max-w-64  ml-4  " />
          </div>

          <Skeleton class="min-w-64 w-full h-12 max-w-74 !rounded-lg " />
        </div>
      </div>
      <div class="grid grid-cols-[1fr_1fr]   gap-4  overflow-hidden size-full ">
      </div>
      <div class="h-full  w-8   justify-self-end">
      </div>
    </div>
  </div>
</template>