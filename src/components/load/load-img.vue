<script setup lang="ts">
import { defineProps, ref } from 'vue';

const isImageLoaded = ref<Boolean>(false)
const props = defineProps({
    url: { type: String, required: true },
})

function imageLoaded() {
    setTimeout(() => {
        isImageLoaded.value = true
    }, 3000)
}
</script>

<template>
<div>

</div>
</template>

<style scoped></style>