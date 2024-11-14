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
            <ButtonDd :pocket="props.pocket" :left="props.left"
                :class="{ 'pl-4 pr-5': !props.left, 'pl-3 pr-2 !w-full grow': props.left }">

                <template #text>
                    <p class='text-sm  leading-none font-mono opacity-70 text-right w-full'> Pocket Name
                    </p>
                    <h4 class="truncate   max-w-36 "
                        :class="{ 'text-right  ': !props.left, '!text-base  w-full': props.left }">
                        {{ pocket.name }}
                    </h4>
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