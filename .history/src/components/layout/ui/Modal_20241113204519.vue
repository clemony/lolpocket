<script setup lang="ts">
const props = defineProps<{
    state: boolean
    modal:
}>()

const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),
})

const command = defineAsyncComponent({
    loader: () => import('@/components/layout/ui/Command.vue'),
})
const modal = ref(props.modal)
const dialog = [
    {
   newPocket: [{
        component: newPocket,
        id: 'newPocket',
        title: 'New Pocket',
        description:
            'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
        submitText: 'Create',
   }
]},
    {
        component: command,
        id: 'command',
    },
]
</script>
<template>
    <Dialog
        :key="modal.id"
        v-model:open="state"
        :title="modal.title"
        :description="description"
        :submitText="submitText">
        <DialogContent>
            <component :is="component" />
        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
