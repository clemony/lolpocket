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
            class="text-medium bg-neutral70 max-w-48 text-pretty rounded-lg text-sm shadow-pretty"
            side="bottom"
            align="start">
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>
