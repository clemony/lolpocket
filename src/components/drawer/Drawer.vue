<script setup lang="ts">
import { DrawerClose } from '@components/base/drawer'
import { useAccountStore } from '@stores/accountStore'
import { DrawerPortal } from '@components/base/drawer'
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

//drawer.isAllowedToDrag.value = isDragEnabled.value
</script>
<template>
    <DrawerRoot
        v-if="ts.drawerValue"
        v-model:open="ts.drawerState"
        :key="drawer.id"
        :fixed="true"
        handle-only
        shouldScaleBackground
        direction="right">
        <DrawerPortal>
            <DrawerOverlay
                class="fixed inset-0 bg-black/70"
                @click.stop.prevent />
            <DrawerContent
                @openAutoFocus.prevent
                class="bg-b1 text-bc fixed inset-y-0 right-0 flex w-auto flex-col items-center rounded-lg px-12 py-5">
                <DrawerHeader>
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
        </DrawerPortal>
    </DrawerRoot>
</template>
<style scoped></style>

class="absolute top-0 right-0 pt-3 focus:outline-hidden" :class="{
'justify-center px-[8%]': side == 'bottom', 'h-screen max-h-screen max-w-fit
items-start overflow-hidden pr-0 pl-16': side == 'right', }" class="mt-6"
:class="{ 'w-1/2 pr-32': side == 'bottom', 'items-start': side == 'right', }"
