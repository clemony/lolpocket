<script setup lang="ts">
const props = defineProps<{
    data?: Array<any>
    dataValue?: any
    text?: string
    loveButt?: Array<any>
}>()

const dataValue = ref(props.dataValue)
/* onMounted(async () => {
    props.dataValue ? dataValue.value = props.dataValue : ''
}) */
</script>

<template>
<div class='join mr-1'>
    <label alt="Filter Likes" class="tab swap swap-flip relative mr-2 px-2 *:absolute has-[:disabled]:cursor-default">
        <input type="checkbox" v-model="props.loveButt" class="hidden" :disabled="!props.loveButt.length" />

        <icon v-if="props.loveButt.length" icon="teenyicons:heart-outline" class="swap-off size-full" />
        <icon v-if="props.loveButt.length" icon="teenyicons:heart-solid"
            class="swap-on size-full text-base-content/80" />
        <icon v-else icon="fluent:heart-off-20-regular" class="mb-[4px] size-5 text-base-content/30" />
    </label>
    <VDropdown v-if="data" theme="select" placement="bottom" class="relative flex self-end p-0 justify-center"
        :skidding="1">
        <Button variant="outline" size="icon" class="join-item">

            <icon icon="teenyicons:filter-outline" class='size-4.5 opacity-70' />
        </Button>

        <template #popper>
            <slot :dataValue="props.dataValue" :data="props.data" :text="props.text" />
        </template>
    </VDropdown>
</div>
</template>

<style scoped></style>