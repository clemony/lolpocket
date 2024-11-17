<script setup lang="ts">
import { usePocketStore } from '@/Stores/pocketStore'
import { ContextMenuTrigger } from 'radix-vue'

const ps = usePocketStore()
const props = defineProps<{
    params: {
        data: {
            key: string
            name: string
            notes?: string // Notes can be undefined
        }
    }
}>()

// Get the pocket by its key
const pocket = ps.getPocket(props.params.data.key)

// Create a local ref for the text input
const notesInput = ref<string>('')

// Initialize notesInput when the component is mounted
onMounted(() => {
    if (pocket?.notes) {
        notesInput.value = pocket.notes
    }
})

// Watch for changes to pocket.notes and update notesInput accordingly
watch(
    () => pocket?.notes,
    (newNotes) => {
        if (newNotes !== undefined) {
            notesInput.value = newNotes
        }
    }
)

// Update pocket.notes only when the field loses focus
function updateNotes() {
    if (pocket) {
        pocket.notes = notesInput.value
        ps.$persist()
    }
}
</script>

<template>
<div v-if="pocket" :class="{ 'opacity-100': pocket.notes?.length > 0 }" alt="add note" class="relative size-full p-0.5">
    <context-menu>
        <context-menu-trigger>
            <textarea
                class="peer flex size-full cursor-pointer items-start overflow-y-scroll rounded-[4px] border border-transparent bg-transparent focus:border-base-200/40 focus:bg-base-200/25 px-1.5 py-1 align-top text-sm  leading-3 tracking-[0.015em] outline-none transition-all duration-300 [resize:none]  placeholder:font-light  hover:border-base-300/70 hover:opacity-70 hover:shadow-inner focus:opacity-100 focus:shadow-inner"
                v-model="notesInput" @blur="updateNotes" @click.stop placeholder="notes..." spellcheck="false">
                </textarea>

            <icon icon="hugeicons:note-01" class="absolute bottom-1.5 right-1.5 size-3.5 opacity-30" :class="{
                'peer-focus:opacity-0':
                    notesInput != '' && notesInput != '',
            }" />
            <icon :class="{
                'peer-focus:opacity-40':
                    notesInput != '' && notesInput != '',
            }" icon="hugeicons:note-remove" class="absolute bottom-1.5 right-1.5 size-3.5 opacity-0"
                @click.stop="notesInput = '　'" />

            <CmPocket :pocketKey="pocket.key">
                <CmOptionNotes v-model:model="notesInput" />
            </CmPocket>
        </context-menu-trigger>
    </context-menu>
</div>
</template>

<style scoped></style>
