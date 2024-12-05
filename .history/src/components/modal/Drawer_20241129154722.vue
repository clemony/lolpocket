<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
}>()
</script>
<template>
    <DrawerRoot>
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    {{ props.title }}
                </DrawerTitle>
                <DrawerDescription>
                    {{ props.description }}
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
