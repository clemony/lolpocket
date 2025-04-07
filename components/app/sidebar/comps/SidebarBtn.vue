<script setup lang="ts">
const props = defineProps<{
to: string
}>()

const route = useRoute()
</script>
<template>
<button class="btn  btn-ghost  text-3 font-medium justify-start hover:!bg-b1/30 hover:border-b3/50" :class="{' btn-active': props.to == route.path }">
    <slot  />
</button>
</template>