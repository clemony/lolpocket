<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        search?: string
        placeholder?: string
        class?: HTMLAttributes['class']
        iconClass?: HTMLAttributes['class']
    }>(),
    {
        placeholder: 'Search',
    }
)

const emit = defineEmits(['update:search'])

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (target) {
        emit('update:search', target.value)
    }
}
</script>

<template>
    <div :class="cn('join relative flex', props.class)">
        <Icon
            icon="teenyicons:search-outline"
            class="join-item pointer-events-none aspect-square h-full w-auto shrink-0 p-1 opacity-60" />

        <input
            :placeholder="placeholder"
            :value="search"
            @input="handleInput"
            spellcheck="false"
            class="hover:ring-neutral/5disabled:cursor-not-allowed h-full w-full items-center gap-2 self-center rounded-md border border-base-200 focus-within:outline-none focus-within:ring-1 focus-within:ring-neutral/40 hover:ring-1 disabled:opacity-50"
            @keydown.enter.prevent />

        <Button
            variant="ghost"
            v-if="search"
            class="join-item pointer-events-auto z-10 text-base-content/60 opacity-0 transition-all duration-300 *:size-4 hover:text-base-content/70 peer-focus:opacity-100"
            @click="$emit('update:search', '')">
            <Icon icon="teenyicons:x-circle-solid" />
        </Button>
    </div>
</template>
