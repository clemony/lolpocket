<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
    defaultValue?: any
    modelValue?: string | number
    class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
})
</script>

<template>
<EditableRoot v-slot="{ isEditing }" :default-value='props.defaultValue'
    :class="cn('flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/60 focus-visible:outline-none focus-visible:ring-1 hover:ring-1 focus-visible:ring-neutral/40 hover:ring-neutral/5    disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    placeholder="Enter text..." class=" gap-4" auto-resize>
    <EditableArea class=" w-[190px] relative">
        <EditablePreview />
        <EditableInput class="w-full" v-model="modelValue" spellcheck='false' />
        <div class="absolute right-2 h-full">
            <slot />
        </div>
    </EditableArea>
</EditableRoot>
</template>

<style scoped></style>