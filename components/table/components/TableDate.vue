<script setup lang="ts">
const props = defineProps<{
  params: any
}>()
  
</script>

<template>
  <div class="flex flex-col justify-center w-full text-right **:h-fit **:leading-none h-full gap-y-1 font-medium">
    <p>{{ props.params.value.patch }}</p>
    <p>{{ props.params.value.date }}</p>
    <p>{{ props.params.value.time }}</p>
  </div>
</template>