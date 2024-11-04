<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore();
</script>

<template>
<SidebarHeader>
    <SidebarMenu :ref="gs.sidebar">
        <SidebarMenuItem>
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <SidebarMenuButton size="md"
                            class="data-[state=open]:bg-base-100/70 -ml-1 data-[state=open]:text-base-content data-[state=closed]:ring-0">
                            <div
                                class="flex aspect-square size-6 items-center justify-center rounded-md bg-neutral text-neutral-content text-xl">

                                LP
                            </div>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold !text-base">lolpockets</span>

                            </div>
                            <icon icon="teenyicons:caret-vertical-small-outline" class=" ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        align="start" side="bottom" :side-offset="4">

                        <DropdownMenuItem class='hover:bg-transparent data-[highlighted]:bg-transparent '>
                            <div class="relative w-full max-w-sm items-center max-h-8 ">
                                <Input id="search" type="text" placeholder="Search..." @click.stop
                                    class="pl-10 !max-h-8 !h-8 bg-base-100/80" />
                                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2 7">
                                    <icon icon="teenyicons:search-outline" class="h-5 text-base-content/80" />
                                </span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />



                        <DropdownMenuItem class="gap-2 p-2">




                            <DialogTrigger class='flex items-center gap-2'>
                                <div class="flex size-6 items-center justify-center rounded-md">
                                    <icon icon="teenyicons:folder-plus-outline" class="size-4" />
                                </div>
                                <div class="font-medium text-muted-foreground">
                                    New Pocket
                                </div>

                            </DialogTrigger>


                        </DropdownMenuItem>







                        <DropdownMenuItem>
                            <SidebarTrigger class="-ml-1" />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <PopPocket :title="'New Pocket'" submitText="Create"
                    description="Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon." />


            </Dialog>
        </SidebarMenuItem>
    </SidebarMenu>
</SidebarHeader>
</template>

<style scoped></style>