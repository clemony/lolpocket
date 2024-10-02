<script setup lang="ts">
const props = defineProps<{
    search: string;
    placeholder: string;
}>();

const emit = defineEmits(['update:search']);

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
        emit('update:search', target.value);
    }
}

</script>

<template>

    <div
        class="relative flex items-center self-center gap-2 px-3 transition-all duration-700 border border-transparent rounded-full group/search peer focus-within:border-base-300 mx-2 py-0.5">

        <Icon icon="teenyicons:search-outline" class="absolute pointer-events-none size-3 left-1.5 top-1" />

        <input :placeholder="placeholder" :value="search" @input="handleInput" spellcheck="false"
            class="w-full h-full text-xs !outline-none !outline-0 !outline-transparent ring-0  font-medium placeholder:text-base-content p-0 bg-transparent placeholder:text-xs select-all border border-transparent peer pl-4"
            @keydown.enter.prevent />

        <button v-if="search"
            class="pointer-events-auto z-10 hover:text-base-content/70 text-base-content/60 transition-all duration-300 opacity-0 peer-focus:opacity-100 *:size-3  right-2 top-1 absolute"
            @click="$emit('update:search', '')">
            <Icon icon="teenyicons:x-circle-solid" />
        </button>



    </div>
</template>
