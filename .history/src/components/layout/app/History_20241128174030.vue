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
</script>
<template>
    <div
        ref="target"
        :style="targetStyle"
        v-if="gs.commandOpen"
        class="absolute size-full justify-center">
        <div
            :style="containerStyle"
            class="inset-0 m-0 flex size-full flex-col items-center justify-center -space-y-[45%]">
            <template v-for="(page, index) in gs.routeHistory">
                <div
                    ref="page"
                    :style="pageStyle"
                    :class="
                        cn(
                            /*base */
                            'top-1/2 z-0 size-3/4 overflow-hidden rounded-2xl bg-base-100',

                            /* children */
                            'last:hidden [&_nth-child(2)]:-top-10',

                            /* animation */
                            'animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/2 slide-out-to-bottom-1/2',

                            /* styling */
                            'shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px,_2px_1px_0px_1px_rgba(221,_221,_221,_0.4),_0_2px_0px_rgba(204,_204,_204,_0.4)] after:absolute after:z-50 after:size-full after:bg-black/5'
                        )
                    ">
                    <div class="flex h-18 items-center px-10">
                        <h1 class="capitalize">{{ page }}</h1>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<style scoped></style>
