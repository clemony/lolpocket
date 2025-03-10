<script setup lang="ts">
const props = defineProps<{
  types: Array<any> | null
  bg?: boolean
}>()

const emit = defineEmits(['update:model'])

const ts = useTempStore()

const selectedTypes = ref(null)

function handleReset() {
  selectedTypes.value = null
  emit('update:model', selectedTypes.value)
}
</script>

<template>
  <form class="flex flex-wrap gap-3 gap-y-5">
    <input
      class="btn btn-square btn-sm !text-5 rounded-md font-normal"
      type="reset"
      value="×"
      @click="handleReset" />
    <input
      v-for="type in types"
      :key="type"
      v-model="selectedTypes"
      class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
      :class="{
        '!mr-3': selectedTypes == null || selectedTypes == undefined,
      }"
      type="radio"
      :value="type"
      name="item-types"
      :aria-label="type"
      @change="emit('update:model', selectedTypes)" />
  </form>
</template>

<style scoped></style>
