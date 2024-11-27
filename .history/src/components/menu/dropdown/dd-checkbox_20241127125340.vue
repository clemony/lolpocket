<script setup lang="ts">
const props = defineProps<{
    data?: Array<any>
    dataValue?: any
    text?: string
}>()

const emit = defineEmits(['update:dataValue'])

const dataValue = ref(props.dataValue)
</script>

<template>
    <div class="flex w-36 max-w-36 flex-col overflow-hidden p-1 pb-8">
        <Label disabled class="px-0.5 capitalize opacity-60">
            <icon
                v-if="dataValue == ''"
                icon="teenyicons:tick-outline"
                class="size-3" />

            {{ props.text }}
            <input
                type="radio"
                v-model="dataValue"
                value=""
                class="peer hidden" />
        </Label>

        <label v-for="data in props.data">
            <Button
                variant="ghost"
                size="sm"
                class="w-full justify-start! text-start">
                <span class="grow">{{ data }}</span>

                <input
                    type="checkbox"
                    v-model="dataValue"
                    :value="data"
                    class="peer checkbox checkbox-sm" />
            </Button>
        </label>

        <Button
            variant=""
            size="xs"
            class="border-t-base-300/50 fixed bottom-0 left-0 w-full rounded-none border-t"
            @click="dataValue = ''">
            <icon
                v-if="dataValue == ''"
                icon="teenyicons:tick-outline"
                class="size-3" />
            <span v-else class="w-3"></span>
            Clear
        </Button>
    </div>
</template>
<style scoped>
@import '@assets/css/theme.css' theme(reference) .v-popper--theme-select
    .v-popper__inner {
    @apply !rounded-xs;
}

.v-popper--shown button {
    @apply border-base-300/90;

    & > div {
        @apply opacity-80;
    }

    & svg {
        @apply opacity-100;
    }
}
</style>
