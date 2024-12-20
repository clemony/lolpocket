<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const HomeSteps = defineAsyncComponent(
    () => import('@components/home/HomeSteps.vue')
)
const HomeEtc = defineAsyncComponent(
    () => import('@components/home/HomeEtc.vue')
)

const el = ref(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

watch(
    () => y,
    (newVal) => {
        console.log('💠 - newVal:', newVal)
    }
)
const emit = defineEmits(['update:open'])
onMounted(() => {
    emit('update:open', false)
})
</script>
<template>
    <ScrollArea class="size-full overflow-y-scroll !border-none outline-hidden">
        <Hero />
        <div class="absolute inset-0 top-full w-full" ref="el">
            <HomeSteps :shadow="y > 0 ? true : false" />
            <HomeEtc />
            <SiteMap />
        </div>
    </ScrollArea>
</template>
<style scoped></style>
