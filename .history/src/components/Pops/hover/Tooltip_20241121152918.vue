<script setup lang="ts">
const props = defineProps<{
    content?: string
}>()
</script>
<template>
    <TooltipRoot>
        <TooltipTrigger as-child>
            <slot />
        </TooltipTrigger>
        <TooltipContent>
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>
