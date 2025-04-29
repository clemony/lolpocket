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
  <NavBtn v-tippy="'New Pocket'" class="btn-sm btn-square" @click="handleAddClick()">

    <icon
      name="add-sm"
      class="size-6.5 shrink-0   dst" />

  </NavBtn>
</template>