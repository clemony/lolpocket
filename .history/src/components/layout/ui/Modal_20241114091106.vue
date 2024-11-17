<script setup lang="ts">
import type { modal } from 'types'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();

const props = defineProps<{
    open: boolean
    modal?: modal | null
}>()

const emit = defineEmits(['update:open'])
const state = ref(gs.modalState)

// Watch for `open` prop changes to sync the modal state
watch(() => props.open, (newOpen) => {
    state.value = newOpen
})

// Emit close event to update parent’s open state
function onClose() {
    state.value = false
    emit('update:open', false)
}
</script>

<template>
    <Dialog
        v-if="props.modal"
        :key="props.modal.id"
        v-model:open="state"
        @close="onClose">
        <DialogContent class='!px-12 py-8 max-w-[550px]'>
        <DialogHeader>
            <DialogTitle>
                <h2>{{props.modal.title}} </h2>
            </DialogTitle>
            <DialogDescription class='text-base'>
                {{props.modal.description}} 
            </DialogDescription>
        </DialogHeader>
            <!-- Dynamically render the component defined in the modal object -->
            <component :is="props.modal.component"  :submitText="props.modal.submitText"/>
        </DialogContent>
    </Dialog>
</template>