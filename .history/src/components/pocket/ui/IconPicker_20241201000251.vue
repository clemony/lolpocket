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
    <Tabs default-value="Icons" class="-mt-28 w-full justify-end">
        <div class="flex w-full pr-6">
            <Grow />
            <TabsList class="justify-self-end">
                <TabsTrigger value="Icons">Icons</TabsTrigger>
                <TabsTrigger value="Champions">Champions</TabsTrigger>
            </TabsList>
        </div>
        <TabsContent value="Icons">
            <ScrollArea as-child>
                <div
                    class="scroll mb-10 flex h-full max-h-80 w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll p-1">
                    <Label
                        variant="ghost"
                        v-for="icon in iconStore"
                        class="aspect-square size-14 self-center rounded-md border-transparent p-4.5 has-[:checked]:bg-base-200/60 has-[:checked]:shadow-standard">
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
                </div>
            </ScrollArea>
        </TabsContent>
        <TabsContent value="Champions">
            <ScrollArea as-child>
                <div
                    class="scroll mb-10 flex h-full max-h-80 w-full flex-row flex-wrap justify-evenly gap-2 overflow-y-scroll p-1">
                    <Label
                        variant="outline"
                        v-for="champion in ds.champions"
                        class="grid aspect-square size-14 place-items-center self-center overflow-hidden rounded-lg border border-transparent shadow-warm has-[:checked]:bg-base-200/60">
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
                                handleChange(
                                    `/img/champions/${champion.name}.webp`
                                )
                            " />

                        <img
                            :src="`/img/champions/${clean(champion.name)}.webp`"
                            class="size-14 scale-110" />
                    </Label>
                </div>
            </ScrollArea>
        </TabsContent>
    </Tabs>
</template>

<style scoped></style>
