<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useChampStore } from '@stores/champStore'
import { useItemStore } from '@stores/itemStore'
import { usePocketStore } from '@stores/pocketStore'
import type { pocket } from 'types'
import { clean, blur } from '@utils/utils'

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

const sTabs = ref('sTabs')
</script>
<template>
<div v-if="pocket" :key="pocket.key"
    class="mt-2 grid !max-h-full grid-cols-1 grid-rows-[min-content_1fr_min-content] gap-4">
    <div
        class="shadow-inset-sm grid  w-full grid-cols-[1fr_3fr] rounded-box border border-base-300/70 bg-base-100/80 px-1 py-3">
        <PocketIcon :pocketKey="pocket.key" class=' self-start' />

        <div class="relative pr-2">
            <div class='text-[11px] '>Pocket Name</div>
            <input v-model="pocket.name"
                class="peer z-0 h-6 w-full truncate rounded-xs border border-transparent bg-transparent mb-1 py-1 align-baseline text-base font-semibold capitalize outline-none ring-0 transition-all duration-300 hover:!cursor-text hover:border hover:border-base-300/50 focus:border focus:border-base-300/50"
                @keydown.enter.prevent="blur" spellcheck="false" />

            <!-- 
                    <icon icon='basil:edit-alt-solid'
                        class="absolute opacity-0 group-hover/name:opacity-50 w-3.5 right-[4px] top-[2px] peer-focus:opacity-0 bg-base-100 h-full brightness-95 z-0" /> -->

            <button @click="pocket.name = ''"
                class="absolute -top-[3px] right-[0px] z-10 size-4 h-full w-4.5 opacity-0 *:absolute hover:cursor-pointer hover:opacity-90 group-hover/name:opacity-70 peer-focus:opacity-70">
                <icon icon="teenyicons:x-small-outline" />
            </button>

            <div class="flex self-start  ">
                <SelectClass :pocketKey="pocket.key" class="w-full" />
            </div>
        </div>
    </div>

    <div class="shadow-sm w-full h-32 rounded-box border border-base-300 bg-base-100/80 overflow-hidden">
        <KinesisContainer v-if="pocket.champions[0].starred" :perspective="100"
            class="shadow-inset-sm  size-full overflow-hidden">

            <KinesisElement type="depth" :strength="1" class='  relative z-0 size-full bg-auto bg-[50%_15%]'
                :class="`after:content-[${pocket.champions[0].starred}]`" :style="{
                    backgroundImage: `url(\'/img/champions/splash/${clean(pocket.champions[0].starred)}_0.webp\'`,
                }">




            </KinesisElement>
            <div class=' absolute bottom-1 right-2'>
                <div
                    class='badge badge-ghost badge-md italic font-semibold tracking-tighter antialiased opacity-80 font-mono'>
                    {{
                        pocket.champions[0].starred }}
                </div>
            </div>
        </KinesisContainer>
    </div>
</div>

<div class="h-[calc(100%-270px)]">
    <TabList :defaultTab="2" :modelName="sTabs">

        <Tab :value="1">

            <template #header>
                hi
                <input type="radio" class="peer hidden" name="sTabs" v-model="sTabs" value="hi" />
            </template>
            <template #content>
            </template>

        </Tab>



        <Tab :value="2">

            <template #header>
                Notes
                <input type="radio" v-model="sTabs" class="peer hidden" name="sTabs" value="notes" />
            </template>
            <template #content>
                <div class='h-inherit'>
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
                    @click.stop="notesInput = '　'" />
            </template>
        </Tab>


        <Tab :value="3">

            <template #header>
                hi
                <input type="radio" v-model="sTabs" class="peer hidden" name="sTabs" value="zhi" />
            </template>
            <template #content>
            </template>

        </Tab>

    </TabList>
</div>
</template>

<style scoped>
.text-stroke {}

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

.collapse-title:has(input[type='radio']:checked) {}

.ability-wrapper>div {
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
