<script setup lang="ts">
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { usePocketStore } from '@/stores/pocketStore'
import { formattedQuote } from '@/data/champQuotes'
import type { pocket } from 'types'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey)) as unknown as pocket

const cs = useChampStore()
const is = useItemStore()

// Create a local ref for the text input
const notesInput = ref<string>('')

// Initialize notesInput when the component is mounted
onMounted(() => {
    if (pocket) {
        if (pocket.notes) {
            notesInput.value = pocket.notes
        }
    }
})

watch(
    () => pocket.notes,
    (newNotes) => {
        if (newNotes !== undefined) {
            notesInput.value = newNotes
        }
    }
)

// Update pocket.notes only when the field loses focus
function updateNotes() {
    if (pocket) {
        if (pocket) {
            pocket.notes = notesInput.value
            ps.$persist()
        }
    }
}

console.log('quo', formattedQuote())
const sTabs = ref('sTabs')
</script>
<template>
    <div v-if="pocket" :key="pocket.key" class="flex flex-col">
        <Card class="shadow-smooth">
            <CardContent class="h-36 overflow-hidden rounded-lg p-0">
                <LgChampion
                    v-if="pocket.champions[0].starred"
                    :pocket="pocket" />

                <div
                    v-else
                    class="text-middle flex size-full items-center justify-center">
                    <p
                        class="items-center whitespace-pre-line text-pretty px-12 align-middle font-serif text-lg italic tracking-wide [text-align-last:right]">
                        {{ formattedQuote() }}
                    </p>
                </div>
            </CardContent>
        </Card>
        <ul
            class="mt-6 flex h-9 items-center px-1 before:absolute before:h-9 before:w-[55px] before:rounded-md before:border before:border-base-200 before:bg-base-100 before:opacity-80 before:shadow-smooth [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
            <li>
                <label>Spells</label>
            </li>
            <li>
                <label>Runes</label>
            </li>
            <li><label>Notes</label></li>
        </ul>
        <Tabs default-value="spells" class="w-full">
            <!--             <TabsList class="mb-2 mt-5 bg-transparent [&_button]:rounded-md">
                <TabsTrigger value="spells">Spells</TabsTrigger>
                <TabsTrigger value="runes">Runes</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList> -->

            <TabsContent value="spells">
                <DashboardSpells :pocket="pocket" />
            </TabsContent>

            <TabsContent value="runes">
                <DashboardRunes :pocket="pocket" />
            </TabsContent>

            <TabsContent value="notes">
                <div class="h-inherit">
                    <textarea
                        class="peer flex size-full cursor-pointer items-start overflow-y-scroll rounded-[4px] border border-base-200/40 bg-base-200/25 px-1.5 py-1 align-top text-[10px] font-light leading-3 tracking-[0.015em] outline-none transition-all duration-300 [resize:none] first-line:indent-2 placeholder:italic hover:border-base-300/70 hover:opacity-70 hover:shadow-inner focus:border-base-300/70 focus:opacity-100 focus:shadow-inner"
                        v-model="notesInput"
                        @blur="updateNotes"
                        @click.stop
                        :placeholder="pocket.notes"
                        spellcheck="false">
<icon :icon="pocket.icon" />
                </textarea
                    >
                </div>

                <icon
                    icon="hugeicons:note-01"
                    class="absolute bottom-1.5 right-1.5 size-3.5 opacity-30"
                    :class="{
                        'peer-focus:opacity-0':
                            notesInput != '' && notesInput != '',
                    }" />
                <icon
                    :class="{
                        'peer-focus:opacity-40':
                            notesInput != '' && notesInput != '',
                    }"
                    icon="hugeicons:note-remove"
                    class="absolute bottom-1.5 right-1.5 size-3.5 opacity-0"
                    @click.stop="notesInput = '　'" />
            </TabsContent>
        </Tabs>
    </div>
</template>

<style scoped></style>
