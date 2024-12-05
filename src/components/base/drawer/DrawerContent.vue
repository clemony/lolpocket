<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@lib/utils'
import { useForwardPropsEmits } from 'radix-vue'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import DrawerOverlay from './DrawerOverlay.vue'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
const props = defineProps<
    DialogContentProps & { class?: HtmlHTMLAttributes['class'] }
>()
const emits = defineEmits<DialogContentEmits>()
const side = ref(gs.drawerValue.direction)
const forwarded = useForwardPropsEmits(props, emits)

onBeforeUpdate(async () => {
    await gs.drawerValue.direction
    side.value = gs.drawerValue.direction
})
</script>

<template>
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent
            v-bind="forwarded"
            :class="
                cn(
                    'fixed z-50 flex flex-col rounded-xl bg-base-100',
                    props.class,
                    {
                        'inset-x-0 bottom-0 mt-24 h-auto overflow-hidden':
                            side == 'bottom',
                    },
                    {
                        'inset-y-0 bottom-0 right-0 w-auto': side == 'right',
                    }
                )
            ">
            <div
                class="rounded-full bg-base-200"
                :class="{
                    'absolute bottom-1/2 left-5 top-1/2 my-auto h-[100px] w-2':
                        side == 'right',
                    'mx-auto mt-4 h-2 w-[100px]': side == 'bottom',
                }" />

            <slot />
        </DrawerContent>
    </DrawerPortal>
</template>
