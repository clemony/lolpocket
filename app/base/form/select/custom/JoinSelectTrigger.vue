<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'
</script>

<template>
  <SelectTrigger as-child>
    <Button
      variant="ghost"
      class="
        absolute right-0 h-full w-3 overflow-hidden rounded-l-none border-y-0
        border-r-0 border-l-b3/80
        *:text-bc/60
        open:*:text-bc
        hover:*:text-bc
        @6xl:w-8
      ">
      <icon
        name="select"
        class="absolute size-4 place-self-center" />
    </Button>
  </SelectTrigger>
</template>