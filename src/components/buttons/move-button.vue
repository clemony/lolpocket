<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { toast } from 'vue-sonner'

const ps = usePocketStore()

const props = defineProps<{
    to?: Array<any>
    text?: string
    icon?: string
}>()



function move() {
    const selectedKeys = ps.selectedRows.map(({ key }) => key)

    function description() {
        if (selectedKeys.length > 1) {
            return `${selectedKeys.length} pockets moved to ${props.text}`
        } else {
            return `One pocket moved to ${props.text}`
        }
    }



    selectedKeys.forEach((key) => {
        const index = ps.pockets.findIndex((pocket) => pocket.key === key)

        if (index !== -1) {
            const [removedPocket] = ps.pockets.splice(index, 1)
            props.to.push(removedPocket)
            ps.pocketApi.setGridOption('rowData', ps.rowData)
        }
    })

    toast(props.text, {
        description: description,
        action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
        },
    })
}


const selectedCount = ref(ps.selectedRows.length)

watch(
    () => ps.selectedRows,
    (newVal) => {
        selectedCount.value = newVal.length
    },
)
</script>

<template><Button variant="outline" size="sm" @click="move" :alt="'move to' + props.text" :disabled="!ps.selectedRows.length"
    class='relative  join-item'>
    <slot />

    <div v-if="ps.selectedRows.length"
        class='grid place-content-center place-items-center absolute  top-[1px] right-1 size-3.5 bg-neutral rounded-full text-neutral-content  pointer-events-none aspect-square'>
        {{ selectedCount }}
    </div>
</Button></template>

<style scoped></style>