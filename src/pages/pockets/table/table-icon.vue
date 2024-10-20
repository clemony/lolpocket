<script setup lang="ts">
import { ref, watch } from 'vue'
import TableContextMenu from './table-contextMenu.vue'

const props = defineProps<{
    params: {
        data: {
            key: string
            bgColor: string
            iconColor: string
            icon: string
            name: string
            items: {}
            pinned: boolean
        }
        api: any
        node: any
    }
}>()

const pocket = props.params.data
const bgColor = ref(pocket.bgColor)
const iconColor = ref(pocket.iconColor)
const emit = defineEmits(['update:bgColor', 'update:iconColor'])

// Watch for changes in `bgColor` and `iconColor` props to update local `ref`s
watch(
    () => props.params.data.bgColor,
    (newVal) => {
        bgColor.value = newVal
    },
    { immediate: true }
)

watch(
    () => props.params.data.iconColor,
    (newVal) => {
        iconColor.value = newVal
    },
    { immediate: true }
)

// Watch for local `bgColor` and `iconColor` changes to update `pocket`
watch(
    () => bgColor.value,
    (newVal) => {
        pocket.bgColor = newVal
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        pocket.iconColor = newVal
    }
)

watch(
    () => bgColor.value,
    (newVal) => {
        if (pocket) {
            pocket.bgColor = newVal
        } else {
            emit('update:bgColor', newVal)
        }
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        if (pocket) {
            pocket.iconColor = newVal
        } else {
            emit('update:iconColor', newVal)
        }
    }
)
</script>

<template>
    <ContextMenu>
        <ContextMenuTrigger>
            <VDropdown
                theme="detail"
                class="flex items-center justify-center p-1 size-full"
                placement="right-start"
                :distance="0">
                <button
                    :style="{
                        backgroundColor: pocket.bgColor,
                        color: pocket.iconColor,
                    }"
                    class="grid p-3.5 transition-all duration-300 rounded-[4px] relative shadow-sm group place-items-center apsect-square hover:shadow-warm hover:ring-1 hover:ring-[currentColor/60] size-12"
                    @click.stop>
                    <icon
                        :style="{ color: pocket.iconColor }"
                        :icon="`${pocket.icon}`"
                        class="size-full" />

                    <div
                        :style="{
                            backgroundColor: pocket.iconColor,
                            color: pocket.bgColor,
                            borderColor: pocket.bgColor,
                        }"
                        class="grid place-items-center p-[2px] absolute top-0 right-0 rounded-full size-4.5 border *:size-full group-hover:opacity-80 opacity-0 transition-all duration-300 shadow-sm">
                        <icon icon="ri:edit-fill" />
                    </div>
                </button>

                <template #popper>
                    <CreateIcon
                        :selectedIcon="pocket.icon"
                        v-model:bgColor="bgColor"
                        v-model:iconColor="iconColor"
                        :pocketKey="pocket.key" />
                </template>
            </VDropdown>

            <TableContextMenu :pocketKey="pocket.key" />
        </ContextMenuTrigger>
    </ContextMenu>
</template>

<style scoped>
.v-popper--shown button {
    @apply ring-1 ring-neutral/40 ring-offset-1 shadow-md;

    & > div {
        @apply opacity-80;
    }
}
</style>
