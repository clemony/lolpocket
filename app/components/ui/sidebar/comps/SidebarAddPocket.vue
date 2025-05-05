<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
/*
const emit = defineEmits(['update:modelValue']) */

const us = useUiStore()

function handleAddClick() {
  const ps = usePocketStore()
  ps.newPocketOpen = true
/*   emit('update:modelValue') */
}
</script>

<template>
  <button v-tippy="'New Pocket'" class="btn-sm cursor-pointer btn-square btn-ghost  btn" @click="handleAddClick()">
    <icon
      name="mynaui:plus"
      class=" shrink-0 size-6  dst" />
  </button>
</template>