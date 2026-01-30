<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div
    class="flex size-full flex-col justify-center gap-y-1 font-medium **:h-fit **:leading-none"
  >
    <p>{{ props.params.value.patch }}</p>

    <p>{{ props.params.value.date }}</p>

    <p>{{ props.params.value.time }}</p>
  </div>
</template>
