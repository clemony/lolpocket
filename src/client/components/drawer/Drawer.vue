<script setup lang="ts">
import { DrawerClose } from '@/client/components/base/drawer'
import { useGeneralStore } from '@/client/stores/generalStore'
const gs = useGeneralStore()

const drawer = computed(() => {
    return gs.drawerValue ? gs.drawerValue : null
})
const side = computed(() => {
    return drawer ? drawer.value.direction : ''
})
</script>
<template>
    <DrawerRoot
        v-if="drawer"
        v-model:open="gs.drawerState"
        :key="drawer.id"
        :direction="side"
        :fixed="true">
        <DrawerOverlay class="overflow-hidden rounded-[0.95rem]" />
        <DrawerContent
            class="pt-3 focus:outline-hidden"
            :class="{
                'justify-center px-[8%]': side == 'bottom',
                'items-start px-8': side == 'right',
            }"
            @openAutoFocus.prevent>
            <DrawerHeader
                class="mt-6"
                :class="{
                    'w-1/2 pr-32': side == 'bottom',
                    'w-full items-start': side == 'right',
                }">
                <DrawerTitle>
                    {{ drawer.title }}
                </DrawerTitle>
                <DrawerDescription
                    class="text-3 flex-wrap tracking-tight"
                    :class="{ 'w-1/3': side == 'bottom' }"
                    v-html="drawer.description" />
            </DrawerHeader>
            <component :is="drawer.component" :submitText="drawer.submitText" />
            <DrawerFooter class="mt-0 pt-0">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
