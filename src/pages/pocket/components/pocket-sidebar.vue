<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useChampStore } from '../../../stores/champStore'
import { useItemStore } from '../../../stores/itemStore'
import { usePocketStore } from '../../../stores/pocketStore'
import TableName from '../../pockets/table/table-name.vue'
import { useGeneralStore } from '../../../stores/generalStore'
import TableIcon from '../../pockets/table/table-icon.vue'
import TableIconCopy from '../../pockets/table/table-icon copy.vue'
import type { pocket } from '../../../../types'

const gs = useGeneralStore()
const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey)) as unknown as pocket

const cs = useChampStore()
const is = useItemStore()

const bgColor = computed(() => {
    if (pocket) {
        return pocket.bgColor
    }
})
const iconColor = computed(() => {
    if (pocket) {
        return pocket.iconColor
    }
})
const emit = defineEmits(['update:bgColor', 'update:iconColor'])

// Watch for local `bgColor` and `iconColor` changes to update `pocket`
watch(
    () => bgColor.value,
    (newVal) => {
        if (pocket) {
            pocket.bgColor = newVal as string
        }
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        if (pocket) {
            pocket.iconColor = newVal as string
        }
    }
)

watch(
    () => bgColor.value,
    (newVal) => {
        if (pocket) {
            pocket.bgColor = newVal as string
        } else {
            emit('update:bgColor', newVal)
        }
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        if (pocket) {
            pocket.iconColor = newVal as string
        } else {
            emit('update:iconColor', newVal)
        }
    }
)

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
</script>
<template>
    <div
        v-if="pocket"
        class="grid grid-cols-1 grid-rows-[min-content_1fr_min-content] !max-h-full mt-2 gap-4">
        <div
            class="grid w-full grid-cols-[1fr_3fr] px-1 py-3 border h-28 rounded-box border-base-300/70 shadow-inset-sm bg-base-100/80">
            <TableIconCopy :pocketKey="pocket.key" type="round" />

            <div class="relative">
                <input
                    v-model="pocket.name"
                    class="align-baseline capitalize text-base h-6 truncate transition-all duration-300 bg-transparent px-[4px] font-semibold border border-transparent focus:border hover:border focus:border-base-300/50 hover:border-base-300/50 outline-none ring-0 peer py-1 rounded-xs w-full hover:!cursor-text z-0"
                    @keydown.enter.prevent="gs.loseFocus"
                    spellcheck="false" />

                <!-- 
                    <icon icon='basil:edit-alt-solid'
                        class="absolute opacity-0 group-hover/name:opacity-50 w-3.5 right-[4px] top-[2px] peer-focus:opacity-0 bg-base-100 h-full brightness-95 z-0" /> -->

                <button
                    @click="pocket.name = ''"
                    class="size-4 opacity-0 peer-focus:opacity-70 group-hover/name:opacity-70 h-full w-4.5 absolute right-[0px] z-10 hover:cursor-pointer hover:opacity-90 -top-[3px] *:absolute">
                    <icon icon="teenyicons:x-small-outline" />
                </button>

                <div class="flex self-start pl-1 pr-2 text-xs">
                    <SelectClass :pocketKey="pocket.key" class="w-full" />
                </div>
            </div>
        </div>
    </div>

    <div
        role="tablist"
        class="grid grid-rows-[28px_auto] w-full h-full [&_.tab]:!border-b-transparent [&_.tab-content]:!z-0 [&_.tab]:!z-30 relative tabs tabs-lifted *:text-xs border-base-300/70 [&_.tab]:h-7 [&_.tab]:font-medium overflow-y-scroll scrollbar-hide">
        <!------------------------⟢ hidden ⟣------------------------>
        <!-- 
            <label role="tab" class="hidden tab">
                <input type="radio" class="hidden peer" name="cTabs">
            </label>
            <div role="tabpanel" class="hidden">
            </div> -->

        <!----------------------⟢ stats ⟣---------------------------->

        <label role="tab" class="tab first">
            <input
                type="radio"
                class="hidden peer"
                name="cTabs"
                value="stats" />
            Stats
        </label>

        <div
            role="tabpanel"
            class="w-full p-6 rounded-tl-none min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm">
            Tab content 1
        </div>

        <!------------------------⟢ abilities ⟣--------------------------->

        <label role="tab" class="!z-20 tab">
            <input
                type="radio"
                class="hidden peer"
                name="cTabs"
                value="abilities" />
            Abilities
        </label>

        <div
            role="tabpanel"
            class="top-0 !z-0 min-w-[298px] shadow-inset-sm tab-content border-base-300/70 rounded-box bg-base-100/80">
            hi
        </div>

        <!------------------------⟢ items ⟣------------------------->

        <label role="tab" class="w-full tab last tab-active">
            <input
                type="radio"
                class="hidden peer"
                name="cTabs"
                value="items" />
            Notes
        </label>

        <div
            role="tabpanel"
            class="tab-content min-w-[298px] !w-full !h-[calc(100%-160px)] p-3 border-base-300/70 self-start rounded-box bg-base-100/80 shadow-inset-sm">
            <textarea
                class="overflow-y-scroll py-1 px-1.5 tracking-[0.015em] font-light rounded-[4px] [resize:none] text-[10px] flex leading-3 items-start align-top outline-none placeholder:italic first-line:indent-2 focus:opacity-100 size-full peer border-base-200/40 border transition-all duration-300 bg-base-200/25 cursor-pointer hover:opacity-70 hover:border-base-300/70 focus:border-base-300/70 hover:shadow-inner focus:shadow-inner"
                v-model="notesInput"
                @blur="updateNotes"
                @click.stop
                placeholder=""
                spellcheck="false">


            <icon icon="hugeicons:note-01" class='size-3.5 opacity-30 absolute bottom-1.5 right-1.5'
            :class="{ 'peer-focus:opacity-0': notesInput != '　' && notesInput != '' }" />
        <icon :class="{ 'peer-focus:opacity-40': notesInput != '　' && notesInput != '' }"
            icon="hugeicons:note-remove" class='size-3.5 opacity-0 absolute bottom-1.5 right-1.5'
            @click.stop="notesInput = '　'" />
</textarea
            >
        </div>
    </div>
</template>

<style scoped>
.collapse-title {
    @apply text-sm flex gap-3 items-center;

    img {
        @apply rounded-full border border-neutral/40 size-9 -ml-1;
    }

    div {
        @apply flex-grow text-nowrap truncate;
    }

    kbd {
        @apply kbd-sm text-xs font-mono size-6;
    }
}

.collapse-title:has(input[type='radio']:checked) {
}

.ability-wrapper > div {
    @apply border-neutral/15 border;
}

.tab-active {
    @apply brightness-[99%] shadow-[6px_4px_5px_1px_oklch(var(--b1))] !z-30;
}

.tab-active:is(:nth-child(3)) {
    @apply brightness-[99%] !shadow-[0px_4px_5px_6px_oklch(var(--b1))] !z-30;
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
