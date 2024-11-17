<script setup lang="ts">
import type {modal} from 'types'
const props = defineProps<{
    open: boolean
    modal?: modal | null
}>()

const emit = defineEmits(['update:open'])

const state = ref(props.open)
const modal = ref(props.modal)

// Watch for prop changes to sync with `state` and `modal`
watch(
    () => props.open,
    (newVal) => {
        state.value = newVal
    }
)

function onClose() {
    state.value = false
    emit('update:open', false) // notify parent to close modal
}
</script>
<template>
    <Dialog
        :key="modal.id || ''"
        v-model:open="state"
        :title="modal.title"
        :description="modal.description"
        :submitText="modal.submitText">
        <DialogContent>
            <component :is="modal.component" />
        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
