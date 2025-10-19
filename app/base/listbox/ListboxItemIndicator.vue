<script setup lang="ts">
import { ListboxItemIndicator } from 'reka-ui'
</script>

<template>
  <ListboxItemIndicator class=" absolute right-2 self-center">
    <slot>
      <icon
        name="tick-sm"
        class="size-6" />
    </slot>
  </ListboxItemIndicator>
</template>