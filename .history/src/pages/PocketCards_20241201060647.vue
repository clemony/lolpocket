<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { CSSProperties } from 'vue'
const ps = usePocketStore()

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))

const wrapperStyle: CSSProperties = {
    transition: '.3s ease-out all',
}
const flip = ref(false)

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
    <PageLayout>
        <LayoutSpacer />
        <template #header>Pocket Cards</template>
        <div class="flex w-full flex-wrap justify-between gap-8 px-12">
            <div
                ref="wrapper"
                :style="wrapperStyle"
                v-for="(pocket, index) in ps.pockets"
                :key="pocket.key">
                    <label class="swap swap-flip relative backdrop-blur-md">
        <input type="checkbox" />

        <Card
            class="swap-off relative grid h-[260px] w-[210px] justify-center overflow-hidden rounded-xl bg-transparent px-2">
                <PocketCard :pocket="pocket" />
            </div>
        </div>
    </PageLayout>
</template>
<style scoped></style>
