<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  error?: string
}>()
</script>

<template>
  <div class="bg-b2/30 drop-shadow-xs border-b3/40 p-0  h-44 w-220 field grid justify-center **:select-none text-2 shadow-warm-soft overflow-visible">
    <div class="flex h-43  w-full gap-4  justify-center items-center">
      <i-lol-check-back-later
        name="fluent:emoji-sad-slight-20-regular"
        class="size-8 dst" />

      <p
        v-if="props.error == 'filter'"
        class="font-medium">
        No matches available with these filters.<br />
        Play some or try loading more.
      </p>

      <p
        v-else
        class="font-medium">
        No data found.<br />
        Try refreshing the page?
      </p>
    </div>
  </div>
</template>