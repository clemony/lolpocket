<script setup lang="ts">
import type { pocket } from 'types';


const props = defineProps<{
    pocket: pocket
    right?: boolean
    left?: boolean
}>()
</script>

<template>
<Dialog>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <ButtonDd :pocket="props.pocket" :left="props.left" class="pl-4 pr-5 w-full">

                <template #text>
                    <p class='text-sm leading-none text-right w-full'> Pocket Name </p>
                    <h3 class="truncate  "
                        :class="{ 'text-right max-w-36 ': !props.left, '!text-base !font-medium grow w-full': props.left }">
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