<script lang="ts" setup>
const props = defineProps<{
title: string
}>()
const isOpen = ref(false)
</script>

<template>
  <div class="size-full">
    <MenubarSpacer />
    <div class="h-[6.5vh] px-18 w-full pt-4 flex items-center">
      <h1 class="tracking-tight">{{props.title}}</h1>
    </div>
    <div class=" grid grid-cols-[50px_auto] size-full transition-all duration-400" :class="{'grid-cols-[300px_auto]': isOpen}">
     <TableBar v-model:modelValue="isOpen" @update:model-value="(e) => isOpen = e"/>
    <slot />
    </div>
  </div>
</template>

<style scoped>

</style>