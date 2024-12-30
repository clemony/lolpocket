<script setup lang="ts">
import { DrawerClose } from '@components/base/drawer'
import PocketDrawer from '@components/drawer/PocketDrawer.vue'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()

const drawer = computed(() => {
    return ts.drawerValue ? ts.drawerValue : null
})
const side = computed(() => {
    return drawer ? drawer.value.direction : ''
})

const childRef = ref()

watch(
    () => ts.drawerState,
    (newVal) => {
        if (!newVal) {
            ts.drawerValue = null
            ts.drawerPocket = null
            //childRef.value.clearForm()
            childRef.value.name = ''
            console.log('💠 - onOpenChange - ts.drawerPocket:', ts.drawerPocket)
        }
    }
)
</script>
<template>
    <DrawerRoot
        v-if="ts.drawerValue"
        v-model:open="ts.drawerState"
        :key="drawer.id"
        :direction="side"
        :fixed="true">
        <DrawerOverlay class="overflow-hidden" @click.stop.prevent />
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
            <component :is="drawer.component" ref="childRef" />
            <DrawerFooter class="mt-0 pt-0" v-if="drawer.submitText">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
