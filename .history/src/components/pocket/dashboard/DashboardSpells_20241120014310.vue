<script setup lang="ts">
import type { pocket, spell } from 'types'
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const props = defineProps<{
    pocket: pocket
}>()

const altIsOpen = ref(false)
const spellbookIsOpen = ref(false)
const spellIsOpen = ref(false)

const pocket = ps.getPocket(props.pocket.key)

const spell1 = ref(pocket.spells[0].spell1 as spell)
console.log(spell1)
const spell2 = ref(pocket.spells[0].spell2) as spell
console.log(spell2)
const alt1 = ref(pocket.spells[0].alt1) as spell
console.log(alt1)
const alt2 = ref(pocket.spells[0].alt2) as spell
console.log(alt2)

const spellArr = [spell1, spell2, alt1, alt2]
console.log(spellArr)
const el = ref()
console.log('el', el.value)

watch(
    () => pocket.spells[0].spell1,
    (newVal) => {
        console.log('pls', newVal)
    }
)

onMounted(async () => {
    await el.value
})
</script>

<template>
    <DisplayCard class="relative" headerClass="hidden">
        <div class="grid grid-cols-[2fr_1fr_1fr] !py-0 px-5" ref="el">
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
                    @update:model="
                        ($event) => (pocket.spells[0].spell1 = $event)
                    "
                    :target="el" />
            </div>
            <div class="items-center justify-self-end">
                <SpellPicker
                    v-model:model="spell2"
                    :arr="spellArr"
                    @update:model="
                        ($event) => (pocket.spells[0].spell2 = $event)
                    "
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
