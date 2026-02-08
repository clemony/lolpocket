<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  contrast?: boolean
  model?: any
  value?: any
}>()

const model = ref<string>(null)
onMounted(() => {
  model.value = props.model
})
</script>

<template>
  <label
    class="flex cursor-pointer items-center gap-4 py-2"
    :class="{ '**:text-nc': props.contrast, 'text-pc': !props.contrast }">
    <input
      v-model="model"
      class="radio bg-transparent! radio-xs outline"
      type="radio"
      :class="{
        'border-nc outline-nc **:text-nc checked:text-nc': props.contrast,
        'outline-bc border-pc **:text-pc checked:text-pc': !props.contrast,
      }"
      :value="props.value"
      :checked="model === props.value">

    <slot />
  </label>
</template>
