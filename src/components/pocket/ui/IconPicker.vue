<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { icons } from '@data/pocketIcons'
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

const modelValue = ref('symbols')
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
    <div class="mt-3 flex items-center gap-12">
        <h4 class="!text-4 grow self-start pt-2 pl-1">Create Icon</h4>
        <div class="grid gap-3 pr-2">
            <Label class="">Preview</Label>
            <Button
                size="icon"
                :style="{
                    backgroundColor: bgColor,
                    color: iconColor,
                }"
                class="size-16 self-center p-4.5 inset-shadow-sm">
                <icon :icon="selectedIcon" class="size-full" />
            </Button>
        </div>
        <div class="grid gap-3 justify-self-end overflow-y-auto">
            <Label class="">Colors</Label>
            <div class="flex gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger class="rounded-md">
                        <Button
                            variant="outline"
                            size="icon"
                            class="hover:border-neutral/60 size-16 inset-shadow-sm transition-colors duration-300"
                            :style="{
                                backgroundColor: bgColor,
                                color: bgColor,
                            }">
                            <icon
                                icon="mingcute:color-picker-fill"
                                class="size-7 contrast-[600%] grayscale invert saturate-0" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <ColorPicker v-model:bgColor="bgColor" />
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger class="rounded-md">
                        <Button
                            variant="outline"
                            size="icon"
                            class="hover:border-neutral/60 size-16 inset-shadow-sm transition-colors duration-300"
                            :style="{
                                backgroundColor: iconColor,
                                color: iconColor,
                            }">
                            <icon
                                icon="mingcute:color-picker-fill"
                                class="size-7 contrast-[600%] grayscale invert saturate-0" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <ColorPicker v-model:iconColor="iconColor" />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </div>

    <Tabs default-value="Icons" class="w-full" v-model="modelValue">
        <div class="flex w-full pr-0">
            <TabsList class="">
                <TabsTrigger value="symbols">Symbols</TabsTrigger>
                <TabsTrigger value="champions">Champions</TabsTrigger>
            </TabsList>
        </div>
    </Tabs>
    <div
        v-if="modelValue == 'symbols'"
        value="symbols"
        class="border-b2/70 my-4 flex w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs">
        <Label
            variant="ghost"
            v-for="icon in iconStore"
            class="has-checked:bg-b2/60 has-checked:shadow-standard aspect-square size-14 self-center rounded-md border-transparent p-3">
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
                class="text-bc size-full shrink-0 drop-shadow-sm" />
        </Label>
    </div>

    <div
        v-if="modelValue == 'champions'"
        value="champions"
        class="max-h-[calc(100%-500px) h-[calc(100%-500px)] h-full">
        <div
            class="bg-b2/30 border-b2/70 my-4 flex w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll rounded-lg border px-2 py-4 inset-shadow-xs">
            <Label
                variant="outline"
                v-for="champion in ds.champions"
                class="shadow-warm has-checked:bg-b2/60 border-b2 grid aspect-square size-14 place-items-center self-center overflow-hidden rounded-lg border">
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
                    class="size-14 scale-110" />
            </Label>
        </div>
    </div>
</template>

<style scoped></style>
