<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { useParallax } from '@vueuse/core'
import { CSSProperties } from 'vue'
const gs = useGeneralStore()

const target = ref(null)
const parallax = reactive(useParallax(target))

const targetStyle: CSSProperties = {
    display: 'flex',
    //flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '500px',
    transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
    margin: '3em auto',
    perspective: '500px',
}

const pageStyle = computed(() => ({
    transition: '.3s ease-out all',
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
    }deg)`,
}))
</script>
<template>
    <div
        ref="target"
        :style="targetStyle"
        v-if="gs.commandOpen"
        class="absolute size-full">
        <div :style="containerStyle" class="size-full">
            <div
                v-for="page in gs.routeHistory"
                ref="page"
                :style="pageStyle"
                class="history absolute z-0 size-3/4 overflow-hidden rounded-2xl bg-base-100 shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px,_2px_1px_1px_2px_rgba(221,_221,_221,_0.4),_0_2px_5px_rgba(204,_204,_204,_0.4)] animate-in animate-out zoom-out-[0.75] slide-in-from-bottom-1/3 slide-out-to-bottom-1/3 after:absolute after:z-50 after:size-full after:bg-black/20">
                <h1>{{ page }}</h1>
            </div>
        </div>
    </div>
</template>
<style scoped>
.history {
}
</style>
