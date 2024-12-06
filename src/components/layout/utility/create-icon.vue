<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { usePocketStore } from '@/stores/pocketStore'
import { icons } from '@/data/PocketIcons'
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

const pocket = getPocket(props.pocketKey)

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
        class="*: tabs tabs-lifted relative grid w-full overflow-y-scroll border-b3 scrollbar-hide [&_.tab-content]:!z-0 [&_.tab]:!z-30 [&_.tab]:h-7 [&_.tab]:!border-b-transparent [&_.tab]:font-medium">
        <label
            role="tab"
            :class="{ 'tab-active': iconTabs == 'icon' }"
            class="first tab">
            <input
                type="radio"
                class="peer hidden"
                v-model="iconTabs"
                name="iconTabs"
                value="icon" />
            Icons
        </label>

        <div
            role="tabpanel"
            :class="{ hidden: iconTabs == 'color' }"
            class="tab-content relative grid w-full rounded-xl rounded-tl-none border-b3 bg-b1">
            <div
                class="grid max-h-52 grid-cols-5 justify-items-center gap-1 self-center justify-self-center overflow-y-scroll px-2 py-3 scrollbar-hide">
                <label
                    v-for="icon in iconStore"
                    class="border-1 btn btn-ghost aspect-square self-center border-transparent p-3 has-[:checked]:border-accent has-[:checked]:shadow-sm">
                    <input
                        v-if="pocket"
                        type="radio"
                        name="iconPicker"
                        v-model="pocket.icon"
                        :value="icon"
                        class="peer hidden" />

                    <input
                        v-else
                        type="radio"
                        name="iconPicker"
                        v-model="selectedIcon"
                        :value="icon"
                        class="peer hidden"
                        @change="handleChange(icon)" />

                    <icon :icon="icon" class="size-full text-ac" />
                </label>
            </div>
        </div>

        <label
            role="tab"
            :class="{ 'tab-active': iconTabs == 'color' }"
            class="tab">
            <input
                type="radio"
                class="peer hidden"
                v-model="iconTabs"
                name="iconTabs"
                value="color" />
            Color
        </label>

        <div
            role="tabpanel"
            :class="{ hidden: iconTabs == 'icon' }"
            class="tab-content grid w-inherit rounded-xl border-b3 bg-b1">
            <div
                class="relative grid justify-items-center self-center justify-self-center overflow-y-scroll p-1 scrollbar-hide">
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
    @apply shadow-[2px_2px_3px_0_var(--b1)];
}
</style>
