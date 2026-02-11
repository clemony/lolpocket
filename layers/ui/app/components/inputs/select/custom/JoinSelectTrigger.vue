<script setup lang="ts">
import { SelectTrigger } from 'reka-ui';
</script>

<template>
  <SelectTrigger as-child>
    <UButton
      class="absolute right-0 h-full w-3 overflow-hidden rounded-l-none border-y-0 border-r-0 border-l-p3/80 *:text-pc/60 open:*:text-pc hover:*:text-pc @6xl:w-8"
      variant="ghost">
      <icon
        class="absolute size-4 place-self-center"
        name="up-down" />
    </UButton>
  </SelectTrigger>
</template>
