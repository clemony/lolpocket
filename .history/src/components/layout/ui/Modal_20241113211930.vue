<script setup lang="ts">
import type {modal} from 'types'
const props = defineProps<{
    state: boolean
    modal: string
}>()

const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),
})

const command = defineAsyncComponent({
    loader: () => import('@/components/layout/ui/Command.vue'),
})


const state = ref(false)

const component = shallowRef()
const title = ref('')
const description = ref('')
const submitText = ref('')
const id = ref('')

const emit = defineEmits(['update:open'])
  //emit('update:open')
const onOpen(){
   if (props.modal == 'newPocket'){
         component.value = newPocket,
        id.value =  'newPocket',
        title.value =  'New Pocket',
        description.value =
            'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
        submitText.value = 'Create',
    } else if (props.modal == 'command'){
                 component.value = command,
        id.value = 'command',
    }
}
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
