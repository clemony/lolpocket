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
    <div class="flex h-43 w-full items-center justify-center gap-4">
      <i-lol-check-back-later
        name="fluent:emoji-sad-slight-20-regular"
        class="size-8 dst" />

      <p
        v-if="props.error === 'filter'"
        class="font-medium">
        No matches available with these filters.
        <br />
        Play some or try loading more.
      </p>

      <p
        v-else
        class="font-medium">
        No data found.
        <br />
        Try refreshing the page?
      </p>
    </div>
  </div>
</template>
