<script setup lang="ts">
import type { ItemSet, pocket } from 'types'

const props = defineProps<{
    set: ItemSet
    pocket: pocket
}>()
</script>

<template>
    <label>
        <Button
            class="w-full justify-start"
            :variant="set == pocket.items[0].start[0] ? 'inspiration' : 'ghost'"
            size="sm">
            Start
        </Button>
        <input
            type="radio"
            name="set-type"
            @change="pocket.items[0].start[0] = set"
            class="hidden"
            :value="set" />
    </label>
    <label>
        <Button
            class="w-full justify-start"
            :variant="set == pocket.items[0].core[0] ? 'precision' : 'ghost'"
            size="sm">
            Core
        </Button>
        <input
            type="radio"
            name="set-type"
            @change="coreChange(set, $event)"
            class="hidden"
            :value="set" />
    </label>
    <label>
        <Button
            class="w-full justify-start"
            :variant="set == pocket.items[0].final[0] ? 'resolve' : 'ghost'"
            size="sm">
            Complete
        </Button>
        <input
            type="checkbox"
            :true-value="set"
            @change="finalChange(set, $event)"
            class="hidden"
            :value="set" />
    </label>

    <Button
        class="w-full justify-start"
        size="sm"
        :variant="
            (
                set != pocket.items[0].final[0] &&
                set != pocket.items[0].core[0] &&
                set != pocket.items[0].start[0]
            ) ?
                'default'
            :   'ghost'
        "
        @click="clear(set)">
        none
    </Button>
</template>

<style scoped></style>
