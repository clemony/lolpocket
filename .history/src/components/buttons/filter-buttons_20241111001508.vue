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

<template>
<div class='join mr-1'>
    <Button variant="outline" size="icon" class='join-item'>
        <icon icon="teenyicons:heart-outline" class="size-4.5 opacity-70" />
    </Button>
    <VDropdown theme='detail'>
        <Button variant="outline" size="icon" class="join-item">

            <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
        </Button>

        <template #popper>
            <slot :data="props.data" :dataValue="props.dataValue" :text="props.text" />
        </template>
    </VDropdown>
</div>
</template>

<style scoped></style>