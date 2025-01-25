<script setup lang="ts">
const props = defineProps<{
  data: effect
}>()

const effect = ref(props.data)
</script>

<template>
  <p>
    <span class="text-4 font-semibold tracking-tight">
      <span v-if="effect.unique">Unique -&nbsp;</span>
      <span v-if="effect.name">{{ effect.name }}: &nbsp</span>
    </span>
    <span
      v-if="effect.description"
      class="whitespace-break-spaces"
    >
      {{ formatEffects(effect.description) }}
    </span>
  </p>
</template>

<style scoped></style>
