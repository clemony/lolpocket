<script lang="ts" setup>
const props = defineProps<{
  pocket?: Pocket
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells.sets[i] = event
  console.log('💠 - update - pocket.value.spells.sets:', pocket.value.spells.sets)
}

function handleClick() {
  newSpellSet(pocket.value.key)

  console.log('💠 - update - pocket.value.spells.sets:', pocket.value.spells.sets)

  console.log('💠 - update - pocket.value.spells.sets:', pocket.value.spells)
}
</script>

<template>
  <div class="flex gap-3  **:select-none">
    <LazySpellPicker
      :model="0"
      :pocket="pocket"
      class="size-12 *:size-fit rounded-full *:!rounded-full"
      @update:model="update($event, 0)" />

    <LazySpellPicker
      :model="1"
      :pocket="pocket"
      class="size-12 *:size-fit rounded-full *:!rounded-full"
      @update:model="update($event, 1)" />

    <button class="btn " @click="handleClick()">
      hihi
    </button>
  </div>
</template>

<style scoped>

</style>