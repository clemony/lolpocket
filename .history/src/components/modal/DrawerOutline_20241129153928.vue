<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
}>()
</script>
<template>
    <Drawer>
        <DrawerTrigger>
            <slot name="trigger" />
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                    This action cannot be undone.
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>
<style scoped></style>
