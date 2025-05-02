<script setup lang="ts">
const props = defineProps<{
  item: Item
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['loaded'])

const thisItem = computed(() => {
  return props.item
})
const loaded = ref(false)
function handleLoad(){
  emit('loaded')
  loaded.value = true
}
</script>

<template>
  <label
    class="" :class="cn('rounded-lg   aspect-square', props.class)">

    <Image
      v-if="item.name != ''"
      :image="`/img/item/${thisItem.id}.webp`"
      :alt="`${thisItem.name} Image`"
      class="aspect-square size-full rounded-lg" @loaded="handleLoad()" />

    <slot />

    
  </label>
</template>

<style scoped></style>
