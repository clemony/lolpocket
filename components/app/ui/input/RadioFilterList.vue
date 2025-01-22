<script setup lang="ts">
  const ts = useTempStore()

  const props = defineProps<{
    types: Array<any> | null
    bg?: boolean
  }>()

  const selectedTypes = ref(null)

  const emit = defineEmits(['update:model'])
  function handleReset() {
    selectedTypes.value = null
    emit('update:model', selectedTypes.value)
  }
</script>
<template>
  <form class="mb-3 -ml-2 filter">
    <input
      @click="handleReset"
      class="btn btn-square text-5 !mr-2 rounded-md font-normal"
      type="reset"
      value="×" />
    <input
      v-for="type in types"
      class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 text-2 relative z-0 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
      :class="{
        '!mr-3': selectedTypes == null || selectedTypes == undefined,
      }"
      v-model="selectedTypes"
      @change="emit('update:model', selectedTypes)"
      type="radio"
      :value="type"
      name="item-types"
      :aria-label="type" />
  </form>
</template>
<style scoped></style>
