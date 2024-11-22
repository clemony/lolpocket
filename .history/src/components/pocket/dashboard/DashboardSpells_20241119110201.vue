<script setup lang="ts">
const spellbookIsOpen = ref(false)
</script>

<template>
    <Collapsible v-model:open="spellbookIsOpen">
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
            <DisplayCard class="px-5 pb-4">
                <SpellPicker />
            </DisplayCard>
        </CollapsibleContent>
    </Collapsible>
</template>

<style scoped></style>
