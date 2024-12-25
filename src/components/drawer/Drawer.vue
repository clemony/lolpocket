<script setup lang="ts">
import { DrawerClose } from '@components/base/drawer'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const drawer = computed(() => {
    return as.drawerValue ? as.drawerValue : null
})
const side = computed(() => {
    return drawer ? drawer.value.direction : ''
})

function onOpenChange() {
    !as.drawerState ? (as.drawerValue = null) : ''
}
</script>
<template>
    <DrawerRoot
        v-if="as.drawerValue"
        v-model:open="as.drawerState"
        :key="drawer.id"
        :direction="side"
        :fixed="true"
        @onOpenChange="onOpenChange">
        <DrawerOverlay class="overflow-hidden" />
        <DrawerContent
            class="pt-3 focus:outline-hidden"
            :class="{
                'justify-center px-[8%]': side == 'bottom',
                'h-screen max-h-screen max-w-127 items-start overflow-hidden pr-10 pl-12':
                    side == 'right',
            }"
            @openAutoFocus.prevent>
            <DrawerHeader
                class="mt-6"
                :class="{
                    'w-1/2 pr-32': side == 'bottom',
                    'items-start': side == 'right',
                }">
                <DrawerTitle>
                    {{ drawer.title }}
                </DrawerTitle>
                <DrawerDescription
                    class="text-3 flex-wrap tracking-tight"
                    :class="{ 'w-1/3': side == 'bottom' }"
                    v-html="drawer.description" />
            </DrawerHeader>
            <component :is="drawer.component" />
            <DrawerFooter class="mt-0 pt-0" v-if="drawer.submitText">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
