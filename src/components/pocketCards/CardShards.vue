<script setup lang="ts">
import type { pocket } from 'types'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/pocket/pocket-cards/CardShards.vue
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
<<<<<<<< HEAD:src/components/pocket/pocket-cards/CardShards.vue
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<<< HEAD:src/components/pocketCards/CardShards.vue
import { getShardIcon, getShardClass } from '@utils/getColor'
========
import { getShardIcon, getShardClass } from '@/utils/GetColor'
<<<<<<< HEAD
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/pocket/pocket-cards/CardShards.vue
<<<<<<< HEAD
=======
========
import { getShardIcon, getShardClass } from '@utils/getColor'
>>>>>>>> 83f9266d (update 42 files and delete 17 files):src/components/pocketCards/CardShards.vue
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/pocket/pocket-cards/CardShards.vue
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
<<<<<<< HEAD
=======
========
import { getShardIcon, getShardClass } from '@utils/getColor'
>>>>>>>> 621837bd (update 42 files and delete 17 files):src/components/pocketCards/CardShards.vue
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <div class="">
        <icon
            icon="game-icons:floating-crystal"
            class="text-nc-mb-2 size-5 shrink-0 opacity-80 drop-shadow-sm" />
        <!--         <template v-for="shard in set.shards" :key="shard.name">
            <div
                class="grid flex-nowrap place-items-center"
                :class="
                    cn(
                        shard.name != 'empty' ?
                            getShardClass(shard)
                                .toString()
                                .replace(/border.*/, '')
                        :   ''
                    )
                ">
                <icon
                    :icon="getShardIcon(shard)"
                    class="size-6 shrink-0 rounded-full drop-shadow-sm"
                    :class="
                        cn(getShardClass(shard), {
                            'opacity-40': shard.name == 'empty',
                        })
                    " />
            </div>
        </template> -->
    </div>
</template>
<style scoped></style>
