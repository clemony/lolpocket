<script setup lang="ts">
import type {modal} from 'types'
const props = defineProps<{
    state: boolean
    modal: modal
}>()


const state = ref(false)

const component = shallowRef()
const title = ref('')
const description = ref('')
const submitText = ref('')
const id = ref('')

const emit = defineEmits(['update:open'])
  //emit('update:open')
function onOpen() {

}
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
