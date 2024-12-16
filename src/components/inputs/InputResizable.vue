<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { blur } from '@lib/utils'

const gs = useGeneralStore()
const props = defineProps<{
    model?: string
    placeholder?: any
    padding?: number
    fontWeight?: number
    fontSize?: number
    notouch?: boolean
    clear?: boolean
    pxxs?: boolean
    centered?: boolean
    textCenter?: boolean
}>()

const emit = defineEmits(['update:model'])
const input = ref(props.model) // Bind the input value directly to props.model
const inputWidth = ref(0)
const textWidth = ref<HTMLElement | null>(null)

const updateWidth = () => {
    if (textWidth.value) {
        // Measure the span's width
        inputWidth.value =
            textWidth.value.getBoundingClientRect().width + props.padding // Add a small padding
    }
}

// Watch input value and adjust width when it changes
watch(input, (newVal) => {
    emit('update:model', newVal) // Emit changes to the parent
    nextTick(() => {
        updateWidth()
    })
})

watch(
    () => props.model,
    (newVal) => {
        input.value = newVal
    }
)

onMounted(() => {
    nextTick(() => {
        updateWidth()
        input.value = props.model
        updateWidth()
    })
})
</script>

<template>
    <div class="group/name pointer-events-auto relative w-full">
        <input
            v-model="input"
            type="text"
            class="peer adjustable-input z-0 m-0 min-w-4 bg-transparent p-0 capitalize ring-0 outline-hidden transition-all duration-300 hover:cursor-text!"
            :class="{
                'pointer-events-none!': props.notouch,
                'justify-center': props.centered,
                'pr-5': props.clear,
                'text-center': props.textCenter,
            }"
            :style="{
                fontWeight: props.fontWeight,
                fontSize: props.fontSize + 'px',
                width: inputWidth + 'px',
            }"
            @input="updateWidth"
            @keydown.enter.prevent="blur - sm"
            :placeholder="props.placeholder"
            spellcheck="false" />

        <span
            ref="textWidth"
            class="pointer-events-none invisible absolute top-0 left-0 whitespace-pre"
            :class="{
                'pr-5': props.clear,
            }"
            :style="{
                fontWeight: props.fontWeight,
                fontSize: props.fontSize + 'px',
            }">
            {{ input }}
        </span>

        <button
            @click="input = ''"
            v-if="props.clear"
            class="absolute -top-[6px] right-[0px] z-10 size-4 h-full w-4.5 opacity-0 *:absolute group-hover/name:opacity-70 peer-focus:opacity-70 hover:cursor-pointer hover:opacity-90">
            <icon icon="teenyicons:x-small-outline" />
        </button>
    </div>
</template>
<style scoped></style>
