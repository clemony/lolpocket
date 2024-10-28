<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { useGeneralStore } from '@stores/generalStore'

const gs = useGeneralStore()
const sn = useSessionStore()

function handleChange() {
    if (gs.isMinimized == true) {
        gs.firstPane = 3
        gs.secondPane = 97
    } else {
        gs.firstPane = 16
        gs.secondPane = 84
    }
}
</script>

<template>
<div class="group/name z-0 flex cursor-pointer pl-2  shrink-0 rounded-full m-2" :class="{
    '!mb-2 ml-[2px] !aspect-square !size-9 overflow-hidden bg-neutral text-neutral-content/80':
        gs.isMinimized == true,
}">
    <div :class="{ 'ml-0 size-full p-2': gs.isMinimized }"
        class="toggle-btn flex w-[97%] cursor-pointer items-center transition-all duration-700">


        <label v-if="!gs.isMinimized" class="group relative z-20 flex size-full items-center justify-start gap-3">

            <input type="checkbox" v-model="gs.isMinimized" class="hidden" @change="handleChange" />

            <h1 class="grow  text-start !text-base font-semibold">
                lolpocket
            </h1>
            <icon icon="teenyicons:send-left-outline"
                class="!size-4 opacity-30 transition-all duration-300 group-hover:opacity-100" />


        </label>


        <label class='size-full' v-if="gs.isMinimized">
            <input type="checkbox" v-model="gs.isMinimized" class="hidden" @change="handleChange" />

            <h1
                class="transition-translate size-full font-light text-neutral-content !duration-200 group-hover/name:-translate-x-10 group-hover/name:opacity-0">
            </h1>
            <icon icon="teenyicons:send-right-outline"
                class="transition-translate left-[8px] !size-4 translate-x-10 text-neutral-content opacity-0 !duration-200 group-hover/name:translate-x-0 group-hover/name:opacity-100" />


        </label>


    </div>
</div>
</template>

<style scoped></style>