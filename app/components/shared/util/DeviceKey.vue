<script setup lang="ts">
import { getDeviceKey } from '~/utils/config/handleDevice'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <span
    :class="cn('opacity-50', className)">{{ getDeviceKey() }}<slot /></span>
</template>