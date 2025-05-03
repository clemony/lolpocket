<script setup lang="ts">
const { id, name, class: className } = defineProps<{
  id: number
  name: string
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
    class="" :class="cn('rounded-lg   aspect-square', className)">

    <Image
      v-if="id"
      :image="`/img/item/${id}.webp`"
      :alt="`${name} Image`"
      class="aspect-square size-full rounded-lg" @loaded="handleLoad()" />

    <slot />

  </label>
</template>

<style scoped></style>
