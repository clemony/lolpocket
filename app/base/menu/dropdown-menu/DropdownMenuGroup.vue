<script setup lang="ts">
import type { DropdownMenuGroupProps } from 'reka-ui'
import { DropdownMenuGroup } from 'reka-ui'

const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
  <DropdownMenuGroup
    class="px-1"
    v-bind="props">
    <slot />
  </DropdownMenuGroup>
</template>
