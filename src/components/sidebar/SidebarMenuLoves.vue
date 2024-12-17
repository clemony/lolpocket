<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
=======
<<<<<<<< HEAD:src/client/components/sidebar/SidebarMenuLoves.vue
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
========
import { useItemStore } from '@/stores/itemStore'
import { useChampStore } from '@/stores/champStore'
import { useGeneralStore } from '@/stores/generalStore'
<<<<<<< HEAD
>>>>>>>> 4634f11e (update 8 files and delete 426 files):src/components/sidebar/SidebarMenuLoves.vue
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>>> 5132f0ce (update 8 files and delete 426 files):src/components/sidebar/SidebarMenuLoves.vue
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useTempStore } from '@stores/tempStore'
import { useAccountStore } from '@stores/accountStore'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)

const as = useAccountStore()
const ts = useTempStore()

const loveMessage = ref('')

let previousFavoriteChamps = [...toRaw(as.favoriteChamps)] // Initial copy of the champions array

watch(
    () => as.favoriteChamps.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewChamps = toRaw(as.favoriteChamps)

        console.log('Previous champions:', previousFavoriteChamps)
        console.log('Current champions:', rawNewChamps)

        if (newLength > oldLength) {
            // A new champion was added
            const newChamp = rawNewChamps.find(
                (champ) => !previousFavoriteChamps.includes(champ)
            )
            if (newChamp) {
                console.log('New champion added:', newChamp)
                loveMessage.value = `+ ${newChamp.name}`
            }
        } else if (newLength < oldLength) {
            // A champion was removed
            const removedChamp = previousFavoriteChamps.find(
                (champ) => !rawNewChamps.includes(champ)
            )
            if (removedChamp) {
                console.log('Removed champion:', removedChamp)
                loveMessage.value = `- ${removedChamp.name}`
            }
        }

        // Update the previous array copy
        previousFavoriteChamps = [...rawNewChamps]
    }
)

let previousFavoriteItems = [...toRaw(as.favoriteItems)] // Initial copy of the array

watch(
    () => as.favoriteItems.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewItems = toRaw(as.favoriteItems)

        console.log('Previous items:', previousFavoriteItems)
        console.log('Current items:', rawNewItems)

        if (newLength > oldLength) {
            // A new object was added
            const newItem = rawNewItems.find(
                (item) => !previousFavoriteItems.includes(item)
            )
            if (newItem) {
                console.log('New item added:', newItem)
                loveMessage.value = `+ ${newItem.name}`
            }
        } else if (newLength < oldLength) {
            // An object was removed
            const removedItem = previousFavoriteItems.find(
                (item) => !rawNewItems.includes(item)
            )
            if (removedItem) {
                console.log('Removed item:', removedItem)
                loveMessage.value = `- ${removedItem.name}`
            }
        }

        // Update the previous array copy
        previousFavoriteItems = [...rawNewItems]
    }
)
</script>

<template>
    <!-- <ButtonMenuItem @click="sn.navigateTo('/likes')">
    <Icon icon="teenyicons:heart-outline" />
    <span class=''>Favorite</span> -->

    <Transition name="toast">
        <div
            v-if="loveMessage && !as.isMinimized"
            :key="loveMessage"
            class="badge badge-ghost badge-sm border-b2/20 bg-b1/70! flex items-center justify-start text-nowrap opacity-0 shadow-xs">
            <span class="max-w-24 truncate">{{ loveMessage }}</span>
        </div>
    </Transition>
    <!-- </ButtonMenuItem> -->
</template>

<style scoped></style>
