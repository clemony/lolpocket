<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'

const props = defineProps<{
    model?: any
}>()
</script>

<template>
<EditableRoot v-slot="{ isEditing }" :default-value="props.model" placeholder="Enter text..." class=" gap-4"
    auto-resize>
    <EditableArea class=" w-[250px]">
        <EditablePreview />
        <EditableInput class="w-full" />
    </EditableArea>
</EditableRoot>
</template>

<style scoped></style>