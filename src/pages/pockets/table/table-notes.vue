<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { usePocketStore } from '../../../stores/pocketStore'
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
    <div
        v-if="pocket"
        :class="{ 'opacity-100': pocket.notes?.length > 0 }"
        alt="add note"
        class="relative size-full p-0.5">
        <context-menu>
            <context-menu-trigger>
                <textarea
                    class="overflow-y-scroll py-1 px-1.5 tracking-[0.015em] font-light rounded-[4px] [resize:none] text-[10px] flex leading-3 items-start align-top outline-none placeholder:italic first-line:indent-2 focus:opacity-100 size-full peer border-base-200/40 border transition-all duration-300 bg-base-200/25 cursor-pointer hover:opacity-70 hover:border-base-300/70 focus:border-base-300/70 hover:shadow-inner focus:shadow-inner"
                    v-model="notesInput"
                    @blur="updateNotes"
                    @click.stop
                    placeholder=""
                    spellcheck="false">
                </textarea>

                <icon
                    icon="hugeicons:note-01"
                    class="size-3.5 opacity-30 absolute bottom-1.5 right-1.5"
                    :class="{
                        'peer-focus:opacity-0':
                            notesInput != '　' && notesInput != '',
                    }" />
                <icon
                    :class="{
                        'peer-focus:opacity-40':
                            notesInput != '　' && notesInput != '',
                    }"
                    icon="hugeicons:note-remove"
                    class="size-3.5 opacity-0 absolute bottom-1.5 right-1.5"
                    @click.stop="notesInput = '　'" />

                <table-context-menu :pocketKey="pocket.key">
                    <template #first>
                        <context-menu-item
                            @click.stop="notesInput = '　'"
                            class="-ml-0.5">
                            <icon icon="ph:eraser" class="size-4" />

                            <span class="-ml-1"> Clear Note</span>
                        </context-menu-item>
                        <context-menu-separator />
                    </template>
                </table-context-menu>
            </context-menu-trigger>
        </context-menu>
    </div>
</template>

<style scoped></style>
