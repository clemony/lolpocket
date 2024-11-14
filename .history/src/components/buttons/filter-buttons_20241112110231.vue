<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
    <!-- <Collapsible v-model:open="isOpen" class='!rounded-l-none'>
    <CollapsibleTrigger as-child> -->
    <Button variant="outline" size="icon" class="!rounded-l-none">
        <icon icon="teenyicons:filter-outline" class="size-4.5 opacity-70" />
    </Button>
    <!-- 
    </CollapsibleTrigger>
    <CollapsibleContent>
        <slot />
    </CollapsibleContent>
</Collapsible> -->
</template>

<style scoped>
.v-popper--open {
    @apply bg-base-200;
}
</style>
