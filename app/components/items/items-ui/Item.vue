<script setup lang="ts">
const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['loaded'])

const loaded = ref(false)
function handleLoad() {
  emit('loaded')
  loaded.value = true
}
</script>

<template>
  <label
    class="" :class="cn('rounded-lg  shadow-sm shadow-black/50  drop-shadow-sm  aspect-square', className)">

    <Img
      v-if="id"
      :img="`/img/item/${id}.webp`"
      alt="Item Image"
      class="aspect-square opacity-96 size-full rounded-lg" @loaded="handleLoad()" />

    <slot />

  </label>
</template>

<style scoped></style>
