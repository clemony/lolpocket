<script setup lang="ts">
import type { modal } from 'types'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();

const props = defineProps<{
    modal?: modal | null
}>()

const emit = defineEmits(['update:open'])
const modal = shallowRef(gs.modal)

// Watch for `open` prop changes to sync the modal state
watch(() => gs.modalState, (newOpen) => {
    gs.modalState = newOpen
})

watch(() => gs.modal, (newOpen) => {
    gs.modalState = true
    modal.value = newOpen
})


// Emit close event to update parent’s open state
function onClose() {
    gs.modalState = false
    gs.modal = null
    gs.modalPocket = null
    emit('update:open', false)
}
</script>

<template>
    <Dialog
        v-if="modal"
        :key="modal.id"
        v-model:open="gs.modalState"
        @close="onClose">
        <DialogContent class='!px-12 py-8 max-w-[550px]'>
        <DialogHeader>
            <DialogTitle>
                <h2>{{modal.title}} </h2>
            </DialogTitle>
            <DialogDescription class='text-base'>
                {{modal.description}} 
            </DialogDescription>
        </DialogHeader>
            <!-- Dynamically render the component defined in the modal object -->
            <component :is="modal.component"  :submitText="modal.submitText"/>
        </DialogContent>
    </Dialog>
</template>