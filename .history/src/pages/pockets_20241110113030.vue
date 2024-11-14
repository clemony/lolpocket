<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'



const ps = usePocketStore()
const sn = useSessionStore()
const route = useRoute()


</script>

<template>
<PageLayout>

    <template #header>
        Pockets
    </template>

    <template #header-center>
        <Dialog>
            <DialogTrigger>

                <Button variant="ghost" size="sm" class='!font-medium  align-baseline'>
                    New Pocket
                    <icon icon="teenyicons:add-small-outline" class='size-3.5 -ml-1 mb-[3px]' />
                </Button>
            </DialogTrigger>
            <PopPocket :title="'New Pocket'" submitText="Create"
                description="Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon." />

        </Dialog>

        <VDropdown theme="hoverdd" :delay="{ show: 400, hide: 200 }" placement="bottom" class=''>


            <label
                class='hover:cursor-pointer hover:opacity-100  font-medium transition-all group flex gap-1 duration-300 items-center mb-px opacity-60'>



                <span class=' capitalize  px-1 min-w-max w-max'>
                    Options
                </span>

                <ButtonToggle class='pointer-events-none self-center' />

            </label>


            <template #popper>
                <div>
                    <ul><Label>Columns</Label>
                        <li>{{ columnDefs.name }}
                    </ul>

                </div>

            </template>
        </VDropdown>



        <div class="join">


            <MoveButton :to="ps.trashPockets" text="Trash">
                <icon icon="teenyicons:bin-outline" class='size-4.5' />
            </MoveButton>

            <MoveButton :to="ps.archivePockets" text="Archive">
                <icon icon="teenyicons:archive-outline" class='size-4.5' />

            </MoveButton>

        </div>

    </template>
    <template #header-end>
        <span class='mr-2'>
            <TableSearch />
        </span>

    </template>

    <template #content>
        <GridPockets />
    </template>

</PageLayout>
</template>

<style></style>
