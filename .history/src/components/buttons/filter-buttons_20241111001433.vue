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
            <div class='flex w-36 max-w-36 flex-col p-1 pb-8 overflow-hidden'>

                <Label disabled class='capitalize px-0.5 opacity-60'>
                    <icon v-if="dataValue == ''" icon="teenyicons:tick-outline" class="size-3" />

                    {{ props.text }}
                    <input type="radio" v-model="dataValue" value="" class="peer hidden" />
                </Label>




                <label v-for="data in props.data">
                    <Button variant="ghost" size="sm" class='w-full  !justify-start text-start'>



                        <span class='grow'>{{ data }}</span>

                        <input type="checkbox" v-model="dataValue" :value="data" class="peer checkbox checkbox-sm" />
                    </Button>
                </label>


                <Button variant="" size="xs"
                    class='border-t border-t-base-300/50 fixed bottom-0 left-0 w-full rounded-none'
                    @click="dataValue = ''">
                    <icon v-if="dataValue == ''" icon="teenyicons:tick-outline" class="size-3" />
                    <span v-else class="w-3"></span>
                    Clear

                </Button>
            </div>
        </template>
    </VDropdown>
</div>
</template>

<style scoped></style>