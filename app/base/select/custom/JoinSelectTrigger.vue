<script setup lang="ts">
import { SelectTrigger } from 'reka-ui'
</script>

<template>
  <Separator
    orientation="vertical"
    class="bg-b3/40" />
  <SelectTrigger as-child>
    <Button
      variant="ghost"
      class="rounded-l-none border-0 h-full *:text-bc/60 open:*:text-bc hover:*:text-bc">
      <icon
        name="select"
        class="size-4" />
    </Button>
  </SelectTrigger>
</template>