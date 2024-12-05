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
    <DrawerRoot vaul-drawer-wrapper>
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent class="flex w-full justify-center px-24 pt-3">
            <DrawerHeader class="mt-6 w-1/2">
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
                <DrawerClose class="flex justify-end pb-1 pr-32">
                    <Button
                        variant="outline"
                        class="flex items-end pb-1 text-base">
                        Cancel
                    </Button>
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
