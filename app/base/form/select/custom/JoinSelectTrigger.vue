<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'
</script>

<template>
  <SelectTrigger as-child>
    <Button
      variant="ghost"
      class="rounded-l-none w-3  @6xl:w-8 border-l-b3/80 absolute overflow-hidden right-0 border-y-0 border-r-0 h-full *:text-bc/60 open:*:text-bc hover:*:text-bc">
      <icon
        name="select"
        class="size-4 absolute place-self-center" />
    </Button>
  </SelectTrigger>
</template>