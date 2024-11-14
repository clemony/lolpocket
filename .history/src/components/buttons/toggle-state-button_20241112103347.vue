<script setup lang="ts">
const props = defineProps<{
    model: number
    icon1?: string
    icon2?: string
}>()

const modelValue = ref(props.model)
const emit = defineEmits(['update:model'])

function onChange(e) {
    console.log('wtf', e)
    const value = e.target.value
    console.log(value)

    // emit('update:model', modelValue)
}
</script>

<template>
    <Button
        :variant="modelValue ? 'neutral' : 'outline'"
        size="icon"
        class="join-item relative [&_input]:hidden"
        @click="modelValue++, modelValue == 3 ? (modelValue = 0) : ''"
        :class="{ '': modelValue }">
        <icon
            v-if="modelValue == 2"
            :icon="props.icon1"
            class="absolute size-6" />
        <icon
            v-else
            :icon="props.icon2"
            class="absolute size-6"
            :class="{ 'opacity-60': !modelValue }" />

        <input
            type="radio"
            v-model="modelValue"
            :value="0"
            @change="onChange($event)" />
        <input
            type="radio"
            v-model="modelValue"
            :value="1"
            @change="onChange($event)" />
        <input
            type="radio"
            v-model="modelValue"
            :value="2"
            @change="onChange($event)" />
    </Button>
</template>

<style scoped></style>
