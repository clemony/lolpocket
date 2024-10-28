<script setup lang="ts">
const props = defineProps<{
    search: string
    placeholder: string
}>()

const emit = defineEmits(['update:search'])

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (target) {
        emit('update:search', target.value)
    }
}
</script>

<template>
<div
    class="group/search peer relative mx-2 flex items-center gap-2 self-center rounded-full border border-transparent px-3 py-0.5 transition-all duration-700 focus-within:border-base-300">
    <Icon icon="teenyicons:search-outline" class="pointer-events-none absolute left-1.5 top-1 size-3" />

    <input :placeholder="placeholder" :value="search" @input="handleInput" spellcheck="false"
        class="peer h-full w-full select-all border border-transparent bg-transparent p-0 pl-4  font-medium !outline-none !outline-0 !outline-transparent ring-0 placeholder: placeholder:text-base-content"
        @keydown.enter.prevent />

    <button v-if="search"
        class="pointer-events-auto absolute right-2 top-1 z-10 text-base-content/60 opacity-0 transition-all duration-300 *:size-3 hover:text-base-content/70 peer-focus:opacity-100"
        @click="$emit('update:search', '')">
        <Icon icon="teenyicons:x-circle-solid" />
    </button>
</div>
</template>
