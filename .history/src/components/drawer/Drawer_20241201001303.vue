<script setup lang="ts">
import { DrawerClose } from 'vaul-vue'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>
<template>
    <DrawerRoot v-model:open="gs.drawerState" :key="gs.drawerValue.id">
        <DrawerContent
            class="flex w-full justify-center px-[8%] pt-3 focus:outline-none"
            @openAutoFocus.prevent>
            <DrawerHeader class="mt-6 w-1/2 pr-32">
                <DrawerTitle>
                    {{ gs.drawerValue.title }}
                </DrawerTitle>
                <DrawerDescription
                    class="flex-wrap text-base"
                    v-html="gs.drawerValue.description" />
            </DrawerHeader>
            <component
                :is="gs.drawerValue.component"
                :submitText="gs.drawerValue.submitText" />
            <DrawerFooter class="mt-0 pt-0">
                <DrawerClose class="-mt-1 flex justify-end pr-24">
                    <Button
                        variant="outline"
                        size="md"
                        class="flex items-end text-base">
                        Cancel
                    </Button>
                    <slot name="submit-button" />
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </DrawerRoot>
</template>
<style scoped></style>
