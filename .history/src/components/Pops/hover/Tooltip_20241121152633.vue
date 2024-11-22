<script setup lang="ts"></script>
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
