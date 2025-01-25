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
  <form class="mb-3 -ml-2 filter">
    <input
      class="btn btn-square text-5 !mr-2 rounded-md font-normal"
      type="reset"
      value="×"
      @click="handleReset"
    />
    <input
      v-for="type in types"
      v-model="selectedTypes"
      class="btn checked:bg-neutral checked:border-neutral checked:shadow-neutral/20 text-2 relative z-0 mr-0 rounded-md font-medium tracking-normal capitalize checked:shadow-sm"
      :class="{
        '!mr-3': selectedTypes == null || selectedTypes == undefined,
      }"
      type="radio"
      :value="type"
      name="item-types"
      :aria-label="type"
      @change="emit('update:model', selectedTypes)"
    />
  </form>
</template>

<style scoped></style>
