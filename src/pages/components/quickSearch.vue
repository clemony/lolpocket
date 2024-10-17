<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { imageIn, imageOut } from '../../script/animations';

// Define props for reusability
const props = defineProps<{
    array: Array<{ id: string; img: string; name: string }>;
    quickSearch: string;
    returnData?: any;
    thisSet?: any;
    returned?: any;
    type?: string;
}>();

const emit = defineEmits(['update:quickSearch', 'update:returnData']);


function handleClick(data) {
    if (data) {
        const set = props.thisSet;
        const returned = [data, set];
        console.log(returned);
        emit('update:returnData', returned);
    }
}

const getData = (data) => {
    if (props.type == "item") {
        return data.id;
    }
};
// Function to handle input change
function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null; // Cast to HTMLInputElement
    if (target) {
        emit('update:quickSearch', target.value); // Emit only if target is not null
    }
}

function beforeEnter(el: Element) {
    const element = el as HTMLElement; // Cast Element to HTMLElement
    element.style.maxHeight = '0';
    element.style.opacity = '0';
}
function afterLeave(el: Element) {
    const element = el as HTMLElement; // Cast Element to HTMLElement
    element.style.maxHeight = '0';
    element.style.opacity = '0';
}



</script>

<template>
    <div class="relative   pt-1.5 pb-0 ">
        <div class="relative flex justify-center w-full px-2 pb-1">
            <Icon v-if="!quickSearch" icon="teenyicons:search-outline"
                class="pointer-events-none text-neutral-content/50 size-3.5 right-3.5 top-[0.45rem] absolute" />

            <button v-else
                class="pointer-events-auto z-10 transition-all duration-300 text-neutral/40 hover:text-neutral/60 size-3.5 right-3.5 top-[7px] absolute"
                @click="$emit('update:quickSearch', '')">
                <Icon icon="teenyicons:x-outline" />
            </button>

            <input placeholder="Quick search..." :value="quickSearch" @input="handleInput" spellcheck="false" class=" z-0 w-full text-xs italic select-all focus:not-italic  focus:bg-base-200/50
            placeholder:text-xs rounded-btn bg-transparent h-7 px-2  !outline-none " autofocus />
        </div>

        <!--    <transition name="list-transition" @enter="beforeEnter" @leave="afterLeave"> -->
        <div v-if="quickSearch"
            class="grid w-full px-1 pt-2 overflow-y-scroll transition-all duration-500 border border-transparent border-t-base-300 max-h-72">
            <TransitionGroup name="fade" tag="div" @enter="imageIn" @leave='imageOut'>
                <button v-close-popper v-for="data in props.array" :key="data.id" @click="handleClick(data)"
                    class="flex w-full gap-2 px-1 my-1 btn btn-ghost btn-xs py-0.5  hover:bg-base-200 cursor-pointer justify-start">
                    <img :src="`/img/${props.type}/${data.id || data.name}.webp`" class="rounded-md size-4.5" />
                    {{ data.name }}
                </button>
            </TransitionGroup>
        </div>

    </div>
</template>

<style scoped>
.list-transition-enter-active,
.list-transition-leave-active {
    transition: max-height 0.5s ease, opacity 0.5s ease;
}

.list-transition-enter-from,
.list-transition-leave-to {
    max-height: 200px;
    opacity: 0;
}

.list-transition-enter-to,
.list-transition-leave-from {
    max-height: 1000px;
    /* Set to a large enough value for your list */
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>