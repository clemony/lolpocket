<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string
  modelValue: string | null
}>()
const emit = defineEmits(['update:input'])

const input = ref()

onMounted (() => {
  if (props.modelValue)
    input.value = props.modelValue
})
function reset() {
  input.value = null
  emit('update:input', null)
}
</script>

<template>
  <div class="w-full px-2 pt-2 self-center relative">
    <input v-bind="$attrs" v-model="input" :class="cn('w-full !selection:b1/60 h-10 inset-shadow-sm rounded-lg px-3 text-nc/80 py-2 border-b3/15 bg-b3/10 focus-within:!outline-b3/15', props.class)" :placeholder="props.placeholder" @input="emit('update:input', input)" />

    <button class="absolute right-4  btn-neutral t!ext-nc/80 top-4 grid place-items-center btn btn-xs btn-square" @click="reset()">
      <icon name="x-sm" class="stroke-[1.5] text-nc/80" />
    </button>
  </div>
</template>