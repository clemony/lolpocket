<script setup lang="ts">
import { useGeneralStore } from '@/client/stores/generalStore'
import { useParallax } from '@vueuse/core'
import { CSSProperties } from 'vue'

const gs = useGeneralStore()

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))

const wrapperStyle: CSSProperties = {
    minHeight: '500px',
    transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
    //margin: '3em auto',
    perspective: '700px',
}

const pageStyle = computed(() => ({
    transition: '.3s ease-out all',
    transform: `rotateX(${parallax.roll * 1}deg) rotateY(${
        parallax.tilt * 5
    }deg)`,
}))
</script>
<template>
    <div
        v-show="gs.commandOpen"
        class="command margin-auto animate-in fade-in-100 slide-in-from-bottom z-100 mt-24 overflow-hidden rounded-lg delay-100">
        <Command />
    </div>
    <div
        ref="wrapper"
        :style="gs.commandOpen ? wrapperStyle : ''"
        :class="{
            'absolute top-[38%] size-full items-end justify-center':
                gs.commandOpen,
        }">
        <div
            :style="containerStyle"
            :class="{
                'inset-0 m-0 flex size-full flex-col items-center justify-center -space-y-[42%] overflow-hidden rounded-lg':
                    gs.commandOpen,
            }">
            <template v-if="gs.commandOpen">
                <div
                    v-for="(page, index) in gs.routeHistory"
                    ref="page"
                    :style="pageStyle"
                    :class="
                        cn(
                            /*base */
                            'bg-b1 top-1/2 z-0 size-3/4 overflow-hidden rounded-2xl',

                            /* children */
                            '[&_nth-child(2)]:-top-10',

                            /* animation */
                            'animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/2 slide-out-to-bottom-1/2 delay-200',

                            /* styling */
                            'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5'
                        )
                    ">
                    <div class="flex h-18 items-center px-10">
                        <h1 class="capitalize">{{ page }}</h1>
                    </div>
                </div>
            </template>
            <label
                class="flex size-full justify-center overflow-hidden rounded-2xl"
                :class="{
                    absolute: gs.commandOpen,
                }"
                :style="gs.commandOpen ? pageStyle : ''">
                <input
                    type="checkbox"
                    v-model="gs.commandOpen"
                    class="hidden"
                    name="history"
                    :disabled="!gs.commandOpen ? true : false" />

                <SidebarProvider
                    class="page bg-b1/95 relative size-full overflow-hidden rounded-2xl transition-all duration-1000"
                    :class="
                        cn({
                            /*base */
                            'bg-b1 top-1/2 z-0 overflow-hidden rounded-2xl':
                                gs.commandOpen,

                            /* styling */
                            'shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5':
                                gs.commandOpen,
                        })
                    ">
                    <slot />
                </SidebarProvider>
            </label>
        </div>
    </div>
</template>
<style scoped></style>
