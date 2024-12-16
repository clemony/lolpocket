<script setup lang="ts">
import { makeBox } from '@/utils/makeBox'
import type { pocket, RuneSet } from 'types'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/pocket/pocket-cards/CardItems.vue
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
<<<<<<<< HEAD:src/components/pocket/pocket-cards/CardItems.vue
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<<< HEAD:src/components/pocketCards/CardItems.vue
import { getColor } from '@utils/getColor'
========
import { getColor } from '@/utils/GetColor'
<<<<<<< HEAD
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/pocket/pocket-cards/CardItems.vue
<<<<<<< HEAD
=======
========
import { getColor } from '@utils/getColor'
>>>>>>>> 83f9266d (update 42 files and delete 17 files):src/components/pocketCards/CardItems.vue
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/pocket/pocket-cards/CardItems.vue
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
<<<<<<< HEAD
=======
========
import { getColor } from '@utils/getColor'
>>>>>>>> 621837bd (update 42 files and delete 17 files):src/components/pocketCards/CardItems.vue
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)

const props = defineProps<{
    pocket: pocket
    set: RuneSet
}>()

const pocket = ref(props.pocket)

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})
</script>
<template>
    <div
        class="shadow-pretty flex w-full shrink-0 justify-evenly rounded-full p-2 backdrop-blur-md backdrop-brightness-97 backdrop-saturate-115">
        <template v-for="(item, i) in items" :key="item.id">
            <ItemPop :item="item">
                <div
                    v-if="i < 6"
                    :key="item.id"
                    class="z-10 size-9 shrink-0 rounded-full p-0"
                    :style="{
                        zIndex: items.length + 1 - i /*
                    outlineStyle: 'double thick',
                    outlineColor: `var(--${set.primary})`,
                    outlineWidth: '1px', */,
                    }">
                    <LoadImg
                        :url="`/img/items/${item.id}.webp`"
                        class="z-0 size-full rounded-full outline-hidden" />
                </div>
            </ItemPop>
        </template>
        <ShadowedPlaceholder
            v-for="index in makeBox(items.length, 6)"
            class="border-dark-1/15 bg-light-1/50 shadow-warm size-9 rounded-full"
            :style="{
                /*                 backgroundColor: `var(--${set.secondary}-light`,
                 */
                zIndex: 6 + 1 - index,
            }" />
    </div>
</template>

<style scoped></style>
