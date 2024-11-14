<script setup lang="ts">
const props = defineProps<{
    loved?: number
}>()


const loved = ref(null)
watch(
    () => props.loved,
    (newVal) => {
        loved.value = newVal
    }
)
const emit = defineEmits(['update:viewLoved'])

onMounted(() => {
    loved.value = props.loved
})
</script>

<template><!--     <VDropdown  theme="select" placement="bottom" class="relative flex self-end p-0 justify-center"
        :skidding="1"> -->
<Button variant="outline" size="icon" class="join-item">

    <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
</Button>


<!--   </VDropdown> --></template>

<style scoped></style>