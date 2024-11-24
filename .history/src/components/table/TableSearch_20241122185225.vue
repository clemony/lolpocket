<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'

const ps = usePocketStore()
</script>

<template>
    <div
        class="relative -mt-1 flex h-10 min-w-[225px] items-center rounded-md border border-base-200 bg-base-100 focus-within:border-base-300">
        <input
            type="text"
            spellcheck="false"
            v-model="ps.filterText"
            placeholder="Search..."
            class="input input-xs h-full !border-none bg-transparent pl-3 pr-5 !outline-0 !outline-offset-0 !ring-0 !ring-offset-0 [border-image-width:0] focus:!outline-0 focus:!outline-offset-0 focus:!ring-0 focus:!ring-offset-0" />

        <icon
            icon="teenyicons:search-outline"
            :class="{ 'opacity-60': ps.filterText == '' }"
            class="absolute right-2.5 top-[7px] size-4 opacity-0 transition-all duration-300" />
        <button
            :class="{ 'opacity-0': ps.filterText == '' }"
            class="btn btn-square btn-ghost btn-xs pointer-events-auto z-30 transition-all duration-300"
            @click="ps.filterText = ''">
            <icon icon="teenyicons:x-outline" />
        </button>
    </div>
</template>

<style scoped></style>
