<script setup lang="ts">
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'vue';
const props = defineProps<{
    modelName?: string
    value?: any
    first?: boolean
    class?: HTMLAttributes['class']
}>();

const model = ref(props.modelName)

const emit = defineEmits(['update:modelName'])
watch(
    () => props.modelName,
    (newVal) => {
        model.value = newVal
    }
)

</script>
<template><label role="tab" :class="cn('max-w-24 ', { 'tab-active': model === props.value, 'first': props.first }, props.class)"
    class="tab !z-20 text-base absolute   top-0 left-0  [--tab-border-color:oklch(var(--b2))]" v-bind="$attrs">
    <input type="radio" class="peer hidden" :value="props.value" :v-model="model"
        @change="emit('update:modelName', model)" />
    <slot name="header" />
</label>

<div v-if="props.value === model" role="tabpanel" :class="{ 'rounded-tl-none': props.first }"
    class="shadow-sm mb-1 absolute top-8  left-0 flex tab-content !w-inherit min-w-[298px] rounded-box border-base-200 bg-base-100/90 py-4 px-5 overflow-hidden flex-col flex-1  h-[calc(100%-100px)]">
    <slot name="content" />
</div>
</template>

<style scoped>
:root {}

.tab-active {
    @apply !z-30 shadow-[6px_4px_5px_1px_oklch(var(--b1))] border-base-200;
}

.tab-active:not(:first-child) {


    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

.first.tab-active::before {

    background-image: var(--radius-end) !important;
    background-position: top right !important;
}

/*
.last.tab:is(.tab-active):before {
    background-image: var(--radius-start) !important;
    background-position: top left !important;
}*/
</style>
