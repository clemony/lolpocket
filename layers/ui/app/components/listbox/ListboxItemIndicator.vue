<script setup lang="ts">
import { ListboxItemIndicator } from 'reka-ui'
</script>

<template>
  <ListboxItemIndicator class="absolute right-2 self-center">
    <slot>
      <icon
        class="size-6"
        name="tick-sm" />
    </slot>
  </ListboxItemIndicator>
</template>
