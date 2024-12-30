<script setup lang="ts">
import { toggleDrawerState } from '@/functions/utils'
import { editPocketDrawer } from '@components/drawer/data'
import { deletePocket, duplicatePocket } from '@/functions/pocketUtilities'
import type { pocket } from '@/types/pocketTypes'

const variant = 'ghost'

const props = defineProps<{
    pocket: pocket
    style: any
}>()
</script>
<template>
    <div class="mt-28 flex h-full flex-col gap-20">
        <RouterLink :to="`pocket/${pocket.key}`" as-child>
            <Badge
                class="text-bccent-300 shadow-smooth hover:bg-neutral/20 flex justify-center bg-black/70 py-1! ring-1 ring-black/5 ring-offset-2 ring-offset-neutral-100/20 backdrop-blur-md">
                <h5 class="font-normal!">
                    {{ pocket.name }}
                </h5>
            </Badge>
        </RouterLink>

        <div
            class="*:bg-neutral/70 *:text-bc *:shadow-smooth flex gap-5 *:grid *:aspect-square! *:size-11 *:place-items-center *:justify-start *:rounded-full *:ring-1 *:ring-black/5 *:ring-offset-2 *:ring-offset-neutral-100/20 *:backdrop-blur-md *:hover:bg-neutral-100/20 [&_svg]:mr-1">
            <Tooltip content="Edit Pocket Data" align="bottom" dark>
                <Button
                    @click="toggleDrawerState(editPocketDrawer, pocket)"
                    :style="props.style">
                    <icon icon="teenyicons:edit-1-outline" />
                </Button>
            </Tooltip>
            <Tooltip content="Open Pocket" align="bottom" dark>
                <Button
                    class="grid place-items-center"
                    :style="props.style"
                    as-child>
                    <RouterLink :to="`pocket/${pocket.key}`">
                        <icon
                            icon="uiw:folder-open"
                            class="-ml-2px size-5.5 opacity-80" />
                    </RouterLink>
                </Button>
            </Tooltip>

            <Dropdown
                no-arrow
                size="icon"
                :style="props.style"
                class="size-11!"
                dark
                contentClass="min-w-52">
                <template #1>
                    <Tooltip
                        content="More..."
                        align="bottom"
                        :sideOffset="15"
                        dark>
                        <icon
                            icon="teenyicons:more-horizontal-outline"
                            class="ml-px" />
                    </Tooltip>
                </template>
                <div
                    class="dir size-full pr-0 *:w-full *:justify-start *:gap-4 *:pl-3 *:hover:bg-neutral-100/20">
                    <Button @click="duplicatePocket(pocket)" :variant="variant">
                        <icon icon="teenyicons:layers-subtract-outline" />
                        <span class="-ml-[1px]">Duplicate</span>
                    </Button>

                    <Button :variant="variant">
                        <icon icon="teenyicons:upload-outline" />
                        <span>Export</span>
                    </Button>

                    <Button
                        @click="deletePocket(pocket.key)"
                        :variant="variant">
                        <icon icon="teenyicons:bin-outline" />
                        <span>Send to Trash</span>
                    </Button>
                </div>
            </Dropdown>
        </div>
    </div>
</template>
<style scoped></style>
