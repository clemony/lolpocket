<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const altIsOpen = ref(false)
const spellbookIsOpen = ref(false)
const spellIsOpen = ref(false)

const spell1 = ref(props.pocket.spells.spell1)
const spell2 = ref(props.pocket.spells.spell2)
const alt1 = ref(props.pocket.spells.alt1)
const alt2 = ref(props.pocket.spells.alt2)

const spellArr = [spell1.value, spell2.value, alt1.value, alt2.value]
const el = ref()
console.log('el', el.value)

watch(
    () => props.pocket.spells.spell1,
    (newVal) => {
        console.log(newVal)
    }
)

onMounted(async () => {
    await el.value
})
</script>

<template>
    <DisplayCard class="relative">
        <div class="grid grid-cols-3 px-5 pb-4" ref="el">
            <div>
                <h3 class="self-start pt-1 !leading-tight">
                    Summoner
                    <br />
                    Spells
                </h3>
            </div>
            <div class="items-center justify-self-end">
                <SpellPicker
                    v-model:model="spell1"
                    :arr="spellArr"
                    @update:model="console.log('eh', $event)"
                    :target="el"
                    :pocket />
            </div>
            <div class="items-center justify-self-end">
                <SpellPicker
                    v-model:model="spell2"
                    :arr="spellArr"
                    @update:model="(v) => (spell2 = v)"
                    :target="el" />
            </div>
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
