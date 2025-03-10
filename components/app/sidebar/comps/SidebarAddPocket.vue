<script lang="ts" setup>
const us = useUiStore()

function handleAddClick() {
  const ps = usePocketStore()
  const emit = defineEmits(['update:modelValue'])
  ps.newPocketOpen = true
  emit('update:modelValue')
}
</script>

<template>
  <button class="flex mt-2 mb-1 gap-3 w-[96%] justify-self-center btn btn-neutral flex-nowrap tldr-30  rounded-md" :class="{ '!btn-square !gap-0 justify-center': !us.sidebarExpanded }" @click="handleAddClick()">
    <icon
      name="add-sm"
      class="size-5.5 shrink-0 stroke-[1.2] text-nc drop-shadow-sm -ml-4" :class="{ 'ml-0 tldr-30': !us.sidebarExpanded }" />
    <SidebarText>
      New Pocket
    </SidebarText>
  </button>
</template>