<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
    search: string
    placeholder?: string
  class?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']

}>(),{
    placeholder: 'Search'
})

const emit = defineEmits(['update:search'])

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (target) {
        emit('update:search', target.value)
    }
}
</script>

<template>
    <div class="group/search peer relative flex items-center gap-2 self-center hover:ring-1 hover:ring-neutral/5 focus-within:outline-none focus-within:ring-1 focus-within:ring-neutral/40">
        <Icon
            icon="teenyicons:search-outline"
            class="pointer-events-none  border-base-200 p-1 h-full w-auto aspect-square shrink-0 opacity-60 border rounded-md " />

        <input
            :placeholder="placeholder"
            :value="search"
            @input="handleInput"
            spellcheck="false"
            :class="cn(' flex h-10 w-full border-0 bg-transparent  text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-0 placeholder:text-base-content/60  disabled:cursor-not-allowed disabled:opacity-50', props.class)"
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
