<script setup lang="ts">
import { usePocketStore } from '@/Stores/pocketStore'
import { icons } from '@/Data/icons'
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

const emit = defineEmits([
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

function handleChange(icon) {
    if (pocket) {
        pocket.icon = icon
    }
    emit('update:selectedIcon', icon)
}
</script>

<template>
<ScrollArea class="justify-self-center flex !justify-evenly h-full    rounded-md">

    <label v-for="icon in iconStore"
        class="border-1 m-1 size-9 btn btn-sm btn-ghost aspect-square self-center border-transparent p-2 has-[:checked]:bg-base-200/60 has-[:checked]:shadow-standard">
        <input v-if="pocket" type="radio" name="iconPicker" v-model="pocket.icon" :value="icon" class="peer hidden" />

        <input v-else type="radio" name="iconPicker" v-model="selectedIcon" :value="icon" class="peer hidden"
            @change="handleChange(icon)" />

        <icon :icon="icon" class="size-full text-base-content" />
    </label>

</ScrollArea>
</template>

<style scoped></style>