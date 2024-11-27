<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { addPocket } from '@utils/AddPocket'
import { generateRandomString } from '@lib/functions/Keygen'
const ps = usePocketStore()
import { hexoid } from 'hexoid'
import { pocket } from 'types'
import { useGeneralStore } from '@stores/generalStore'
import { scrollToSection } from '@utils/utils'
const gs = useGeneralStore()

const toID = hexoid()

const props = defineProps<{
    submitText: string
    pocket?: pocket
}>()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('#000000')
const iconColor = ref('#FFFFFF')
const pocket = ref(props.pocket)
watch(
    () => bgColor.value,
    (newVal) => {
        bgColor.value = newVal
    },
    { immediate: true }
)

watch(
    () => iconColor.value,
    (newVal) => {
        iconColor.value = newVal
    },
    { immediate: true }
)

function clearForm() {
    name.value = ''
    bgColor.value = '#000000'
    iconColor.value = '#FFFFFF'
    selectedIcon.value = 'teenyicons:folder-outline'
}

function submitForm() {
    console.log('hi')
    const key = toID()
    addPocket(
        name.value,
        tags.value,
        selectedIcon.value,
        bgColor.value,
        iconColor.value,
        key
    )
    emit('submit')
    clearForm()
    console.log('pocket added!', ps.pockets)
}

const emit = defineEmits<{
    (e: 'submit'): void
}>()

function updatePocket() {
    const pocket = ref(gs.modalPocket)

    pocket.value.name = name.value
    pocket.value.tags = tags.value
    pocket.value.bgColor = bgColor.value
    pocket.value.iconColor = iconColor.value
    pocket.value.icon = selectedIcon.value
    clearForm()
}

onMounted(() => {
    if (gs.modalPocket) {
        name.value = pocket.value.name
        tags.value = pocket.value.tags
        bgColor.value = pocket.value.bgColor
        iconColor.value = pocket.value.iconColor
        selectedIcon.value = pocket.value.icon
    }
})

const elIcon = ref()
const elForm = ref()

const isElIconVisible = useElementVisibility(elIcon)

watch(
    () => isElIconVisible.value,
    (newVal) => {
        console.log(newVal)
    }
)
</script>

<template>
    <div class="relative w-full justify-center py-2">
        <form
            class="carousel flex gap-8 py-4 [&_label]:text-base"
            @submit.prevent.stop="submitForm">
            <div
                ref="elForm"
                class="carousel-item ml-px flex w-[70%] flex-col gap-2 pl-4">
                <Label for="pocket-name">Pocket Name</Label>

                <div class="join">
                    <Input
                        type="text"
                        name="pocket-name"
                        v-model="name"
                        placeholder="optional"
                        class="join-item h-10 border-r-0 text-base" />

                    <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        class="group join-item aspect-square h-10 overflow-hidden border-l-0!">
                        <icon
                            icon="teenyicons:x-small-outline"
                            class="size-6 shrink-0 object-cover opacity-40 group-hover:opacity-100" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        class="group join-item relative h-10"
                        @click.stop="name = generateRandomString()">
                        <icon
                            icon="qlementine-icons:shuffle-16"
                            class="size-4 shrink-0" />

                        <p
                            class="absolute -top-8 -right-2 z-30 flex translate-y-1 flex-nowrap px-2 py-1 text-xs opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            No brain? Meet button.
                        </p>
                    </Button>
                </div>

                <Label for="pocket-tags" class="mt-3">Tags</Label>

                <TagsInput v-model="tags" class="flex-col p-2">
                    <div
                        class="flex w-full flex-row flex-wrap justify-start gap-2 *:text-base">
                        <template v-if="tags.length">
                            <TransitionGroup name="pop">
                                <TagsInputItem
                                    v-for="tag in tags"
                                    :key="tag"
                                    :value="tag">
                                    <TagsInputItemText />
                                    <TagsInputItemDelete />
                                </TagsInputItem>
                            </TransitionGroup>
                        </template>

                        <template v-else>
                            <TagsInputItem value="# your">
                                <TagsInputItemText />
                            </TagsInputItem>
                            <TagsInputItem value="# tags">
                                <TagsInputItemText />
                            </TagsInputItem>
                            <TagsInputItem value="# here">
                                <TagsInputItemText />
                            </TagsInputItem>
                        </template>
                    </div>

                    <TagsInputInput
                        placeholder="optional"
                        class="min-h-10 w-full text-base"
                        name="pocket-tags " />
                </TagsInput>
            </div>

            <div class="flex w-[30%] flex-col justify-start">
                <div class="flex flex-col gap-1">
                    <Label class="">Icon</Label>
                    <button
                        type="button"
                        @click="scrollToSection(elIcon)"
                        :style="{
                            backgroundColor: bgColor,
                            color: iconColor,
                        }"
                        class="ring-neutral/80 my-2 aspect-square size-14 self-center rounded-lg p-4 hover:ring-1 hover:ring-offset-4">
                        <icon :icon="selectedIcon" class="-mt-px size-full" />
                    </button>
                </div>

                <div class="flex flex-col gap-2">
                    <Label for="pocket-tags" class="">Colors</Label>
                    <DropdownMenu class="w-full">
                        <DropdownMenuTrigger
                            class="data-[state=open]:bg-b2/60 mt-1.5 w-full rounded-md">
                            <Button
                                variant="ghost"
                                size="sm"
                                class="w-full justify-start text-base">
                                <span
                                    class="border-base-300 size-6 shrink-0 rounded-sm border"
                                    :style="{
                                        backgroundColor: bgColor,
                                    }"></span>
                                Backdrop
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <ColorPicker v-model:bgColor="bgColor" />
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            class="data-[state=open]:bg-b2/60 rounded-md">
                            <Button
                                variant="ghost"
                                size="sm"
                                class="w-full justify-start text-base">
                                <span
                                    class="border-base-300 size-6 shrink-0 rounded-sm border"
                                    :style="{
                                        backgroundColor: iconColor,
                                    }"></span>

                                Icon
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <ColorPicker v-model:iconColor="iconColor" />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div ref="elIcon" class="carousel-item grid w-[72%] justify-end">
                <IconPicker
                    v-model:selectedIcon="selectedIcon"
                    v-model:bgColor="bgColor"
                    v-model:iconColor="iconColor" />
            </div>

            <DialogFooter class="fixed bottom-0 left-0 w-full px-12 py-5">
                <DialogClose>
                    <Button
                        @click="submitForm"
                        v-if="!gs.modalPocket"
                        variant="neutral"
                        type="submit"
                        class="btn btn-sm cursor-pointer justify-self-end">
                        {{ submitText }}
                    </Button>

                    <Button
                        v-else
                        variant="neutral"
                        type="submit"
                        class="btn btn-sm cursor-pointer justify-self-end"
                        @click="updatePocket">
                        {{ submitText }}
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    </div>
</template>

<style scoped></style>
