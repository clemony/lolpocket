<script setup lang="ts">
import { DrawerTrigger, DrawerClose } from 'vaul-vue'
import { newPocketModal } from './Modal'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
const props = defineProps<{
    title?: string
    description?: string
    type?: string
}>()
const type = ref(props.type)
const title = computed(() => {
    const t = type.value == 'addPocket' ? newPocketModal.title : props.title
    return t
})
const description = computed(() => {
    const d =
        type.value == 'addPocket' ?
            newPocketModal.description
        :   props.description
    return d
})
</script>
<template>
    <DrawerRoot :open="gs.drawerState">
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent class="flex w-full justify-center px-24 pt-3">
            <DrawerHeader class="mt-6 w-1/3">
                <DrawerTitle>
                    {{ title }}
                </DrawerTitle>
                <DrawerDescription
                    class="flex-wrap text-base"
                    v-html="description" />
            </DrawerHeader>
            <div>
                <slot />
            </div>
            <DrawerFooter class="mt-0 pt-0">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <Button
                        variant="outline"
                        size="md"
                        class="flex items-end text-base">
                        Cancel
                    </Button>
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
