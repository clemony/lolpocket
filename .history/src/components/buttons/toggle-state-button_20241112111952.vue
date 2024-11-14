<script setup lang="ts">
import { cn } from '@/lib/utils'
const props = defineProps<{
    model: number
    icon1?: string
    icon2?: string
    iconSize?: number
}>()
const iconSize = 'size-' + props.iconSize
const modelValue = ref(props.model)
const emit = defineEmits(['update:model'])

function onClick() {
    modelValue.value++
    modelValue.value == 3 ? (modelValue.value = 0) : ''
    console.log(modelValue.value)
    emit('update:model', modelValue)
}
</script>

<template>
    <Button
        :variant="modelValue ? 'neutral' : 'outline'"
        size="icon"
        class="join-item relative [&_input]:hidden"
        @click="onClick"
        :class="{ 'px-5': modelValue }">
        <icon
            v-if="modelValue == 2"
            :icon="props.icon2"
            class="absolute size-6"
            :class="cn('size-6 shrink-0', iconSize)" />
        <icon
            v-else
            :icon="props.icon1"
            class="absolute"
            :class="
                cn('size-6 shrink-0', { 'opacity-60': !modelValue }, iconSize)
            " />

        <input type="radio" v-model="modelValue" :value="0" />
        <input type="radio" v-model="modelValue" :value="1" />
        <input type="radio" v-model="modelValue" :value="2" />
    </Button>
</template>

<style scoped></style>
