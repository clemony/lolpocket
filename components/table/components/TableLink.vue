<script lang="ts" setup>
const props = defineProps<{
params: any
}>()
</script>

<template>
  <div class="size-full flex items-center">
    <tippy placement="top-start" class="size-fit" >
<NuxtLink :to='`/pocket/${props.params.data.key}`' class="hover:underline underline-offset-2 tracking-tighter text-4 leading-none font-bold">
  {{params.value}}
  </NuxtLink>


    <template #content>
     <icon name="chain"  class="size-4.5 text-nc"/>

    </template>
  </tippy>
  </div>
</template>

<style scoped>

</style>