<script setup lang="ts">
import { useSessionStore } from '@stores/sessionStore'
import { usePocketStore } from '@stores/pocketStore'

const sn = useSessionStore()
const ps = usePocketStore()

const props = defineProps<{
    set: any
    type: string
}>()

const showItems = ref(false)

// Computed to determine the prefix based on type
const thisThing = computed(() => {
    if (props.type === 'items') {
        return 'item'
    } else if (props.type === 'runes') {
        return 'rune'
    }
});

// Adjust the computed property to handle runes spread across multiple keys
const sett = computed(() => {
    if (props.type === 'items') {
        return props.set.items
    } else if (props.type === 'runes') {
        // Collect runes from different keys into a single array
        return [
            props.set.keystone,
            props.set.p1,
            props.set.p2,
            props.set.p3,
            props.set.s1,
            props.set.s2,
            props.set.s3
        ].filter(Boolean); // Exclude any undefined/null values
    }
});
</script>

<template><!------------------------⟢ items ⟣------------------------->
<li class='flex flex-row flex-nowrap !w-[calc(100%-3px)]'>
    <ButtonToggle v-model:model="showItems" />
    <ButtonMenuItem>
        <span class=''>{{ props.set.name }}</span>
    </ButtonMenuItem>
</li>
<li>
    <ul :class="{ 'menu-dropdown-show': showItems }" class='menu-dropdown'>
        <li v-for="thing in sett" :key="thing.name" class="pointer-events-none"
            :class="{ 'hidden': thing.name === 'none' }">
            <ButtonMenuItem>
                <img :src="(props.type === 'items' ? `/img/items/${thing.id}.webp` : thing.img)"
                    class='rounded-full size-5 aspect-square shrink-0' />
                <span>{{
                    thing.name.replace('none',
                        'empty')
                }}</span>
            </ButtonMenuItem>
        </li>
    </ul>
</li>
</template>

<style scoped></style>