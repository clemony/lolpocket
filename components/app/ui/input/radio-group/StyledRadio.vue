<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  contrast?: boolean
  model?: any
  value?: any
}>()

const model = ref(null)
onMounted (() => {
model.value = props.model
})
</script>

<template>
  <label class="flex gap-4 py-2 cursor-pointer items-center" :class="{'**:text-nc': props.contrast, 'text-bc': !props.contrast }">
    <input v-model="model" type="radio" class="radio radio-xs !bg-transparent outline " :class="{ 'outline-nc checked:text-nc **:text-nc border-nc': props.contrast, 'outline-bc checked:text-bc **:text-bc border-bc': !props.contrast }" :value="props.value"  :checked="model == props.value"/>
    <slot />
  </label>
</template>