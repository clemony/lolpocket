<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
    <Sonner
        class="toaster group"
        v-bind="props"
        :toast-options="{
            classes: {
                toast: 'group toast group-[.toaster]:bg-b1/90 backdrop-blur-md group-[.toaster]:text-bc group-[.toaster]:border-b2 group-[.toaster]:shadow-lg',
                description: 'group-[.toast]:text-bc/60',
                actionButton: 'group-[.toast]:bg-accent group-[.toast]:text-bc',
                cancelButton:
                    'group-[.toast]:bg-b2/60 group-[.toast]:text-bc/60',
            },
        }" />
</template>
