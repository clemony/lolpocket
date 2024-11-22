<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const altIsOpen = ref(false)
const spellbookIsOpen = ref(false)
const spellIsOpen = ref(false)

const el = ref(null)
</script>

<template>
    <DisplayCard class="relative" ref="el">
        <div class="grid grid-cols-3 px-5 pb-4">
            <div>
                <h3 class="self-start pt-1 !leading-tight">
                    Summoner
                    <br />
                    Spells
                </h3>
            </div>
            <Popover>
                <PopoverTrigger
                    class="grid items-center justify-items-end gap-3">
                    <Placeholder class="size-16 rounded-lg" />
                </PopoverTrigger>
                <PopoverContent
                    class="flex w-[300px] flex-wrap !rounded-box px-12 py-6"
                    :sideOffset="8">
                    <SpellPicker />
                </PopoverContent>
            </Popover>
            <DropdownMenu>
                <DropdownMenuTrigger
                    class="grid items-center justify-items-end gap-3">
                    <Placeholder class="size-16 rounded-lg" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <SpellPicker />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </DisplayCard>

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
            <DisplayCard class="flex justify-between px-5 pb-4">
                <Placeholder class="size-14 rounded-lg" />
                <Placeholder class="size-14 rounded-lg" />
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

<style>
input[type='range']::-webkit-slider-thumb,
input[type='range']::-webkit-media-slider-thumb {
    @apply !rounded-md;
}
</style>
