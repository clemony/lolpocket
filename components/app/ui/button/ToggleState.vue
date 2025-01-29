<script setup lang="ts">
const props = defineProps<{
  model: number
}>()

const emit = defineEmits(['update:model'])
const modelValue = ref(props.model)
function onClick() {
  modelValue.value++
  modelValue.value == 3 ? (modelValue.value = 0) : ''
  console.log(modelValue.value)
  emit('update:model', modelValue)
}
</script>

<template>
  <button>
    <slot />

    <input
      v-model="modelValue"
      type="radio"
      class="hidden"
      :value="0"
    />
    <input
      v-model="modelValue"
      type="radio"
      class="hidden"
      :value="1"
    />
    <input
      v-model="modelValue"
      type="radio"
      class="hidden"
      :value="2"
    />
  </button>
</template>

<style scoped></style>
