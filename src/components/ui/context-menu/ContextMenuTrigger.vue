<script setup lang="ts">
import {
    ContextMenuTrigger,
    type ContextMenuTriggerProps,
    useForwardProps,
} from 'radix-vue'
import { defineEmits } from 'vue'

const props = defineProps<ContextMenuTriggerProps>()
const emit = defineEmits(['close']) // Define a custom event

const forwardedProps = useForwardProps(props)

// Emit close event when the trigger is clicked (example behavior)
function handleClose() {
    emit('close')
}
</script>

<template>
    <ContextMenuTrigger v-bind="forwardedProps" @click="handleClose">
        <slot />
    </ContextMenuTrigger>
</template>
