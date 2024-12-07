<script setup lang="ts">
import { DrawerClose } from '@/components/base/drawer'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const side = ref(gs.drawerValue.direction)
</script>
<template>
    <DrawerRoot
        v-model:open="gs.drawerState"
        :key="gs.drawerValue.id"
        :direction="gs.drawerValue.direction"
        :fixed="true">
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
                    {{ gs.drawerValue.title }}
                </DrawerTitle>
                <DrawerDescription
                    class="text-3 flex-wrap tracking-tight"
                    :class="{ 'w-1/3': side == 'bottom' }"
                    v-html="gs.drawerValue.description" />
            </DrawerHeader>
            <component
                :is="gs.drawerValue.component"
                :submitText="gs.drawerValue.submitText" />
            <DrawerFooter class="mt-0 pt-0">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
