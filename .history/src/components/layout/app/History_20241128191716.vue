<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { useParallax } from '@vueuse/core'
import { CSSProperties } from 'vue'
const gs = useGeneralStore()

const target = ref(null)
const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
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

const nottStyle: CSSProperties = {
    display: 'flex',
}
</script>
<template>
    <div
        data-tauri-drag-region
        v-show="gs.commandOpen"
        class="command margin-auto z-[100] mt-24 delay-100 animate-in fade-in-100 slide-in-from-bottom">
        <Command />
    </div>
    <div
        ref="target"
        :style="gs.commandOpen ? targetStyle : ''"
        :class="{
            'absolute top-[38%] size-full items-end justify-center':
                gs.commandOpen,
        }">
        <div
            :style="containerStyle"
            :class="{
                'inset-0 m-0 flex size-full flex-col items-center justify-center -space-y-[42%]':
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
                            'top-1/2 z-0 size-3/4 overflow-hidden rounded-2xl bg-base-100',

                            /* children */
                            '[&_nth-child(2)]:-top-10',

                            /* animation */
                            'animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/2 slide-out-to-bottom-1/2',

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
                class="scale-3/4 flex justify-center overflow-hidden rounded-2xl"
                :class="{ absolute: gs.commandOpen }"
                :style="gs.commandOpen ? pageStyle : ''">
                <input
                    type="checkbox"
                    v-model="gs.commandOpen"
                    class="hidden"
                    :disabled="!gs.commandOpen ? true : false" />

                <SidebarProvider
                    class="page overflow-hidden rounded-2xl bg-base-100/95"
                    :class="
                        cn({
                            /*base */
                            'top-1/2 z-0 overflow-hidden rounded-2xl bg-base-100':
                                gs.commandOpen,

                            /* animation */
                            'animate-in zoom-in-[0.75]': gs.commandOpen,

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
<style scoped>
.page,
.command {
    @apply transition-all duration-300 [animation-fill-mode:forwards];
}
</style>
