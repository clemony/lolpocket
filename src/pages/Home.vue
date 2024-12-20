<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const emit = defineEmits(['update:open'])
onMounted(() => {
    emit('update:open', false)
})
</script>
<template>
    <Hero />
    <ScrollArea class="absolute top-0 left-0 size-full overflow-y-scroll">
        <HomeSteps />
    </ScrollArea>
</template>
<style scoped></style>
