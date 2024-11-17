<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        search?: string
        placeholder?: string
        class?: HTMLAttributes['class']
        iconClass?: HTMLAttributes['class']
        inputClass?: HTMLAttributes['class']
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
    <div :class="cn('relative m-0 p-0', props.class)">
        <Icon
            icon="teenyicons:search-outline"
            :class="
                cn(
                    'pointer-events-none absolute left-2 aspect-square h-full w-auto p-2 opacity-60',
                    props.iconClass
                )
            " />

        <input
            :placeholder="placeholder"
            :value="search"
            @input="handleInput"
            spellcheck="false"
            @keydown.enter.prevent
            :class="
                cn(
                    'inset-0 mx-0 h-full w-full items-center gap-2 self-center overflow-hidden border border-base-200 bg-transparent px-0 transition-opacity duration-300 hover:ring-1 hover:ring-neutral/40 focus:outline-none focus:ring-1 focus:ring-neutral/30 disabled:cursor-not-allowed disabled:opacity-50',
                    props.inputClass
                )
            " />

        <Button
            variant="ghost"
            v-if="search"
            class="pointer-events-auto absolute right-2 z-10 aspect-square !h-full w-auto text-base-content/60 opacity-0 transition-all duration-300 hover:text-base-content/70 peer-focus:opacity-100"
            @click="$emit('update:search', '')">
            <Icon icon="teenyicons:x-circle-solid" />
        </Button>
    </div>
</template>
