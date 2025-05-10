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
  <NavBtn v-tippy="'New Pocket'" class="btn-lg -mb-2 mt-2 justify-start rounded-box !font-medium cursor-pointer btn-ghost relative btn" @click="handleAddClick()">
    <icon name="add-sm" class="size-5.5 opacity-70 stroke-[1.6]" />
    Create New Pocket
  </NavBtn>
</template>