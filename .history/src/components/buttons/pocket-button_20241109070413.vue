<script setup lang="ts">
import type { pocket } from 'types';


const props = defineProps<{
    pocket: pocket
    iconOrder?: boolean
    right?: boolean
}>()
</script>

<template>
<Dialog>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <ButtonDd :pocket="props.pocket" :iconOrder="props.iconOrder" class="pl-4 pr-5">

                <template #text>
                    <p class='text-sm leading-none text-right w-full'> Pocket Name </p>
                    <h3 class="truncate  max-w-36 text-right" :class="">
                        {{ pocket.name }}
                    </h3>
                </template>

                <template #icon>
                    <PocketIcon :pocketKey="pocket.key" :size="36" :padding="9" />
                </template>


            </ButtonDd>


        </DropdownMenuTrigger>

        <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
    </DropdownMenu>


    <PopPocket :pocketKey="pocket.key" :title="'Edit Pocket'" submitText="Save"
        description="Some mistakes you CAN make twice. Update your pocket information if life happens." />


</Dialog>
</template>

<style scoped></style>