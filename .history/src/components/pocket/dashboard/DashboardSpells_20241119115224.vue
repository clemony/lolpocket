<script setup lang="ts">
const spellbookIsOpen = ref(false)
</script>

<template>
    <Collapsible v-model:open="spellbookIsOpen">
        <CollapsibleTrigger class="flex w-full p-3">
            Can I use this in my project?
            <icon
                icon="teenyicons:left-small-outline"
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
            <DisplayCard class="px-5 pb-4">
                <SpellPicker />
            </DisplayCard>
        </CollapsibleContent>
    </Collapsible>
</template>

<style scoped></style>
