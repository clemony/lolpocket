<script setup lang="ts">
import { ColorPicker } from 'vue-accessible-color-picker'

import { computed, nextTick, onMounted, ref } from 'vue'
import { usePocketStore } from '../../stores/pocketStore'

const ps = usePocketStore()
const props = defineProps<{
    pocket?: {
        icon: string
        bgColor: string
        iconColor: string
    }
    bgColor?: string
    iconColor?: string
    selectedIcon?: string
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
    if (colorType.value == 'icon') {
        return iconColor.value
    } else {
        return bgColor.value
    }
})

const getIcon = computed(() => {
    return props.selectedIcon || 'teenyicons:folder-outline'
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
    if (colorType.value == 'background') {
        bgColor.value = eventData.cssColor
        emit('update:bgColor', bgColor.value)
    } else if (colorType.value == 'icon') {
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
    <ColorPicker
        :color="color"
        class="w-full col-start-1"
        @color-change="updateColor"
        alpha-channel="hide">
        <template #hue-range-input-label>
            <span class="visually-hidden"> </span>
        </template>

        <template #copy-button> </template>
    </ColorPicker>

    <div class="flex items-center gap-4 mx-3 mb-2 justify-self-end">
        <div class="rounded-full justify-self-end self-end join *:text-xs">
            <label class="join-item btn btn-xs has-[:checked]:btn-neutral">
                <input
                    type="radio"
                    name="colorType"
                    value="background"
                    class="hidden peer"
                    v-model="colorType" />
                Background
            </label>
            <label class="join-item btn btn-xs has-[:checked]:btn-neutral">
                <input
                    type="radio"
                    name="colorType"
                    v-model="colorType"
                    value="icon"
                    class="hidden peer" />
                Icon
            </label>
        </div>

        <div
            :style="{ backgroundColor: getBgColor }"
            class="grid p-2.5 rounded-full join-item place-items-center size-9 icon-color">
            <icon
                :style="{ color: getIconColor }"
                :icon="getIcon"
                class="size-full" />
        </div>
    </div>
</template>

<style>
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
    @apply !rounded-lg !size-full !overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)];
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
    @apply rounded-full overflow-hidden h-3 bg-none w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)];
}

.vacp-copy-button {
    display: none;
    width: 0;
    height: 0;
}
</style>
