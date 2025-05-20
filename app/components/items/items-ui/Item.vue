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
    class="" :class="cn('rounded-lg  shadow-sm  drop-shadow-sm  aspect-square', className)">

    <Img
      v-if="id"
      :img="`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/item/${id}.png`"
      alt="Item Image"
      class="aspect-square opacity-96 size-full rounded-lg" @loaded="handleLoad()" />

    <slot />

  </label>
</template>

<style scoped></style>
