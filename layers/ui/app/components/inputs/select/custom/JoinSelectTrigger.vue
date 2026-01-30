<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'
</script>

<template>
  <SelectTrigger as-child>
    <Button
      class="border-l-b3/80 *:text-bc/60 open:*:text-bc hover:*:text-bc absolute right-0 h-full w-3 overflow-hidden rounded-l-none border-y-0 border-r-0 @6xl:w-8"
      variant="ghost"
    >
      <icon class="absolute size-4 place-self-center" name="up-down" />
    </Button>
  </SelectTrigger>
</template>
