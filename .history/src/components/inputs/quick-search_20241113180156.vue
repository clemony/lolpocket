<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { imageIn, imageOut } from '@assets/animation/animations'
import type { HTMLAttributes } from 'vue'

// Define props for reusability
const props = defineProps<{
    array: Array<{ id: string; img: string; name: string }>
    quickSearch: string
    returnData?: any
    thisSet?: any
    returned?: any
    type?: string
    size?: number
    width?: number
    height?: number
    class?: HTMLAttributes['class']
}>()

const size = props.size + 'px'

const emit = defineEmits(['update:quickSearch', 'update:returnData'])

function handleClick(data) {
    if (data) {
        const set = props.thisSet
        const returned = [data, set]
        console.log(returned)
        emit('update:returnData', returned)
    }
}

const getData = (data) => {
    return data.id
}
// Function to handle input change
function handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null // Cast to HTMLInputElement
    if (target) {
        emit('update:quickSearch', target.value) // Emit only if target is not null
    }
}

function beforeEnter(el: Element) {
    const element = el as HTMLElement // Cast Element to HTMLElement
    element.style.maxHeight = '0'
    element.style.opacity = '0'
}
function afterLeave(el: Element) {
    const element = el as HTMLElement // Cast Element to HTMLElement
    element.style.maxHeight = '0'
    element.style.opacity = '0'
}
</script>

<template>
    <VDropdown
        theme="default"
        alt="Quick Search"
        placement="bottom"
        :distance="8"
        :class="
            cn(
                'no-drag search-drop ghosty drag-label group/qs border-box after:content-[ after:content-[ relative z-0 flex !cursor-pointer !p-0 after:absolute after:grid after:h-full after:w-full after:place-content-center after:opacity-50' +
                    '] hover:after:text-neutral hover:after:opacity-60',
                props.class
            )
        "
        :style="{
            height: size || width + 'px',
            width: size || height + 'px',
        }">
        <div
            class="z-20 h-full w-full scale-105 cursor-pointer select-none bg-[url('/img/ui/frame.webp')] bg-contain bg-center bg-no-repeat opacity-0 brightness-0 transition-all duration-200 group-hover/qs:scale-95 group-hover/qs:opacity-40"></div>

        <template #popper>
            <div class="relative pb-0 pt-1.5">
                <div class="relative flex w-full justify-center px-2 pb-1">
                    <Icon
                        v-if="!quickSearch"
                        icon="teenyicons:search-outline"
                        class="pointer-events-none absolute right-3.5 top-[0.45rem] size-3.5 text-neutral-content/50" />

                    <button
                        v-else
                        class="pointer-events-auto absolute right-3.5 top-[7px] z-10 size-3.5 text-neutral/40 transition-all duration-300 hover:text-neutral/60"
                        @click="$emit('update:quickSearch', '')">
                        <Icon icon="teenyicons:x-outline" />
                    </button>

                    <input
                        placeholder="Quick search..."
                        :value="quickSearch"
                        @input="handleInput"
                        spellcheck="false"
                        class="placeholder: z-0 h-7 w-full select-all rounded-btn bg-transparent px-2 italic !outline-none focus:bg-base-200/50 focus:not-italic"
                        autofocus />
                </div>

                <!--    <transition name="list-transition" @enter="beforeEnter" @leave="afterLeave"> -->
                <div
                    v-if="quickSearch"
                    class="grid max-h-72 w-full overflow-y-scroll border border-transparent border-t-base-300 px-1 pt-2 transition-all duration-500">
                    <TransitionGroup
                        name="fade"
                        tag="div"
                        @enter="imageIn"
                        @leave="imageOut">
                        <button
                            v-close-popper
                            v-for="data in props.array"
                            :key="data.id"
                            @click="handleClick(data)"
                            class="btn btn-ghost btn-xs my-1 flex w-full cursor-pointer justify-start gap-2 px-1 py-0.5 hover:bg-base-200">
                            <img
                                :src="`/img/${props.type}/${data.id || data.name}.webp`"
                                class="size-4.5 rounded-md" />
                            {{ data.name }}
                        </button>
                    </TransitionGroup>
                </div>
            </div>
        </template>
    </VDropdown>
</template>

<style scoped>
.list-transition-enter-active,
.list-transition-leave-active {
    transition:
        max-height 0.5s ease,
        opacity 0.5s ease;
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
