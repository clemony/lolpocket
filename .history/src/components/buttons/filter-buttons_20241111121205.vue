<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
<Collapsible v-model:open="isOpen" class="join-item">
    <CollapsibleTrigger as-child>
        <Button variant="outline" size="icon" class="join-item rounded-r-lg">

            <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
        </Button>
    </CollapsibleTrigger>
    <CollapsibleContent>
        <slot />
    </CollapsibleContent>
</Collapsible>
</template>

<style scoped></style>