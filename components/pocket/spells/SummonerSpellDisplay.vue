<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
}>()

const ss = useSidebarStore()
const isOpen = ref(ss.isSidebarOpen)

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
          @update:model="update($event, 0)"
       :is-menu-open="isOpen"
        />
      

        <SpellPicker
          :model="1"
          :pocket="pocket"
          @update:model="update($event, 1)"
          :is-menu-open="isOpen"
        />
      </div>
</template>

<style></style>
