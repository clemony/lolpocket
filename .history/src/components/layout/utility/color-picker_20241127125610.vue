<script setup lang="ts">
import { ColorPicker } from 'vue-accessible-color-picker'

import { usePocketStore } from '@/stores/pocketStore'

const ps = usePocketStore()
const props = defineProps<{
    pocket?: {
        bgColor: string
        iconColor: string
    }
    bgColor?: string
    iconColor?: string
    pocketKey?: string
}>()

console.log(props.pocket)

const emit = defineEmits(['update:bgColor', 'update:iconColor'])
const pocket = computed(() => {
    if (props.pocketKey) {
        return props.pocket
    }
})

// Initialize color with the prop value

const bgColor = ref('#000')
const iconColor = ref('#FFF')
const colorType = ref('background')
const color = computed(() => {
    if (props.iconColor) {
        return iconColor.value
    } else {
        return bgColor.value
    }
})

const getBgColor = computed(() => {
    if (props.pocket) {
        return props.pocket.bgColor
    } else {
        return props.bgColor
    }
})
const getIconColor = computed(() => {
    if (props.pocket) {
        return props.pocket.iconColor
    } else {
        return props.iconColor
    }
})

function updateColor(eventData) {
    if (props.bgColor) {
        bgColor.value = eventData.cssColor
        emit('update:bgColor', bgColor.value)
    } else if (props.iconColor) {
        iconColor.value = eventData.cssColor
        emit('update:iconColor', iconColor.value)
    }
}
onMounted(async () => {
    await nextTick()
    if (props.pocket) {
        bgColor.value = props.pocket.bgColor
    }
    if (props.pocket) {
        iconColor.value = props.pocket.iconColor
    }
})
</script>

<template>
    <div class="grid items-center gap-4">
        <ColorPicker
            :color="color"
            class="w-full"
            @color-change="updateColor"
            alpha-channel="hide">
            <template #hue-range-input-label>
                <span class="visually-hidden"></span>
            </template>

            <template #copy-button></template>
        </ColorPicker>
    </div>
</template>

<style>
@import '@assets/css/theme.css' theme(reference);
@import url('vue-accessible-color-picker/styles');
/* beautify ignore:start */
label {
    @apply text-base-content;
}
.visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
}
:root {
    --vacp-width-border: 1px;
    --vacp-color-border: transparent;
    --vacp-color-background: transparent;
    --vacp-color-focus: transparent;
}

.vacp-color-space {
    --vacp-thumb-size: 5px !important;
    @apply !size-full !overflow-hidden !rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)];
}
::--webkit-slider-thumb {
    @apply pt-2;
}

label.vacp-range-input-label {
    @apply rounded-full;
}
.vacp-color-inputs,
.vacp-range-copy-button {
    @apply !hidden hover:bg-transparent;
}

#color-picker-hue-slider,
#color-picker-alpha-slider {
    --vacp-width-border: 0px;
    @apply h-3 w-full overflow-hidden rounded-full bg-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)];
}

.vacp-copy-button {
    display: none;
    width: 0;
    height: 0;
}
</style>
