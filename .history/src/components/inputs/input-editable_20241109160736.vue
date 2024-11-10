<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'

const props = defineProps<{
    model?: any
}>()
</script>

<template>
<EditableRoot v-slot="{ isEditing }" :default-value="props.model" v-model="modelValue" spellcheck='false'
    :class="cn('flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/60 focus-visible:outline-none focus-visible:ring-1 hover:ring-1 focus-visible:ring-neutral/40 hover:ring-neutral/5    disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    placeholder="Enter text..." class=" gap-4" auto-resize>
    <EditableArea class=" w-[250px]">
        <EditablePreview />
        <EditableInput class="w-full" />
    </EditableArea>
</EditableRoot>
</template>

<style scoped></style>