<script setup lang="ts">
import type { ItemSet, pocket } from 'types'

const props = defineProps<{
    set: ItemSet
    pocket: pocket
}>()

const pocket = ref(props.pocket)
const start = ref(pocket.items[0].start[0])
const core = ref(pocket.items[0].core[0])

const final = ref(pocket.items[0].final[0])

function clear(set) {
    if (set == core) {
        core.value = null
    } else if (set == start) {
        start.value = null
    } else if (set == final) {
        final.value = null
    }
}

function startChange(set, event) {
    event.target.value == true ?
        (pocket.value.items[0].final[0] = set)
    :   (pocket.value.items[0].start[0] = null)
}

function coreChange(set, event) {
    event.target.value == true ?
        (pocket.value.items[0].core[0] = set)
    :   (pocket.value.items[0].core[0] = null)
}

function finalChange(set, event) {
    event.target.value == true ?
        (pocket.value.items[0].final[0] = set)
    :   (pocket.value.items[0].final[0] = null)
}
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
