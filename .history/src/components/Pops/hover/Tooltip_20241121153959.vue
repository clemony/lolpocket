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
        <TooltipContent
            class="text-medium max-w-48 text-pretty rounded-lg bg-neutral/70 text-sm shadow-pretty"
            side="bottom"
            align="start">
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>
