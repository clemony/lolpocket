<script setup lang="ts">
import { DrawerClose } from '@components/base/drawer'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
=======
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

const drawer = computed(() => {
    return as.drawerValue ? as.drawerValue : null
})
const side = computed(() => {
    return drawer ? drawer.value.direction : ''
})
</script>
<template>
    <DrawerRoot
        v-if="drawer"
        v-model:open="as.drawerState"
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
