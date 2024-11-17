<script setup lang="ts">
import type { modal } from 'types'
import { useGeneralStore } from '@stores/generalStore'
import { DialogOverlay } from 'radix-vue'
const gs = useGeneralStore()

const emit = defineEmits(['update:open'])
const modal = shallowRef(gs.modal)

// Watch for `open` prop changes to sync the modal state

const pocket = ref(null)
watch(
    () => gs.modal,

    (newOpen) => {
        console.log(gs.modal)
        modal.value = newOpen
        console.log(newOpen.value)
        gs.modalPocket ? (pocket.value = gs.modalPocket) : null
        gs.modalState = true
    }
)

// Emit close event to update parent’s open state
function onClose() {
    gs.modalState = false
    gs.modal = null
    gs.modalPocket = null
    emit('update:open', false)
}

onMounted(async () => {
    modal.value = gs.modal
    await modal.value
})
</script>

<template>
    <Dialog :key="modal.id" v-model:open="gs.modalState" @close="onClose">
        <DialogClose class="size-full" as-child>
            <DialogOverlay>
                <DialogContent
                    :class="
                        cn(
                            '!px-12 py-8',
                            {
                                'max-w-screen ring-none !m-0 size-full border-none bg-transparent !p-0 shadow-none':
                                    modal.id == 'command',
                            },
                            { 'max-w-[550px]': modal.id != 'command' }
                        )
                    ">
                    <Hide :if="modal.id == 'command'">
                        <DialogHeader>
                            <DialogTitle>
                                <h2>{{ modal.title }}</h2>
                            </DialogTitle>
                            <DialogDescription class="text-base">
                                {{ modal.description }}
                            </DialogDescription>
                        </DialogHeader>
                    </Hide>

                    <component
                        :is="modal.component"
                        :submitText="modal.submitText"
                        :pocket="pocket" />
                </DialogContent>
            </DialogOverlay>
        </DialogClose>
    </Dialog>
</template>
