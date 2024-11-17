<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { icons } from '@data/PocketIcons'
const ps = usePocketStore()
const iconStore = icons

const props = defineProps<{
    selectedIcon: string
    bgColor: string
    iconColor: string
    pocketKey?: string
    isShown?: boolean
}>()

const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('')
const iconColor = ref('')

const emit = defineEmits(['update:selectedIcon', 'update:isShown'])

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

function handleChange(icon) {
    if (pocket) {
        pocket.icon = icon
    }
    emit('update:selectedIcon', icon)
}

const isShown = props.isShown
</script>

<template>
    <div
        class="h-[250px] max-h-[250px] w-full auto-rows-min grid-cols-[1fr_3fr] overflow-hidden">
        <div>
            <label class="">
                <icon :icon="selectedIcon" class="6 -mt-px" />
                <a href="form" class="btn btn-xs">1</a>
            </label>
        </div>

        <ScrollArea
            class="col-start-2 flex h-full !justify-evenly justify-self-center overflow-y-auto rounded-md fade-in-0 fade-out-0">
            <label
                v-for="icon in iconStore"
                class="border-1 btn btn-ghost btn-sm m-1 aspect-square size-9 self-center border-transparent p-2 has-[:checked]:bg-base-200/60 has-[:checked]:shadow-standard">
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

                <icon :icon="icon" class="size-full text-base-content" />
            </label>
        </ScrollArea>
    </div>
</template>

<style scoped></style>
