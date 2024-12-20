<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const emit = defineEmits(['update:open'])
onMounted(() => {
    emit('update:open', false)
})
</script>
<template>
    <ScrollArea class="size-full overflow-y-scroll !border-none outline-hidden">
        <Hero />

        <div class="absolute inset-0 top-full w-full">
            <HomeSteps />
            <HomeEtc />
        </div>
    </ScrollArea>
</template>
<style scoped></style>
