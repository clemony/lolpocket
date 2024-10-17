<script setup lang="ts">
import { usePocketStore } from '../../../stores/pocketStore';


const ps = usePocketStore();





</script>

<template>
    <div
        class="relative flex h-8 -mt-1 border rounded-md min-w-[225px] border-base-200 bg-base-100 focus-within:border-base-300 items-center">

        <input type="text" spellcheck='false' v-model="ps.filterText" placeholder="Search..."
            class="input input-xs bg-transparent pl-3 pr-5 text-xs !outline-0 h-full !ring-offset-0 !ring-0 focus:!outline-0 focus:!ring-0 [border-image-width:0] !outline-offset-0 focus:!outline-offset-0 focus:!ring-offset-0 !border-none" />

        <icon icon="teenyicons:search-outline" :class="{ 'opacity-60': ps.filterText == '' }"
            class='transition-all duration-300 absolute right-2.5 top-[7px] size-3.5 opacity-0' />
        <button :class="{ 'opacity-0': ps.filterText == '' }"
            class="z-30 transition-all duration-300 pointer-events-auto btn btn-ghost btn-xs btn-square"
            @click="ps.filterText = ''">
            <icon icon="teenyicons:x-outline" />
        </button>
    </div>
</template>

<style scoped></style>