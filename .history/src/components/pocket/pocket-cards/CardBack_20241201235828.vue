<script setup lang="ts">
import { toggleDrawerState } from '@utils/utils'
import { editPocketDrawer } from '@/components/drawer/data'
import { deletePocket, duplicatePocket } from '@utils/pocketUtilities'
import { pocket } from 'types';

const variant = 'ghost'

const props = defineProps<{
pocket: pocket
style: any
}>()
</script>
<template>
 <div
                            class="flex gap-5 [&_>*]:grid [&_>*]:!aspect-square [&_>*]:size-11 [&_>*]:place-items-center [&_>*]:justify-start [&_>*]:rounded-full [&_>*]:bg-neutral/70 [&_>*]:text-neutral-content [&_>*]:shadow-standard [&_>*]:ring-1 [&_>*]:ring-offset-2 [&_>*]:ring-offset-base-100/20 [&_>*]:backdrop-blur-sm after:[&_>*]:absolute after:[&_>*]:size-full after:[&_>*]:scale-[120%] after:[&_>*]:rounded-full after:[&_>*]:border after:[&_>*]:border-neutral/50 hover:[&_>*]:bg-base-100/20 [&_svg]:mr-1">
                            <Tooltip
                                content="Edit Pocket Data"
                                align="bottom"
                                dark>
                                <Button
                                    @click="
                                        toggleDrawerState(
                                            editPocketDrawer,
                                            pocket
                                        )
                                    "
                                    :style="layer0">
                                    <icon icon="teenyicons:edit-1-outline" />
                                </Button>
                            </Tooltip>
                            <Tooltip content="Open Pocket" align="bottom" dark>
                                <Button
                                    class="grid place-items-center"
                                    :style="layer0"
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
                                :style="layer0"
                                class="!size-11"
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
                                    class="dir size-full pr-0 [&_>*]:w-full [&_>*]:justify-start [&_>*]:gap-4 [&_>*]:pl-3 hover:[&_>*]:bg-base-100/20">
                                    <Button
                                        @click="duplicatePocket(pocket)"
                                        :variant="variant">
                                        <icon
                                            icon="teenyicons:layers-subtract-outline" />
                                        <span class="-ml-[1px]">Duplicate</span>
                                    </Button>

                                    <Button :variant="variant">
                                        <icon
                                            icon="teenyicons:upload-outline" />
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
<style scoped>
</style>