<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { CSSProperties } from 'vue'
import { useParallax } from '@vueuse/core'

const ps = usePocketStore()

const wrappers = ref<Array<HTMLElement | null>>([])

// Reactive array to store individual parallax states
const parallaxes = reactive([])

// Initialize parallax states for each pocket
const initializeParallax = (index: number, element: HTMLElement | null) => {
    if (element && !parallaxes[index]) {
        parallaxes[index] = useParallax(element)
    }
}

const wrapperStyle: CSSProperties = {
    minHeight: '200px',

    transition: '.3s ease-out all',
}

const flip = ref(false)

const containerStyle: CSSProperties = {
    //margin: '3em auto',
    perspective: '100px',
}

const pageStyle = computed(() => ({
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
    }deg)`,
}))
</script>
<template>
    <LayoutSpacer />

    <div class="flex w-full gap-8 px-12" ref="wrapper" :style="wrapperStyle">
        <div
            v-for="(pocket, i) in ps.pockets"
            :key="pocket.key"
            class="flex size-full">
            <div :style="containerStyle">
                <div :style="pageStyle" class="absolute">
                    <PocketCard :pocket="pocket" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
