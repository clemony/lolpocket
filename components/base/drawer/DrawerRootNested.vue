<script setup lang="ts">
import { useForwardPropsEmits } from 'radix-vue'
import DrawerRoot from './DrawerRoot.vue'
import type { DrawerRootEmits, DrawerRootProps } from './src/controls'
import { injectDrawerRootContext } from './src/context'

const props = defineProps<DrawerRootProps>()
const emits = defineEmits<DrawerRootEmits>()

const { onNestedDrag, onNestedOpenChange, onNestedRelease } =
    injectDrawerRootContext()
function onClose() {
    onNestedOpenChange(false)
}

function onDrag(p: number) {
    onNestedDrag(p)
}

function onOpenChange(o: boolean) {
    if (o) onNestedOpenChange(o)

    emits('update:open', o)
}

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <DrawerRoot
        v-bind="forwarded"
        nested
        @close="onClose"
        @drag="onDrag"
        @release="onNestedRelease"
        @update:open="onOpenChange">
        <slot />
    </DrawerRoot>
</template>
