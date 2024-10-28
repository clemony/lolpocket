<script setup lang="ts">
const props = withDefaults(defineProps<{
    model: boolean
}>(), {
    model: false
});

const emit = defineEmits(['update:model'])
const isShown = ref();

onMounted(() => {
    isShown.value = props.model
})
</script>

<template><label
    class="swap swap-flip  shrink-0 [&_svg]:shrink-0 [&_svg]:stroke-2 group  transition-all duration-300 !outline-0 !w-3  !pr-2 hover:!bg-transparent  relative self-center grid content-center items-center">

    <input type="checkbox" v-model="isShown" @change="emit('update:model', isShown)" />

    <icon icon="teenyicons:down-outline" class=" swap-on !size-2  group-hover:stroke-[3]" />
    <icon icon="teenyicons:right-outline" class="swap-off mt-[2px] !size-2 group-hover:stroke-[3]" />
</label></template>

<style scoped></style>