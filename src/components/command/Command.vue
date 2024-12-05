<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
const emit = defineEmits(['update:open'])

const searchQuery = ref('')
function onClose() {
    gs.commandOpen = false
    emit('update:open', false)
}
</script>

<template>
    <div class="relative size-full" @click="onClose">
        <div
            class="absolute left-[35%] top-[23%] w-1/3 max-w-[450px] !rounded-2xl border border-base-200 bg-base-100/85 p-0 backdrop-blur-md focus-within:outline-none focus-within:ring-1 focus-within:ring-neutral/30 hover:ring-1 hover:ring-neutral/40">
            <SearchBox
                class="h-16 w-full"
                inputClass="rounded-[1rem] pl-14 text-lg pt-1.5 align-baseline focus:!ring-0 focus:!outline-0"
                iconClass="p-5 left-0"
                @update:search="(v) => (searchQuery = v)" />
        </div>
    </div>
</template>

<style scoped></style>
