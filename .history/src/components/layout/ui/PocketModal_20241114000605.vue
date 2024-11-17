<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { addPocket } from '@lib/functions/AddPocket'
import { generateRandomString } from '@lib/functions/Keygen'
const ps = usePocketStore()
import { useSessionStore } from '@/stores/sessionStore'
import { hexoid } from 'hexoid'
const sn = useSessionStore()

const toID = hexoid()

const props = defineProps<{
    submitText: string
    pocketKey?: string
}>()

// Form fields
const name = ref('')
const tags = ref([])
const selectedIcon = ref('teenyicons:folder-outline')
const bgColor = ref('#000000')
const iconColor = ref('#FFFFFF')

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
    sn.navigateTo(`/pocket/${key}`)
}

const emit = defineEmits<{
    (e: 'submit'): void
}>()

function updatePocket() {
    const pocket = ps.getPocket(props.pocketKey)
    pocket.name = name.value
    pocket.tags = tags.value
    pocket.bgColor = bgColor.value
    pocket.iconColor = iconColor.value
    pocket.icon = selectedIcon.value
    clearForm()
}

onMounted(() => {
    if (props.pocketKey) {
        const pocket = ps.getPocket(props.pocketKey)
        name.value = pocket.name
        tags.value = pocket.tags
        bgColor.value = pocket.bgColor
        iconColor.value = pocket.iconColor
        selectedIcon.value = pocket.icon
    }
})
</script>

<template>


        <form ref="form" class="flex gap-8 py-4 [&_label]:text-base" @submit.prevent.stop="submitForm">
            <div class="flex w-1/2 flex-col gap-2">
                <Label for="pocket-name">Pocket Name</Label>

                <div class="join ">
                    <Input
                        type="text"
                        name="pocket-name"
                        v-model="name"
                        placeholder="optional"
                        class="h-10 join-item text-base" />
                    
                            <Button
                                variant="outline"
                                size="sm"
                                class="h-10 overflow-hidden join-item aspect-square !border-l-transparent">
                                <icon
                                    icon="qlementine-icons:close-16"
                                    class="size-6 shrink-0 object-cover" />
                            </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        class="group join-item  h-10 overflow-hidden"
                        @click.stop="name = generateRandomString()">
                               <icon
                                    icon="qlementine-icons:shuffle-16"
                                    class="size-4 shrink-0" />

                        <p
                            class="absolute -right-2 -top-6 flex translate-y-1 flex-nowrap px-2 py-1 text-xs opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                            No brain? Meet button.
                        </p>
                    </Button>
                       
                </div>

                <Label for="pocket-tags" class="mt-3">Tags</Label>

                <TagsInput v-model="tags" class="flex-col">
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
                        class="w-full min-h-10 text-base"
                        name="pocket-tags " />
                </TagsInput>
            </div>

            <div class="flex w-1/4 flex-col gap-1">
                <Label for="pocket-name">Pocket Icon</Label>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        :style="{
                            backgroundColor: bgColor,
                            color: iconColor,
                        }"
                        class="aspect-square size-14 self-center rounded-full p-4 ring-neutral/80 ring-offset-base-100 data-[state=open]:ring-1 data-[state=open]:ring-offset-4">
                        <icon :icon="selectedIcon" class="size-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div class="h-48 max-w-56">
                            <IconPicker
                                v-model:selectedIcon="selectedIcon"
                                v-model:bgColor="bgColor"
                                v-model:iconColor="iconColor" />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                

               
            </div> <div class="flex flex-col w-1/4 gap-2">
                <Label for="pocket-tags" class="mt-3">Colors</Label>
                    <DropdownMenu class="w-1/2">
                        <DropdownMenuTrigger
                            class="rounded-md data-[state=open]:bg-base-200/60">
                            <Button variant="ghost" size="sm" class='text-base'>
                                <span
                                    class="size-6 justify-start rounded border border-base-300"
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
                            class="w-1/2 rounded-md data-[state=open]:bg-base-200/60">
                            <Button
                                variant="ghost"
                                size="sm"
                                class="w-full justify-start text-base">
                                <span
                                    class="size-6 rounded border border-base-300"
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
        </form>


    <DialogFooter>
        <DialogClose>
            <Button
                v-if="!props.pocketKey"
                variant="neutral"
                type="submit"
                class="btn btn-sm cursor-pointer justify-self-end">
                {{ submitText }}
            </Button>

            <Button
                v-else
                variant="neutral"
                type="button"
                class="btn btn-sm cursor-pointer justify-self-end"
                @click="updatePocket">
                {{ submitText }}
            </Button>
        </DialogClose>
    </DialogFooter>
</template>

<style scoped></style>
