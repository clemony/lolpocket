<script setup lang="ts">
const props = defineProps<{
  data: effect
}>()

const effect = computed(() => {
  return props.data ? props.data : null
})

const desc = computedAsync (() => {
  if (!effect.value && !effect.value.description)
    return null
const a = replaceFileReferencesWithImages(effect.value.description)
return formatDataTags(a)
})

const why = computed (() => {
  if (!desc.value)
  return null
})


</script>

<template>
  <p class="w-full flex flex-wrap text-wrap leading-normal items-center [&_img]:size-4 gap-x-1 [&_img]:align-bottom [&_img]:self-end">
    <span class="text-4 font-semibold tracking-tight">
      <span v-if="effect.unique">Unique -&nbsp;</span>
      <span v-if="effect.name">{{ effect.name }}: &nbsp;</span>
    </span>

    <template v-if="desc">
      <span
        class=""
        v-html="desc" />
    </template>
  </p>
</template>

<style scoped></style>
