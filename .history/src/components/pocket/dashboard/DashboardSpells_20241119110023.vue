<script setup lang="ts">
const spellbookIsOpen = ref(false)
</script>

<template>
    <Collapsible v-model:open="spellbookIsOpen">
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
        </CollapsibleContent>
    </Collapsible>
</template>

<style scoped></style>
