<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const altIsOpen = ref(false)
const spellbookIsOpen = ref(false)
const spellIsOpen = ref(false)
</script>

<template>
    <Collapsible v-model:open="altIsOpen">
        <CollapsibleTrigger
            class="group/spellbook flex w-full items-center gap-3 p-3 font-medium">
            <icon icon="qlementine-icons:swap-16" class="size-4.5" />
            Alternate
            <icon
                icon="teenyicons:left-small-outline"
                class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
            <DisplayCard class="px-5 pb-4">
                <SpellPicker />
            </DisplayCard>
        </CollapsibleContent>
    </Collapsible>

    <Collapsible v-model:open="spellbookIsOpen">
        <CollapsibleTrigger
            class="group/spellbook flex w-full items-center gap-3 p-3 font-medium">
            <icon icon="teenyicons:book-outline" class="size-4.5" />
            Spellbook
            <icon
                icon="teenyicons:left-small-outline"
                class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
            <DisplayCard class="px-5 pb-4">
                <SpellPicker />
            </DisplayCard>
        </CollapsibleContent>
    </Collapsible>

    <Collapsible v-model:open="spellIsOpen">
        <CollapsibleTrigger
            class="group/spell flex w-full items-center gap-3 p-3 font-medium">
            <icon icon="teenyicons:info-outline" class="size-4.5" />
            Spell Info
            <icon
                icon="teenyicons:left-small-outline"
                class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
            <DisplayCard class="px-5 pb-4">
                <SpellPicker />
            </DisplayCard>
        </CollapsibleContent>
    </Collapsible>
</template>

<style scoped></style>
