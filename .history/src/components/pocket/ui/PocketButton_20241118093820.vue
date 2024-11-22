<script setup lang="ts">
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
    defineProps<{
        pocket: pocket
        class?: HTMLAttributes['class']
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
                :class="cn('', props.class)">
                <slot name="left" />
                <template #text>
                    <h4>
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
