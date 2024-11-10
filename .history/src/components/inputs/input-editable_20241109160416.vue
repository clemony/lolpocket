<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'
</script>

<template>
<EditableRoot v-slot="{ isEditing }" default-value="Click to edit 'Radix Vue'" placeholder="Enter text..."
    class="flex flex-col gap-4" auto-resize>
    <EditableArea class="text-white w-[250px]">
        <EditablePreview />
        <EditableInput class="w-full placeholder:text-white" />
    </EditableArea>
</EditableRoot>
</template>

<style scoped></style>