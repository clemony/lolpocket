<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  tip?: string
  value?: any
  model?: any
}>()

const emit = defineEmits(['update:model'])

const modelValue = ref(null)

onMounted (() => {
  modelValue.value = props.model
})
</script>

<template>
  <label
    v-tippy="{ content: props.tip, offset: [8, 8] }"
    class="rating rating-xs btn btn-ghost btn-sm grid place-items-center group/star btn-square   has-checked:opacity-100">
    <input
      :key="props.value.id || props.value.name || props.value.key"
      v-model="modelValue"
      type="radio"
      v-bind="$attrs"
      name="default-champ"
      class="mask mask-star-2 bg-n1  transition-all duration-300 group-hover/star:scale-110  group-hover/star:drop-shadow-black/90  group-hover/star:drop-shadow-xs"
      aria-label="make champion default"
      :value="props.value"
      @change="emit('update:model', modelValue)" />
  </label>
</template>