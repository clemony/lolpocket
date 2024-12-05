<script setup lang="ts">
import { newPocketModal } from './Modal'
const props = defineProps<{
    title: string
    description: string
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
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
