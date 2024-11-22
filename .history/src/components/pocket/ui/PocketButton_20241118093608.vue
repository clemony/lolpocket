<script setup lang="ts">
import type { pocket } from 'types'

const props = withDefaults(
    defineProps<{
        pocket: pocket
        right?: boolean
        left?: boolean
    }>(),
    {}
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
                <slot name="left" />
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

                <slot />
            </ButtonDd>
        </DropdownMenuTrigger>

        <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
    </DropdownMenu>
</template>

<style scoped></style>
