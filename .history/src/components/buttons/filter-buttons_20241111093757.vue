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

<template>
<div class='join mr-1'>
    <Button variant="outline" size="icon" class='join-item swap swap-flip relative  has-[:disabled]:cursor-default'
        alt="Filter Likes" as-child>
        <Label for="lc">
            <slot name="viewLoved" />

            <icon v-if="props.loved" icon="teenyicons:heart-outline" class="swap-off size-6 absolute p-px" />
            <icon v-if="props.loved" icon="teenyicons:heart-solid"
                class=" swap-on size-6 text-base-content/80 absolute p-px" />
            <icon v-else icon="fluent:heart-off-20-regular" class="size-6 absolute   text-base-content/30" />
        </Label>
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