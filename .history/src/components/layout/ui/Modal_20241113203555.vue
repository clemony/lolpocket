<script setup lang="ts">
const props = defineProps<{
    state: boolean
    title?: string
    description?: string
    submitText?: string
}>()

const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),
})

const command = defineAsyncComponent({
    loader: () => import('@/components/layout/ui/Command.vue'),
})

export const newPocketModal = [
    {
        component: newPocket,
        id: 'newPocket',
        title: 'New Pocket',
        description:
            'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
        submitText: 'Create',
    },
]

export const commandModal = [
    {
        component: command,
        id: 'command',
    },
]
</script>
<template>
    <Dialog
        :key="id"
        v-model:open="state"
        :title="title"
        :description="description"
        :submitText="submitText">
        <DialogContent>
            <component :is="component" />
        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
