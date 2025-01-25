<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()
const ps = usePocketStore()
function update(event, i) {
  console.log(event)
  props.pocket.spells[i] = event
}
</script>

<template>
  <div class="items-center">
    <SpellPicker
      v-model:model="props.pocket.spells[0]"
      :pocket="props.pocket"
      @update:model="update($event, 0)"
    />

    <SpellPicker
      v-model:model="props.pocket.spells[1]"
      :pocket="props.pocket"
      @update:model="update($event, 1)"
    />
  </div>
</template>

<style></style>
