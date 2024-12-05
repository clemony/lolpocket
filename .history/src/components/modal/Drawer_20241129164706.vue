<script setup lang="ts">
import { DrawerTrigger, DrawerClose } from 'vaul-vue'
import { newPocketModal } from './Modal'
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
    <DrawerRoot>
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    {{ title }}
                </DrawerTitle>
                <DrawerDescription>
                    {{ description }}
                </DrawerDescription>
            </DrawerHeader>
            <slot />
            <DrawerFooter>
                <DrawerClose class="flex justify-end pb-1 pr-28">
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
