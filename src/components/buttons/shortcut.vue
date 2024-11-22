<script setup lang="ts">
const props = defineProps<{
    title: string
    shortcut: string
}>()
</script>

<template><Button variant="ghost" size="sm" class='w-full'>
    <div class="flex size-7 items-center justify-center rounded-md">
        <slot name="icon" />
    </div>
    <div class="font-medium  text-start text-muted-foreground grow">
        {{ props.title }}
    </div>
    <div class='justify-self-end justify-end font-size-1 opacity-80 pr-2'>
        {{ props.shortcut }}
    </div>
</Button></template>

<style scoped></style>