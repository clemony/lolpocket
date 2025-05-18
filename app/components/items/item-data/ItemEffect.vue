<script setup lang="ts">
const {data, description, type} = defineProps<{
  data: Effect
  description: string
  type: string
}>()


const effect = computedAsync (() => {
  if (!description)
    return null
let a = replaceFileReferencesWithImages(description)
a = formatDataTags(a)
 return replaceMoreFileReferencesWithImages(a)
})


</script>

<template>
  <p class="w-full  flex flex-wrap text-wrap leading-normal items-center [&_img]:size-4 gap-x-1 [&_img]:align-bottom [&_img]:self-end">
    <div class="py-1  *:!text-precision/90">
      <span v-if="data.unique" class=" italic   tracking-tight">Unique {{type}} -&nbsp;</span>
      <span v-if="data.name" class="italic tracking-tight">{{ data.name }}: &nbsp;</span>
</div>

  
      <span v-if="effect"
        class=""
        v-html="effect" />

  </p>
</template>

<style scoped></style>
