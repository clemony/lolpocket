<script setup lang="ts">
const props = defineProps<{
    loved?: Array<any>
    viewLoved?: boolean
}>()


const viewLoved = ref(props.viewLoved)
const emit = defineEmits(['update:viewLoved'])

</script>

<template>
<div class='join mr-1'>
    <Button variant="outline" size="icon" class='join-item' as-child>
        <label alt="Filter Likes" class=" swap swap-flip relative  *:absolute has-[:disabled]:cursor-default">
            <input type="checkbox" v-model="viewLoved" @change="emit('update:viewLoved')" class="hidden"
                :disabled="!props.loved.length" />

            <icon v-if="props.loved.length" icon="teenyicons:heart-outline" class="swap-off size-6 absolute p-px" />
            <icon v-if="props.loved.length" icon="teenyicons:heart-solid"
                class=" swap-on size-6 text-base-content/80 absolute p-px" />
            <icon v-else icon="fluent:heart-off-20-regular" class="size-6 p-px text-base-content/30" />
        </label>
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