<script lang="ts" setup>
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<{
  model: any
}>()

const emits = defineEmits(['update:model-value'])

const forwarded = useForwardPropsEmits(props, emits)
const modelValue = ref(null)

onMounted (() => {
  modelValue.value = props.model
})
</script>

<template>
  <div
    v-bind="forwarded"
    class="flex flex-col gap-3">
    <slot />
  </div>
</template>