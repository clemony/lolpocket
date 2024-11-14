<script setup lang="ts">
const props = defineProps<{
    loved?: Array<any>
    viewLoved?: boolean
}>()


const viewLoved = ref(null)
const emit = defineEmits(['update:viewLoved'])

onMounted(() => {
    viewLoved.value = props.viewLoved
})
</script>

<template>
<div class='join mr-1'>
    <Button variant="outline" size="icon" class='join-item'>

    </Button>
    <!--     <VDropdown  theme="select" placement="bottom" class="relative flex self-end p-0 justify-center"
        :skidding="1"> -->
    <Button variant="outline" size="icon" class="join-item">

        <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
    </Button>


    <!--   </VDropdown> -->
</div>
</template>

<style scoped></style>