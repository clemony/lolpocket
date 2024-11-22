<script setup lang="ts">

const props = defineProps<{
    data?: Array<any>
    model?: any
    defaultText: string
    swap?
}>()

const emit = defineEmits(['update'])

const model = ref(props.model)
onMounted(() => {
    props.model ? model.value = props.model : ''
})

const data = props.data
</script>

<template>
<VDropdown v-if="data" theme="select" placement="bottom" class="relative flex w-48 self-end p-0 " :skidding="1">
    <Button variant="outline" size="xs" class="pointer-events-auto w-full  px-2 justify-start  relative ">

        <span class='pr-8 text-left w-full capitalize truncate'>{{ model.name ? model.name : props.defaultText }}
        </span>
        <span class='absolute right-1'>
            <ButtonToggle v-if="!props.swap" />
            <icon v-else icon="iconamoon:swap-thin" />
        </span>
    </Button>

    <template #popper>
        <div class='flex  w-48 flex-col p-1 pb-8 justify-center'>
            <div class='flex flex-row items-center pl-1.5 '>
                <Label variant="ghost" size="xs" disabled class='capitalize grow w-full truncate'>

                    {{ defaultText }}
                    <input type="radio" v-model="model" value="" class="peer hidden" />
                </Label>

                <Button variant="ghost" size="xs" v-close-popper @click="model = ''">
                    <icon icon="ph:eraser" />
                </Button>
            </div>


            <Button variant="ghost" size="xs" class='w-full'>
                <label v-for="value in data" v-close-popper class="w-full flex gap-4 items-center">
                    <span class='capitalize truncate'>
                        {{ value.name }}
                    </span>
                    <input type="radio" v-model="model" @change="emit('update', model)" :value="value"
                        class="peer hidden" />

                    <icon v-if="model && model.key == value.key" icon="teenyicons:tick-outline" class="size-3" />
                    <span v-else class="w-3"></span>
                </label>
            </Button>



        </div>

    </template>
</VDropdown>
</template>
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
