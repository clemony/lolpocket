<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
}>()
</script>

<template>
<DialogContent>
    <DialogHeader>
        <DialogTitle>
            <h1 class="!text-sm tracking-tight text-base-content">
                {{ title }}
            </h1>
        </DialogTitle>
        <DialogDescription>
            {{ props.description }}
        </DialogDescription>
    </DialogHeader>


    <DialogFooter>

    </DialogFooter>

</DialogContent>
</template>

<style scoped></style>