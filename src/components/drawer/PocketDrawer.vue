<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { addPocket } from '@utils/addPocket'
import { generateRandomString } from '@lib/functions/Keygen'
const ps = usePocketStore()
import { hexoid } from 'hexoid'
import type { pocket } from 'types'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

const toID = hexoid()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('#000000')
const iconColor = ref('#FFFFFF')
const pocket = ref(as.drawerPocket)
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
    const pocket = ref(as.drawerPocket)

    pocket.value.name = name.value
    pocket.value.tags = [...tags.value]
    /*     tags.value.forEach((tag) => {
        pocket.value.tags.push(tag)
    }) */

    pocket.value.bgColor = bgColor.value
    pocket.value.iconColor = iconColor.value
    pocket.value.icon = selectedIcon.value
    clearForm()
}

onMounted(() => {
    if (as.drawerPocket) {
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
            class="[&_label]:text-3 flex w-full gap-6 pt-4"
            @submit.prevent.stop="submitForm">
            <div class="ml-px flex w-[40%] flex-col gap-2 pr-8 pl-4">
                <Label for="pocket-name">Pocket Name</Label>

                <div class="join relative">
                    <Input
                        type="text"
                        name="pocket-name"
                        v-model="name"
                        placeholder="optional"
                        class="join-item text-3 h-10 border-r-0" />

                    <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        class="group absolute top-1 right-12 aspect-square size-8! overflow-hidden border-l-0!">
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
                            class="text-1 absolute -top-8 -right-2 z-30 flex translate-y-1 flex-nowrap px-2 py-1 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            No brain? Meet button.
                        </p>
                    </Button>
                </div>

                <Label for="pocket-tags" class="mt-3">Tags</Label>

                <TagsInput v-model="tags" class="flex-col p-2">
                    <div
                        class="*:text-3 flex w-full flex-row flex-wrap justify-start gap-2">
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
                        class="text-3 min-h-10 w-full"
                        name="pocket-tags " />
                </TagsInput>
            </div>

            <div ref="elIcon" class="grid w-1/2 justify-end">
                <IconPicker
                    v-model:selectedIcon="selectedIcon"
                    v-model:bgColor="bgColor"
                    v-model:iconColor="iconColor" />
            </div>

            <DialogFooter class="absolute left-0 w-full pt-5 pb-3">
                <DialogClose>
                    <Button
                        @click="submitForm"
                        v-if="!as.drawerPocket"
                        variant="neutral"
                        size="lg"
                        type="submit"
                        class="justify-self-end">
                        {{ as.drawerValue.submitText }}
                    </Button>

                    <Button
                        v-else
                        variant="neutral"
                        type="button"
                        size="md"
                        class="justify-self-end"
                        @click="updatePocket">
                        {{ as.drawerValue.submitText }}
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    </div>
</template>

<style scoped></style>
