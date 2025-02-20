<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
  isOpen?: boolean
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}
</script>

<template>
  <div class=" gap-2 flex flex-col h-auto items-center  rounded-full  py-2 px-2  bg-b2 border-b3 shadow-sm">
    <SpellPicker
      :model="0"
      :pocket="pocket"
      :is-menu-open="isOpen"
      @update:model="update($event, 0)"
    />

    <SpellPicker
      :model="1"
      :pocket="pocket"
      :is-menu-open="isOpen"
      @update:model="update($event, 1)"
    />
  </div>
</template>

<style></style>
