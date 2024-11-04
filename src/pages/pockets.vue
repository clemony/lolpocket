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



        <TableSearch />

        <div class="join">


            <MoveButton :to="ps.trashPockets" text="Trash">
                <icon icon="teenyicons:bin-outline" class='size-3.5' />
            </MoveButton>

            <MoveButton :to="ps.archivePockets" text="Archive">
                <icon icon="teenyicons:archive-outline" class='size-3.5' />

            </MoveButton>

        </div>

    </template>




    <template #content>

        <GridPockets />
    </template>

</PageLayout>
</template>

<style></style>
