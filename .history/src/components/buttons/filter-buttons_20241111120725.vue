<script setup lang="ts">

</script>

<template><Button variant="outline" size="icon" class="join-item">

    <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
</Button>

<Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
    </CollapsibleContent>
</Collapsible>
</template>

<style scoped></style>