<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { CSSProperties } from 'vue'
import { useParallax } from '@vueuse/core'

const ps = usePocketStore()

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))

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

    <div
        class="w-full grid-cols-[repeat(1fr,300px)] gap-8 px-12"
        ref="wrapper"
        :style="wrapperStyle">
        <div
            v-for="(pocket, index) in ps.pockets"
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
