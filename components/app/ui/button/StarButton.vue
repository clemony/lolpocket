<script lang="ts" setup>
const props = defineProps<{
tip: string
value: any
model: any
}>()

const emit = defineEmits(['update:model'])

const modelValue = ref(null)

onMounted (() => {
modelValue.value = props.model
})
</script>

<template>
            <label v-tippy="'Default Champion'" class="rating rating-xs opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30 mb-0.5 has-checked:opacity-100">
              <input :key="props.value.id || props.value.name" v-model="modelValue" type="radio" name="default-champ" class="mask mask-star-2 bg-neutral" aria-label="make champion default" :value="props.value"  @change="emit('update:model', modelValue)"/>
            </label>
</template>