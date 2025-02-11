<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus'

const list2 = ref(['hie', 'how', 'gett'])

function onUpdate() {
  console.log('update')
}
function onAdd() {
  console.log('add')
}
function remove() {
  console.log('remove')
}
</script>

<template>
  <VueDraggable
    v-model="list2"
    class="flex flex-col gap-2 p-4 w-full m-auto bg-gray-500/5 rounded overflow-auto"
    :animation="150"
    group="people"
    ghost-class="ghost"
    @update="onUpdate"
    @add="onAdd"
    @remove="remove"
  >
    <div
      v-for="item in list2"
      :key="item"
      class="size-full flex border border-neutral bg-b2"
    >
      <span class="select-none">
        {{ item }}</span>
    </div>
  </VueDraggable>
</template>

<style scoped>

</style>