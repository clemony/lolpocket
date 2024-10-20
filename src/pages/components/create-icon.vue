<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { usePocketStore } from '../../stores/pocketStore'
import { icons } from '../../data/icons'
const ps = usePocketStore()
const iconStore = icons

const props = defineProps<{
    selectedIcon: string
    bgColor: string
    iconColor: string
    pocketKey?: string
}>()

const iconTabs = ref('icon')
const selectedIcon = ref('')
const bgColor = ref('')
const iconColor = ref('')

const emit = defineEmits([
    'update:bgColor',
    'update:iconColor',
    'update:selectedIcon',
])

const pocket = ps.getPocket(props.pocketKey)

watch(
    () => props.bgColor,
    (newVal) => {
        bgColor.value = newVal
    },
    { immediate: true }
)

watch(
    () => props.iconColor,
    (newVal) => {
        iconColor.value = newVal
    },
    { immediate: true }
)

// Emit updated values back to parent
watch(
    () => bgColor.value,
    (newVal) => {
        emit('update:bgColor', newVal)
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        emit('update:iconColor', newVal)
    }
)

function handleChange(icon) {
    if (pocket) {
        pocket.icon = icon
    }
    emit('update:selectedIcon', icon)
}
</script>

<template>
    <div
        role="tablist"
        class="grid w-full [&_.tab]:!border-b-transparent [&_.tab-content]:!z-0 [&_.tab]:!z-30 relative tabs tabs-lifted *:text-xs border-base-300/70 [&_.tab]:h-7 [&_.tab]:font-medium overflow-y-scroll scrollbar-hide">
        <label
            role="tab"
            :class="{ 'tab-active': iconTabs == 'icon' }"
            class="tab first">
            <input
                type="radio"
                class="hidden peer"
                v-model="iconTabs"
                name="iconTabs"
                value="icon" />
            Icons
        </label>

        <div
            role="tabpanel"
            :class="{ hidden: iconTabs == 'color' }"
            class="w-full grid rounded-tl-none min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm relative">
            <div
                class="grid self-center grid-cols-5 gap-1 px-2 py-3 overflow-y-scroll max-h-52 justify-items-center scrollbar-hide justify-self-center">
                <label
                    v-for="icon in iconStore"
                    class="self-center p-3 border-1 border-transparent btn-ghost btn aspect-square has-[:checked]:border-neutral has-[:checked]:shadow-sm">
                    <input
                        v-if="pocket"
                        type="radio"
                        name="iconPicker"
                        v-model="pocket.icon"
                        :value="icon"
                        class="hidden peer" />

                    <input
                        v-else
                        type="radio"
                        name="iconPicker"
                        v-model="selectedIcon"
                        :value="icon"
                        class="hidden peer"
                        @change="handleChange(icon)" />

                    <icon :icon="icon" class="size-full text-base-content" />
                </label>
            </div>
        </div>

        <label
            role="tab"
            :class="{ 'tab-active': iconTabs == 'color' }"
            class="tab">
            <input
                type="radio"
                class="hidden peer"
                v-model="iconTabs"
                name="iconTabs"
                value="color" />
            Color
        </label>

        <div
            role="tabpanel"
            :class="{ hidden: iconTabs == 'icon' }"
            class="w-full grid min-w-[298px] tab-content bg-base-100 border-base-300/70 rounded-box shadow-inset-sm">
            <div
                class="relative grid self-center p-1 overflow-y-scroll justify-items-center scrollbar-hide justify-self-center">
                <ColorPicker
                    v-model:bgColor="bgColor"
                    v-model:iconColor="iconColor"
                    :selectedIcon="selectedIcon" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-active {
    @apply brightness-[98.5%];
}
</style>
