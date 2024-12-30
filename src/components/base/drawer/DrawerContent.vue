<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@lib/utils'
import { useForwardPropsEmits } from 'radix-vue'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import DrawerOverlay from './DrawerOverlay.vue'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const props = defineProps<
    DialogContentProps & { class?: HtmlHTMLAttributes['class'] }
>()
const emits = defineEmits<DialogContentEmits>()
const side = ref(ts.drawerValue.direction)
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent
            v-bind="forwarded"
            :class="
                cn(
                    'bg-b1 text-bc fixed z-50 flex flex-col rounded-xl',
                    props.class,
                    {
                        'inset-x-0 bottom-0 mt-24 h-auto overflow-hidden':
                            side == 'bottom',
                    },
                    {
                        'inset-y-0 right-0 bottom-0 w-auto': side == 'right',
                    }
                )
            ">
            <div
                class="bg-b2 rounded-full"
                :class="{
                    'absolute top-1/2 bottom-1/2 left-5 my-auto h-[100px] w-2':
                        side == 'right',
                    'mx-auto mt-4 h-2 w-[100px]': side == 'bottom',
                }" />

            <slot />
        </DrawerContent>
    </DrawerPortal>
</template>
