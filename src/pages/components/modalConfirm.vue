<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
    title?: string
}>()

const emit = defineEmits<{
    (e: 'confirm'): void
}>()
</script>

<template>
    <VueFinalModal class="flex justify-center items-center"
        content-class="flex flex-col max-w-xl mx-4 p-6 bg-base-100/80 backdrop-blur-md  border border-base-300 rounded-box shadow-cham space-y-2">
        <h1 class="text-lg font-semibold tracking-tight">
            {{ title }}
        </h1>
        <slot />
        <!--  <button class="mt-1 ml-auto btn btn-sm" @click="emit('confirm')">
            Got it!
        </button> -->
    </VueFinalModal>
</template>
