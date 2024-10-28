<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'

const props = defineProps<{
    params?: {
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
    ring?: boolean
    pocketKey?: string
    table?: boolean
}>()


const pocket = computed(() => {
    const ps = usePocketStore();
    let lp = ''
    if (props.params) {
        lp = props.params.data.key;
    } else if (props.pocketKey) {
        lp = props.pocketKey;
    }
    return ps.getPocket(lp)
});

const bgColor = ref(pocket.value.bgColor)
const iconColor = ref(pocket.value.iconColor)
const emit = defineEmits(['update:bgColor', 'update:iconColor'])

// Watch for changes in `bgColor` and `iconColor` props to update local `ref`s
watch(
    () => pocket.value.bgColor,
    (newVal) => {
        bgColor.value = newVal
    },
    { immediate: true }
)

watch(
    () => pocket.value.iconColor,
    (newVal) => {
        iconColor.value = newVal
    },
    { immediate: true }
)

// Watch for local `bgColor` and `iconColor` changes to update `pocket`
watch(
    () => bgColor.value,
    (newVal) => {
        pocket.value.bgColor = newVal
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        pocket.value.iconColor = newVal
    }
)

watch(
    () => bgColor.value,
    (newVal) => {
        if (pocket) {
            pocket.value.bgColor = newVal
        } else {
            emit('update:bgColor', newVal)
        }
    }
)

watch(
    () => iconColor.value,
    (newVal) => {
        if (pocket) {
            pocket.value.iconColor = newVal
        } else {
            emit('update:iconColor', newVal)
        }
    }
)
</script>

<template>
<ContextMenu>
    <ContextMenuTrigger>
        <VDropdown theme="detail" class="flex size-full items-center justify-center p-1" placement="right-start"
            :distance="0">
            <button :style="{
                backgroundColor: pocket.bgColor,
                color: pocket.iconColor,
            }" class="pointer-events-auto apsect-square hover:shadow-warm group relative grid size-12 place-items-center rounded-full p-3.5 shadow-sm transition-all duration-300 hover:ring-1 hover:ring-[currentColor/60]"
                :class="{
                    '!ring-4 ring-offset-0 ring-neutral-content/60': props.ring,
                    ' !size-9 !p-2.5 !aspect-square': props.table
                }" @click.stop>
                <icon :style="{ color: pocket.iconColor }" :icon="`${pocket.icon}`" class="size-full" />

                <div :style="{
                    backgroundColor: pocket.iconColor,
                    color: pocket.bgColor,
                    borderColor: pocket.bgColor,
                }"
                    class="absolute right-0 top-0 grid size-4.5 place-items-center rounded-full border p-[2px] opacity-0 shadow-sm transition-all duration-300 *:size-full group-hover:opacity-80">
                    <icon icon="ri:edit-fill" />
                </div>
            </button>

            <template #popper>
                <CreateIcon :selectedIcon="pocket.icon" v-model:bgColor="bgColor" v-model:iconColor="iconColor"
                    :pocketKey="pocket.key" />
            </template>
        </VDropdown>

        <CmPocket :pocketKey="pocket.key" />
    </ContextMenuTrigger>
</ContextMenu>
</template>

<style scoped>
.v-popper--shown button {
    @apply shadow-md ring-1 ring-neutral/40 ring-offset-1;

    &>div {
        @apply opacity-80;
    }
}
</style>
