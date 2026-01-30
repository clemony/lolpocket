<script lang="ts" setup>
const props = defineProps<{
  model: any
  value: any
  name: any
}>()

const emit = defineEmits(['update:model'])

const model = ref(props.model)
</script>

<template>
  <label v-tippy="'Add Favorite'" class="group rating mr-2 size-fit">
    <input
      v-model="model"
      class="mask mask-heart bg-[#dd5f61]"
      type="checkbox"
      :value="props.value"
      name="favorite"
      :aria-label="`favorite ${props.name}`"
      :class="{
        'transition-all duration-300 group-hover:opacity-40':
          !props.model.includes(value),
      }"
      @change="emit('update:model', model)"
    >
  </label>
</template>
