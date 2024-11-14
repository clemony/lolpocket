<script setup lang="ts">
import {
    EditableArea,
    EditableCancelTrigger,
    EditableEditTrigger,
    EditableInput,
    EditablePreview,
    EditableRoot,
    EditableSubmitTrigger,
} from 'radix-vue'
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

const inputWidth = ref(0)
const textWidth = ref<HTMLElement | null>(null)

const updateWidth = () => {
    if (textWidth.value) {
        // Measure the span's width
        inputWidth.value = textWidth.value.getBoundingClientRect().width + 30
    }
}
</script>

<template>
    <EditableRoot
        v-slot="{ isEditing }"
        :default-value="props.defaultValue"
        :class="
            cn(
                'border-input flex h-8 cursor-text rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/60 hover:ring-1 hover:ring-neutral/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral/40 disabled:cursor-not-allowed disabled:opacity-50',
                props.class
            )
        "
        placeholder="Enter text..."
        class="gap-4"
        auto-resize>
        <EditableArea class="relative overflow-hidden" @click.stop>
            <EditablePreview />
            <EditableInput
                class="peer"
                v-model="modelValue"
                spellcheck="false" />
            <div
                class="absolute -right-10 -top-1 h-full opacity-0 transition-all duration-300 peer-focus:opacity-100">
                <slot />
            </div>
        </EditableArea>
    </EditableRoot>

    <span
        ref="textWidth"
        class="!pointer-events-none !invisible !absolute !left-0 !top-0"
        :class="cn('whitespace-pre px-3 text-sm', props.class)">
        {{ modelValue }}
    </span>
</template>

<style scoped></style>
