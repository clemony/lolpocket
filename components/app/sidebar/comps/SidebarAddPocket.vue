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
  <button v-tippy="'New Pocket'" class="grid cursor-pointer !size-10 place-items-center shrink-0 rounded-lg btn-square !btn-neutral bg-neutral/90 hover:bg-neutral/80  !drop-shadow-sm shadow-sm" @click="handleAddClick()">
    <icon
      name="add-sm"
      class="size-5.5 shrink-0 stroke-[1.2] text-nc/90 drop-shadow-sm" />
   <!-- <Grow />
    <SidebarText class="pr-4 text-nc/90">
      New Pocket
    </SidebarText> -->
  </button>
</template>