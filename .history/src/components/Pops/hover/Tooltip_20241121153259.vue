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
        <TooltipContent class="max-w-40 text-pretty text-sm">
            {{ content }}
        </TooltipContent>
    </TooltipRoot>
</template>
<style scoped></style>
