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
                    'pointer-events-none absolute left-2 aspect-square h-full w-auto p-2 opacity-40',
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
                    'inset-0 mx-0 flex h-full w-full gap-2 self-center overflow-hidden border border-base-200 bg-transparent px-0 pb-0 pt-2px text-base tracking-normal shadow-inner transition-opacity duration-300 placeholder:text-base placeholder:tracking-normal hover:ring-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
                    props.inputClass
                )
            " />

        <Button
            variant="ghost"
            v-if="search"
            class="pointer-events-auto absolute right-2 z-10 aspect-square !h-full text-base-content/60 opacity-0 transition-all duration-300 hover:text-base-content/70 peer-focus:opacity-100"
            @click="$emit('update:search', '')">
            <Icon
                icon="teenyicons:x-circle-solid"
                class="!h-full w-auto shrink-0" />
        </Button>
    </div>
</template>
