<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { icons } from '@/data/PocketIcons'
import { useDataStore } from '@stores/dataStore'
import { getPocket } from '@utils/pocketUtilities'
const ds = useDataStore()
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

function handleChange(icon) {
    if (pocket) {
        pocket.icon = icon
    }
    emit('update:selectedIcon', icon)
}

const isShown = props.isShown
</script>

<template>
    <ScrollArea as-child>
        <div
            class="mb-10 flex h-full max-h-64 w-full flex-row flex-wrap gap-2 overflow-y-scroll p-1">
            <Label
                variant="ghost"
                v-for="icon in iconStore"
                class="aspect-square size-16 self-center rounded-md border-transparent p-4 has-[:checked]:bg-base-200/60 has-[:checked]:shadow-standard">
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

                <icon
                    :icon="icon"
                    class="size-full shrink-0 text-base-content" />
            </Label>
            <Label
                variant="outline"
                v-for="champion in ds.champions"
                class="grid aspect-square size-16 place-items-center self-center overflow-hidden rounded-lg border border-transparent shadow-warm has-[:checked]:bg-base-200/60">
                <input
                    v-if="pocket"
                    type="radio"
                    name="iconPicker"
                    v-model="pocket.icon"
                    :value="`/img/champions/${champion.name}.webp`"
                    class="peer hidden" />

                <input
                    v-else
                    type="radio"
                    name="iconPicker"
                    v-model="selectedIcon"
                    :value="`/img/champions/${champion.name}/.webp`"
                    class="peer hidden"
                    @change="
                        handleChange(`/img/champions/${champion.name}.webp`)
                    " />

                <img
                    :src="`/img/champions/${clean(champion.name)}.webp`"
                    class="size-16 scale-110" />
            </Label>
        </div>
    </ScrollArea>
</template>

<style scoped></style>
