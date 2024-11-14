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
    <div class="group/search peer relative flex items-center gap-2 self-center">
        <Icon
            icon="teenyicons:search-outline"
            class="pointer-events-none absolute left-3 top-3 size-3.5 opacity-60" />

        <input
            :placeholder="placeholder"
            :value="search"
            @input="handleInput"
            spellcheck="false"
            class="border-input flex h-10 w-full rounded-md border bg-transparent py-2 pl-9 pr-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/60 hover:ring-1 hover:ring-neutral/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral/40 disabled:cursor-not-allowed disabled:opacity-50"
            @keydown.enter.prevent />

        <button
            v-if="search"
            class="pointer-events-auto absolute right-2 top-1 z-10 text-base-content/60 opacity-0 transition-all duration-300 *:size-3 hover:text-base-content/70 peer-focus:opacity-100"
            @click="$emit('update:search', '')">
            <Icon icon="teenyicons:x-circle-solid" />
        </button>
    </div>

    <!-- <div class="relative w-full max-w-sm items-center">
    <Input id="search" type="text" :placeholder="placeholder" :value="search" @input="handleInput" class="pr-6"
        @keydown.enter.prevent />
    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
        <icon icon="teenyicons:search-outline" class="size-3 text-muted-foreground" />
    </span>

    <button v-if="search"
        class="pointer-events-auto absolute right-2 top-1 z-10 text-base-content/60 opacity-0 transition-all duration-300 *:size-3 hover:text-base-content/70 peer-focus:opacity-100"
        @click="$emit('update:search', '')">
        <Icon icon="teenyicons:x-circle-solid" />
    </button>
</div> -->
</template>
