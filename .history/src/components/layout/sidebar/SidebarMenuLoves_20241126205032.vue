<script setup lang="ts">
import { useItemStore } from '@/stores/itemStore'
import { useChampStore } from '@/stores/champStore'
import { useGeneralStore } from '@/stores/generalStore'

const sn = useSessionStore()
const gs = useGeneralStore()
const cs = useChampStore()
const is = useItemStore()

const loveMessage = ref('')

let previousFavoriteChamps = [...toRaw(cs.favoriteChamps)] // Initial copy of the champions array

watch(
    () => cs.favoriteChamps.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewChamps = toRaw(cs.favoriteChamps)

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

let previousFavoriteItems = [...toRaw(is.favoriteItems)] // Initial copy of the array

watch(
    () => is.favoriteItems.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewItems = toRaw(is.favoriteItems)

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
            v-if="loveMessage && !gs.isMinimized"
            :key="loveMessage"
            class="badge badge-ghost badge-sm flex items-center justify-start text-nowrap border-base-200/20 !bg-base-100/70 opacity-0 shadow-sm">
            <span class="max-w-24 truncate">{{ loveMessage }}</span>
        </div>
    </Transition>
    <!-- </ButtonMenuItem> -->
</template>

<style scoped></style>
