<script setup lang="ts">
import type { pocket } from 'types';


const props = defineProps<{
    pocket: pocket
    iconOrder?: boolean
}>()
</script>

<template>
<Dialog>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="md"
                class="py-2 w-44 min-w-44 !border-0 flex gap-1 btn btn-ghost btn-sm h-12  rounded-md data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40 data-[state=open]:shadow-sm !ring-0 !pr-1 !pl-2 focus:!ring-1 focus:!outline-0 focus:!ring-base-200 focus:!border-0 flex-nowrap"
                :class="{ '!h-full': props.iconOrder }">

                <div class="grid flex-1 leading-tight text-right mr-2"
                    :class="{ '!text-left !mr-0 ml-2': props.iconOrder }">
                    <span class='!text-[11px] text'> Pocket Name </span>
                    <span class="truncate  font-medium ">
                        {{ pocket.name }}
                    </span>
                </div>
                <div :class="{ 'order-first': props.iconOrder }">
                    <PocketIcon :pocketKey="pocket.key" :size="33" :padding="9" />

                </div>
                <span class='rounded-full shadow-sm shrink-0'>
                    <icon icon="teenyicons:caret-vertical-small-outline" class=" ml-auto" />
                </span>
            </Button>


        </DropdownMenuTrigger>

        <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
    </DropdownMenu>


    <PopPocket :pocketKey="pocket.key" :title="'Edit Pocket'" submitText="Save"
        description="Some mistakes you CAN make twice. Update your pocket information if life happens." />


</Dialog>
</template>

<style scoped></style>