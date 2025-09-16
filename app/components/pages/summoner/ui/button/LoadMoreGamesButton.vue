<script lang="ts" setup>
const emit = defineEmits(['loaded'])
const as = useAccountStore()
</script>

<template>
  <button>
    <slot />
  </button>
</template>
