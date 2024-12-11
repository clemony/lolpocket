<script setup lang="ts">
import type { modal } from 'types'
import { useGeneralStore } from '@/client/stores/generalStore'
import { DialogOverlay } from 'radix-vue'
const gs = useGeneralStore()

const emit = defineEmits(['update:open'])

// Watch for `open` prop changes to sync the modalValuestate

const pocket = ref(undefined)
watch(
    () => gs.modalValue,

    (newOpen) => {
        gs.modalValue = newOpen
        gs.modalPocket ? (pocket.value = gs.modalPocket) : null
        gs.modalState = true
    }
)

function onClose() {
    gs.modalState = false
    emit('update:open', false)
    gs.modalPocket = undefined
}

onMounted(async () => {
    await gs.modalValue
})
</script>

<template>
    <template v-if="gs.modalState">
        <Dialog
            :key="gs.modalValue.id"
            v-model:open="gs.modalState"
            @close="onClose">
            <DialogContent
                :class="
                    cn(
                        'px-12! py-8',
                        {
                            'ring-none m-0! size-full max-w-screen border-none bg-transparent p-0! shadow-none':
                                gs.modalValue.id == 'command',
                        },
                        { 'max-w-[550px]': gs.modalValue.id != 'command' }
                    )
                ">
                <Hide :if="gs.modalValue.id == 'command'">
                    <DialogHeader>
                        <DialogTitle>
                            <h2>{{ gs.modalValue.title }}</h2>
                        </DialogTitle>
                        <DialogDescription
                            v-html="gs.modalValue.description"
                            class="text-3"></DialogDescription>
                    </DialogHeader>
                </Hide>

                <component
                    :is="gs.modalValue.component"
                    :submitText="gs.modalValue.submitText"
                    :pocket="pocket"
                    @update:open="onClose" />
            </DialogContent>

            <DialogOverlay />
        </Dialog>
    </template>
</template>
