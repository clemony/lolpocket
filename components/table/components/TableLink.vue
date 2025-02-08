<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <div class="size-full flex items-center">

      <NuxtLink :to="`/pocket/${props.params.data.key}`" class="hover:underline underline-offset-2 tracking-tighter text-4 leading-none font-bold">
        {{ params.value }}
      </NuxtLink>

   

  </div>
</template>

<style scoped>

</style>