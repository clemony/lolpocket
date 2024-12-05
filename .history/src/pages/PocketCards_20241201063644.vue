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
    height: '100%',
    width: '100%',
    transition: '.3s ease-out all',
    transform: `translateX(${parallax.tilt * 10}px) translateY(${
        parallax.roll * 10
    }px)`,
}))
</script>
<template>
    <div class="size-full">
        <div class="flex w-full flex-wrap justify-between gap-8 px-12">
            <LayoutSpacer />

            <div
                v-for="(pocket, index) in ps.pockets"
                :key="pocket.key"
                ref="wrapper"
                :style="wrapperStyle">
                <div :style="containerStyle">
                    <div :style="pageStyle" class="absolute">
                        <PocketCard :pocket="pocket" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
