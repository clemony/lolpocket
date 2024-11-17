<script setup lang="ts">
import type { modal } from 'types'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();

const props = defineProps<{
    modal?: modal | null
}>()

const emit = defineEmits(['update:open'])


// Watch for `open` prop changes to sync the modal state
watch(() => gs.modalState, (newOpen) => {
    gs.modalState = newOpen
})

// Emit close event to update parent’s open state
function onClose() {
    gs.modalState = false
    emit('update:open', false)
}
</script>

<template>
    <Dialog
        v-if="gs.modal"
        :key="gs.modal.id"
        v-model:open="gs.modalState"
        @close="onClose">
        <DialogContent class='!px-12 py-8 max-w-[550px]'>
        <DialogHeader>
            <DialogTitle>
                <h2>{{gs.modal.title}} </h2>
            </DialogTitle>
            <DialogDescription class='text-base'>
                {{gs.modal.description}} 
            </DialogDescription>
        </DialogHeader>
            <!-- Dynamically render the component defined in the modal object -->
            <component :is="gs.modal.component"  :submitText="gs.modal.submitText"/>
        </DialogContent>
    </Dialog>
</template>