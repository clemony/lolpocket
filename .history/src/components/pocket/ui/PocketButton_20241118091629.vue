<script setup lang="ts">
import type { pocket } from 'types'

const props = withDefaults(
    defineProps<{
        pocket: pocket
        right?: boolean
        left?: boolean
        size?: number
        padding?: number
    }>(),
    {
        size: 36,
        padding: 9,
    }
)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <ButtonDd
                :pocket="props.pocket"
                :left="props.left"
                :class="{
                    'pl-4 pr-2': !props.left,
                    '!w-full grow pl-3 pr-2': props.left,
                }">
                <template #text>
                    <h4
                        class="max-w-36 truncate"
                        :class="{
                            'text-right': !props.left,
                            'w-full !text-base': props.left,
                        }">
                        {{ pocket.name }}
                    </h4>
                </template>

                <template #icon>
                    <PocketIcon
                        :pocket="pocket"
                        :size="props.size"
                        :padding="props.padding" />
                </template>
            </ButtonDd>
        </DropdownMenuTrigger>

        <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
    </DropdownMenu>
</template>

<style scoped></style>
