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
}>()

const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('')
const iconColor = ref('')

const emit = defineEmits(['update:selectedIcon'])

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
</script>

<template>
    <div
        class="grid h-[333px] w-full grid-cols-[1fr_3fr] overflow-hidden duration-500 animate-in animate-out slide-in-from-right-full slide-out-to-right-full">
        <ScrollArea
            class="col-start-2 flex h-full !justify-evenly justify-self-center rounded-md">
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
