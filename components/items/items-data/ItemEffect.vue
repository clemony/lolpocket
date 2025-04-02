<script setup lang="ts">
const props = defineProps<{
  data: effect
}>()

const effect = computed(() => {
  return props.data ? props.data : null
})

const desc = computed (() => {
  if (!effect.value && !effect.value.description)
    return

  let a = effect.value.description.replace('「', '')
  a = a.replace('」', '')

  a = a.replace(/\[\[:[^|]+\|([\s\S]\]+)\]\]/g, '$1')
  return replaceFileReferencesWithImages(effect.value.description)
})
console.log('💠 - desc - desc:', desc)
</script>

<template>
  <p class="w-full flex flex-wrap text-wrap leading-normal">
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
