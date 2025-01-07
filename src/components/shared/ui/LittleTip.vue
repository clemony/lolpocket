<script setup lang="ts">
import 'tippy.js/animations/scale.css'
const props = defineProps<{
    content: string
}>()
</script>
<template>
    <tippy
        :content="props.content"
        follow-cursor="horizontal"
        :inertia="true"
        :delay="[300, 0]"
        :duration="[150]"
        animation="scale"
        :interactiveBorder="2"
        :offset="[0, 4]">
        <slot />
    </tippy>
</template>
<style scoped></style>
