<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const pocket = ref(props.pocket)
const ps = usePocketStore()
function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}
</script>

<template>
  <div class=" gap-3 grid grid-cols-4 h-auto items-center pt-3 px-0.25">
    <SpellPicker
      v-model:model="pocket.spells[0]"
      :pocket="props.pocket"
      @update:model="update($event, 0)"
    />

    <SpellPicker
      v-model:model="pocket.spells[1]"
      :pocket="props.pocket"
      @update:model="update($event, 1)"
    />
  </div>
</template>

<style></style>
