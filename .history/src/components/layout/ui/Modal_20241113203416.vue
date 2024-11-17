<script setup lang="ts">
const props = defineProps<{
    state: boolean
    title?: string
    description?: string
    submitText?: string
}>()
</script>
<template>
    <Dialog
        v-model:open="state"
        :title="title"
        :description="description"
        :submitText="submitText">
        <DialogContent>
            <component :key="id" :is="component" />
        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
