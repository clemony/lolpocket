<script setup lang="ts">
import { useChampStore } from '@/stores/champStore'
import { useItemStore } from '@/stores/itemStore'
import { usePocketStore } from '@/stores/pocketStore'
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

const sTabs = ref('sTabs')
</script>
<template>
    <div
        v-if="pocket"
        :key="pocket.key"
        class="grid grid-cols-1 grid-rows-[min-content_1fr_min-content] gap-4">
        <Card>
            <CardContent class="h-36 overflow-hidden rounded-lg p-0">
                <LgChampion
                    v-if="pocket.champions[0].starred"
                    :pocket="pocket" />

                <div v-else class="size-full items-center">
                    <icon
                        icon="bi:person-vcard-fill"
                        class="size-full text-base-200/30" />
                </div>
            </CardContent>
        </Card>
    </div>

    <div class="h-[calc(100%-270px)]">
        <DisplayCard>
            <SpellPicker />
        </DisplayCard>

        <!--  <DbRunes :pocket="pocket" /> -->

        <!--    <div class='h-inherit'>
                    <textarea
                        class="peer flex size-full  cursor-pointer items-start overflow-y-scroll rounded-[4px] border border-base-200/40 bg-base-200/25 px-1.5 py-1 align-top text-[10px] font-light leading-3 tracking-[0.015em] outline-none transition-all duration-300 [resize:none] first-line:indent-2 placeholder:italic hover:border-base-300/70 hover:opacity-70 hover:shadow-inner focus:border-base-300/70 focus:opacity-100 focus:shadow-inner"
                        v-model="notesInput" @blur="updateNotes" @click.stop :placeholder="pocket.notes"
                        spellcheck="false">
<icon :icon="pocket.icon" />
                </textarea>
                </div>

                <icon icon="hugeicons:note-01" class='size-3.5 opacity-30 absolute bottom-1.5 right-1.5'
                    :class="{ 'peer-focus:opacity-0': notesInput != '　' && notesInput != '' }" />
                <icon :class="{ 'peer-focus:opacity-40': notesInput != '　' && notesInput != '' }"
                    icon="hugeicons:note-remove" class='size-3.5 opacity-0 absolute bottom-1.5 right-1.5'
                    @click.stop="notesInput = '　'" /> -->
    </div>
</template>

<style scoped>
.text-stroke {
}

.collapse-title {
    @apply flex items-center gap-3 text-sm;

    img {
        @apply -ml-1 size-9 rounded-full border border-neutral/40;
    }

    div {
        @apply flex-grow truncate text-nowrap;
    }

    kbd {
        @apply kbd-sm size-6 font-mono;
    }
}

.collapse-title:has(input[type='radio']:checked) {
}

.ability-wrapper > div {
    @apply border border-neutral/15;
}

.tab-active {
    @apply !z-30 shadow-[6px_4px_5px_1px_oklch(var(--b1))] brightness-[99%];
}

.tab-active:is(:nth-child(3)) {
    @apply !z-30 !shadow-[0px_4px_5px_6px_oklch(var(--b1))] brightness-[99%];
}

.first.tab:is(.tab-active):before {
    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

/*
.last.tab:is(.tab-active):before {
    background-image: var(--radius-start) !important;
    background-position: top left !important;
}*/
</style>
