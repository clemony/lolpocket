<script setup lang="ts">
import { ref, watch, defineAsyncComponent } from 'vue'
import type { modal } from 'types'

const props = defineProps<{
    open: boolean
    modal?: modal | null
}>()

const emit = defineEmits(['update:open'])
const state = ref(props.open)

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
        :title="props.modal.title"
        :description="props.modal.description"
        :submitText="props.modal.submitText"
        @close="onClose">
        
        <DialogContent>
            <!-- Dynamically render the component defined in the modal object -->
            <component :is="props.modal.component" />
        </DialogContent>
    </Dialog>
</template>