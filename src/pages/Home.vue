<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'
import { UseElementBounding } from '@vueuse/components'

const as = useAccountStore()

const HomeSteps = defineAsyncComponent(
    () => import('@components/home/HomeSteps.vue')
)
const HomeEtc = defineAsyncComponent(
    () => import('@components/home/HomeEtc.vue')
)

const emit = defineEmits(['update:open'])
onMounted(() => {
    emit('update:open', false)
})

const shadow = ref(false)

function onScroll(state: UseScrollReturn) {
    // console.log(state) // {x, y, isScrolling, arrivedState, directions}
    state.y.value > 0 ? (shadow.value = true) : (shadow.value = false)
}

const etc = ref(false)

const steps = ref(null)
const { top } = useElementBounding(steps)
const stepTop = ref(top)
</script>
<template>
    <div
        v-scroll="onScroll"
        class="relative size-full overflow-y-scroll !border-none outline-hidden">
        <HomeEtc v-if="stepTop < -200" />
        <Hero v-else />
        <div class="absolute inset-0 top-full z-10 w-full">
            <div class="size-full" ref="steps">
                <HomeSteps ref="steps" :shadow="shadow" />

                <div
                    class="border-b1 ring-b1 ring-offset-b1 before:bg-b1 after:bg-b1 inset-shadow-b1 pointer-events-none !z-20 mx-auto h-[70vh] w-[94%] rounded-3xl border border-3 bg-transparent inset-shadow-sm ring-10 ring-offset-10 before:absolute before:left-0 before:-mt-1 before:h-[70vh] before:w-[3%] after:absolute after:right-0 after:-mt-1 after:h-[70vh] after:w-[3%]"></div>
                <SiteMap />
            </div>
        </div>
    </div>
</template>
<style scoped></style>
