<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      key: string
      name: string
      notes?: string // Notes can be undefined
    }
  }
}>()
const ps = usePocketStore()
// Get the pocket by its key
const pocket = getPocket(props.params.data.key)

// Create a local ref for the text input
const notesInput = ref<string>('')

// Update pocket.notes only when the field loses focus
function updateNotes() {
  if (pocket) {
    // pocket.notes = notesInput.value
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
    <PocketMenu
      v-if="pocket"
      :pocket="pocket"
      type="context">
      <textarea
        v-model="notesInput"
        class="peer text-2 hover:border-b3/70 focus:border-b2/40 focus:bg-b2/25 flex size-full cursor-pointer [resize:none] items-start overflow-y-scroll rounded-[4px] border border-transparent bg-transparent px-1.5 py-1 align-top leading-3 tracking-[0.015em] outline-hidden transition-all duration-300 placeholder:font-light hover:opacity-70 hover:shadow-inner focus:opacity-100 focus:shadow-inner"
        placeholder="notes..."
        spellcheck="false"
        @blur="updateNotes"
        @click.stop></textarea>

      <icon
        name="hugeicons:note-01"
        class="absolute right-1.5 bottom-1.5 size-3.5 opacity-30"
        :class="{
          'peer-focus:opacity-0': notesInput != '' && notesInput != '',
        }" />

      <icon
        :class="{
          'peer-focus:opacity-40': notesInput != '' && notesInput != '',
        }"
        name="hugeicons:note-remove"
        class="absolute right-1.5 bottom-1.5 size-3.5 opacity-0"
        @click.stop="notesInput = '　'" />

      <template #first>
        <CmOptionNotes v-model:model="notesInput" />
      </template>
    </PocketMenu>
  </div>
</template>

<style scoped></style>
