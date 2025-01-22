<script setup lang="ts">
  const ps = usePocketStore()
  const props = defineProps<{
    pocket: pocket
  }>()

  function update(event, i) {
    console.log(event)
    props.pocket.spells[i] = event
  }
</script>

<template>
  <div class="items-center">
    <SpellPicker
      v-model:model="props.pocket.spells[0]"
      @update:model="update($event, 0)"
      :pocket="props.pocket" />

    <SpellPicker
      v-model:model="props.pocket.spells[1]"
      @update:model="update($event, 1)"
      :pocket="props.pocket" />
  </div>
</template>

<style></style>
