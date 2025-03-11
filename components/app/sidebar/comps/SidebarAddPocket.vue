<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])

const us = useUiStore()

function handleAddClick() {
  const ps = usePocketStore()
  ps.newPocketOpen = true
  emit('update:modelValue')
}
</script>

<template>
  <SidebarButton class="rounded-lg py-5 !btn-neutral bg-neutral !drop-shadow-sm shadow-sm" @click="handleAddClick()">
    <icon
      name="add-sm"
      class="size-5.5 shrink-0 stroke-[1.2] text-nc drop-shadow-sm" />
    <Grow />
    <SidebarText class="pr-4">
      New Pocket
    </SidebarText>
  </SidebarButton>
</template>