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

const getStyles = computed(() => {
    if (!pocket) {
        return
    }
    if (props.params.type == 'updated') {
        const lastUpdated = pocket.dateUpdated[0].patch
        const currentPatch = ps.patch

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
            return 'badge-success text-base-100'
        }

        // Warning: same major version and lastMinor is within two versions (e.g., 14.18, 14.17) of the currentMinor (e.g., 14.19)
        if (
            lastMajor === currentMajor &&
            currentMinor - lastMinor <= 2 &&
            currentMinor - lastMinor > 0
        ) {
            return 'badge-warning text-base-100'
        }

        // Error: any other case
        return 'badge-error text-base-100'
    } else {
        return 'badge-ghost'
    }
})

const dateObjects = [
    {
        name: 'Patch',
        icon: 'simple-icons:riotgames',
        iconClass: 'size-[12px]',
        data: patch,
    },
    {
        name: 'Date',
        // icon: "radix-icons:calendar",
        //iconClass: " size-3.5",
        data: date,
    },
    {
        name: 'Time',
        //icon: "fluent-mdl2:alarm-clock",
        //iconClass: " size-3.5",
        data: time,
    },
]

const selectedObject = ref()

function scroll(name) {
    if (ps.refs[name]) {
        ps.refs[name].forEach((el) => {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            })
        })
    }
}
</script>

<template>
<div class="group carousel carousel-vertical size-full place-items-center [&_>span]:w-full">
    <ContextMenu>
        <ContextMenuTrigger class="!overscroll-contain">
            <div v-for="(object, index) in dateObjects"
                class="group carousel-item relative size-full items-center justify-center overflow-x-clip !overscroll-contain"
                :key="object.name" :ref="(el) => {
                    ps.refs[object.name] = ps.refs[object.name] || []
                    ps.refs[object.name].push(el)
                }
                    ">
                <div :class="getStyles" class="badge gap-2 text-mini">
                    <icon v-if="object.icon" :icon="object.icon" :class="object.iconClass" />
                    <span class="font-medium tracking-widest !text-[11px]">{{
                        object.data
                    }}</span>
                </div>
                <div class="absolute right-0 flex flex-col -space-y-1.5">
                    <icon v-if="index == 1 || index == 2" icon="teenyicons:up-small-outline"
                        class="top-1 size-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <icon v-if="index == 0 || index == 1" icon="teenyicons:down-small-outline"
                        class="-right-[1px] size-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
            </div>
        </ContextMenuTrigger>

        <CmPocket v-if="pocket" :pocketKey="pocket.key">
            <template #first>
                <ContextMenuItem disabled class="-mb-1 h-4.5 self-end">
                    View All...
                </ContextMenuItem>
                <ContextMenuSeparator />
                <context-menu-item @click="scroll('Patch')">
                    <icon icon="simple-icons:riotgames" class="opacity-70" />
                    <span class="flex items-center gap-1"> Patch </span>
                </context-menu-item>

                <context-menu-item @click="scroll('Date')">
                    <icon icon="radix-icons:calendar" />
                    <span class="flex items-center gap-1"> Date </span>
                </context-menu-item>

                <context-menu-item @click="scroll('Time')">
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
