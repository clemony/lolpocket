<script lang="ts" setup>
import { matchDB } from 'stores/matchDB'

const emit = defineEmits(['loaded'])
const as = useAccountStore()
</script>

<template>
  <button>
    <slot />
  </button>
</template>