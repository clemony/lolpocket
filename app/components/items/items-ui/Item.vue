<script setup lang="ts">
const props = defineProps<{
  item: Item
  class?: HTMLAttributes['class']
  isOpen?: boolean
  isHovered?: boolean
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

    <PrismaticShine v-if="props.isOpen || props.isHovered" class="absolute scale-107 top-0 left-0 z-1" />
  </label>
</template>

<style scoped></style>
