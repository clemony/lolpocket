<script setup lang="ts">

const props = defineProps<{
    data?: Array<any>
    dataValue?: any
    text: string
}>()

const emit = defineEmits(['update:dataValue'])

const dataValue = ref(props.dataValue)
onMounted(() => {
    props.dataValue ? dataValue.value = props.dataValue : ''
})
</script>

<template><!-- <VDropdown v-if="data" theme="select" placement="bottom" class="relative flex self-end p-0 justify-center"
    :skidding="1">
    <slot />

    <template #popper> -->


<!--     </template>
</VDropdown> --></template>
<style scoped>
.v-popper--theme-select .v-popper__inner {
    @apply !rounded-xs;
}

.v-popper--shown button {
    @apply border-base-300/90;

    &>div {
        @apply opacity-80;
    }

    & svg {
        @apply opacity-100;
    }
}
</style>
