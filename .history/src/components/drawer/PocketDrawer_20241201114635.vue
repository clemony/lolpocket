<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { addPocket } from '@utils/addPocket'
import { generateRandomString } from '@lib/functions/Keygen'
const ps = usePocketStore()
import { hexoid } from 'hexoid'
import { pocket } from 'types'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('#000000')
const iconColor = ref('#FFFFFF')
const pocket = ref(gs.drawerPocket)
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

watch(
    () => tags.value,
    (newVal) => {
        console.log(newVal)
    }
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
    const pocket = ref(gs.drawerPocket)

    pocket.value.name = name.value
    pocket.value.tags.length = 0
    tags.value.forEach((tag) => {
        pocket.value.tags.push(tag)
    })

    pocket.value.bgColor = bgColor.value
    pocket.value.iconColor = iconColor.value
    pocket.value.icon = selectedIcon.value
    clearForm()
}

onMounted(() => {
    if (gs.drawerPocket) {
        name.value = pocket.value.name
        tags.value = pocket.value.tags
        bgColor.value = pocket.value.bgColor
        iconColor.value = pocket.value.iconColor
        selectedIcon.value = pocket.value.icon
    } else {
        name.value = ''
    }
})
</script>

<template>
    <div class="relative w-full justify-center">
        <form
            class="flex w-full gap-6 pt-4 [&_label]:text-base"
            @submit.prevent.stop="submitForm">
            <div class="ml-px flex w-[40%] flex-col gap-2 pl-4 pr-8">
                <Label for="pocket-name">Pocket Name</Label>

                <div class="join relative">
                    <Input
                        type="text"
                        name="pocket-name"
                        v-model="name"
                        placeholder="optional"
                        class="join-item h-10 border-r-0 text-base" />

                    <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        class="group absolute right-12 top-1 aspect-square !size-8 overflow-hidden !border-l-0">
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
                            class="absolute -right-2 -top-8 z-30 flex translate-y-1 flex-nowrap px-2 py-1 text-xs opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
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

            <div ref="elIcon" class="grid w-1/2 justify-end">
                <IconPicker
                    v-model:selectedIcon="selectedIcon"
                    v-model:bgColor="bgColor"
                    v-model:iconColor="iconColor" />
            </div>

            <DialogFooter class="absolute -bottom-12 left-0 w-full pb-3 pt-5">
                <DialogClose>
                    <Button
                        @click="submitForm"
                        v-if="!gs.drawerPocket"
                        variant="neutral"
                        size="lg"
                        type="submit"
                        class="justify-self-end">
                        {{ gs.drawerValue.submitText }}
                    </Button>

                    <Button
                        v-else
                        variant="neutral"
                        type="submit"
                        size="md"
                        class="justify-self-end"
                        @click="updatePocket">
                        {{ gs.drawerValue.submitText }}
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    </div>
</template>

<style scoped></style>
