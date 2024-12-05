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
    perspective: '200px',
}

const pageStyle = computed(() => ({
    transition: '.3s ease-out all',
    transform: `translateX(${parallax.tilt * 10}px) translateY(${
        parallax.roll * 10
    }px) scale(1.33)`,
}))
</script>
<template>
    <PageLayout>
        <LayoutSpacer />
        <template #header>Pocket Cards</template>
        <div
            class="flex w-full flex-wrap justify-between gap-8 px-12"
            ref="wrapper"
            :style="wrapperStyle">
            <div
                v-for="(pocket, index) in ps.pockets"
                :key="pocket.key"
                :style="containerStyle">
                <label
                    class="swap swap-flip relative backdrop-blur-md"
                    :style="pageStyle">
                    <input type="checkbox" />

                    <Card
                        class="swap-off relative grid h-[260px] w-[210px] justify-center overflow-hidden rounded-xl bg-transparent px-2">
                        <PocketCard :pocket="pocket" />
                    </Card>
                    <Card class="swap-on h-[260px] w-[210px]"></Card>
                </label>
            </div>
        </div>
    </PageLayout>
</template>
<style scoped></style>
