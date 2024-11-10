<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { pocket, dateObject } from 'types'
const ps = usePocketStore()

const props = defineProps<{
    params: {
        data: {
            name: string
            key: string
            items: {}
            pinned: boolean
            notes: string
            dateCreated: dateObject
            dateUpdated: dateObject
        }
        api: any
        node: any
        type: string
    }
    type?: string
}>()

const pocket = ps.getPocket(props.params.data.key)

const patch = computed(() => {
    if (!pocket) {
        return
    }
    if (props.params.type == 'created') {
        return pocket.dateCreated[0].patch
    } else {
        return pocket.dateUpdated[0].patch
    }
})

const date = computed(() => {
    if (!pocket) {
        return
    }

    if (props.params.type == 'created') {
        return pocket.dateCreated[0].date
    } else {
        return pocket.dateUpdated[0].date
    }
})

const time = computed(() => {
    if (!pocket) {
        return
    }

    if (props.params.type == 'created') {
        return pocket.dateCreated[0].time
    } else {
        return pocket.dateUpdated[0].time
    }
})

const lastUpdated = pocket.dateUpdated[0].patch
const currentPatch = ps.patch

const getStyles = computed(() => {
    if (!pocket) {
        return
    }
    if (props.params.type == 'updated') {


        // Slice off the third part (hotfix patch) and only keep the first two parts
        const [lastMajor, lastMinor] = lastUpdated
            .split('.')
            .slice(0, 2)
            .map(Number)
        const [currentMajor, currentMinor] = currentPatch
            .split('.')
            .slice(0, 2)
            .map(Number)

        // Success: exact same major and minor version
        if (lastMajor === currentMajor && lastMinor === currentMinor) {
            return 'checkbox-success [--chkfg:oklch(var(--b1))]'
        }

        // Warning: same major version and lastMinor is within two versions (e.g., 14.18, 14.17) of the currentMinor (e.g., 14.19)
        if (
            lastMajor === currentMajor &&
            currentMinor - lastMinor <= 2 &&
            currentMinor - lastMinor > 0
        ) {
            return 'checkbox-warning '
        }

        // Error: any other case
        return 'checkbox-error '
    } else {
        return 'checkbox-ghost'
    }
})

const dateObjects = [

    {
        name: 'Date',
        // icon: "radix-icons:calendar",
        //iconClass: " size-3.5",
        data: date,
    },
    {
        name: 'Patch',
        icon: '',
        iconClass: 'size-[12px]',
        data: patch,
    },
    {
        name: 'Time',
        //icon: "fluent-mdl2:alarm-clock",
        //iconClass: " size-3.5",
        data: time,
    },
]


</script>

<template>
<div class="group rounded overflow-hidden size-full place-items-center [&_>span]:w-full px-2">
    <ContextMenu>
        <ContextMenuTrigger>
            <div v-for="(object, index) in dateObjects"
                class="group grid h-full relative  items-center justify-center ">
                <div class="gap-2 text-sm flex items-center justify-center ">
                    <input type="checkbox" v-if="object.name == 'Patch' && props.params.type == 'updated'"
                        class="checkbox checkbox-xs pointer-events-none" :class="getStyles"
                        :checked="lastUpdated == currentPatch" />
                    <span
                        class=" !tracking-wide transition-all duration-500 text-xs text-right opacity-0 group-hover:opacity-80"
                        :class="{ ' !text-sm !tracking-wider opacity-100': object.name == 'Patch' }">{{
                            object.data
                        }}</span>
                </div>

            </div>
        </ContextMenuTrigger>

        <CmPocket v-if="pocket" :pocketKey="pocket.key">
            <template #first>
                <ContextMenuItem disabled class="-mb-1 h-4.5 self-end">
                    Set all to...
                </ContextMenuItem>
                <ContextMenuSeparator />
                <context-menu-item>
                    <icon icon="simple-icons:riotgames" class="opacity-70" />
                    <span class="flex items-center gap-1"> Patch </span>
                </context-menu-item>

                <context-menu-item>
                    <icon icon="radix-icons:calendar" />
                    <span class="flex items-center gap-1"> Date </span>
                </context-menu-item>

                <context-menu-item>
                    <icon icon="fluent-mdl2:alarm-clock" />
                    <span class="flex items-center gap-1"> Time </span>
                </context-menu-item>

                <ContextMenuSeparator />
            </template>
        </CmPocket>
    </ContextMenu>
</div>
</template>

<style scoped></style>
