<script setup lang="ts">
import type {modal} from 'types'
const props = defineProps<{
    open: boolean
    modal?: modal | null
}>()


const state = ref(props.open)
const modal = ref(props.modal)
const emit = defineEmits(['update:open'])
  //emit('update:open')
function onOpen() {

}
</script>
<template>
    <Dialog
        :key="modal.id"
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
