<script setup lang="ts">
import { useItemStore } from '@stores/itemStore'
import { useChampStore } from '@stores/champStore'
import { useGeneralStore } from '@stores/generalStore'
import { useSessionStore } from '@stores/sessionStore'

const sn = useSessionStore();
const gs = useGeneralStore();
const cs = useChampStore()
const is = useItemStore();

const loveMessage = ref('');

let previousLovedChamps = [...toRaw(cs.lovedChamps)]; // Initial copy of the champions array

watch(
    () => cs.lovedChamps.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewChamps = toRaw(cs.lovedChamps);

        console.log('Previous champions:', previousLovedChamps);
        console.log('Current champions:', rawNewChamps);

        if (newLength > oldLength) {
            // A new champion was added
            const newChamp = rawNewChamps.find(champ => !previousLovedChamps.includes(champ));
            if (newChamp) {
                console.log('New champion added:', newChamp);
                loveMessage.value = `+ ${newChamp.name}`;
            }
        } else if (newLength < oldLength) {
            // A champion was removed
            const removedChamp = previousLovedChamps.find(champ => !rawNewChamps.includes(champ));
            if (removedChamp) {
                console.log('Removed champion:', removedChamp);
                loveMessage.value = `- ${removedChamp.name}`;
            }
        }

        // Update the previous array copy
        previousLovedChamps = [...rawNewChamps];
    }
);

let previousLovedItems = [...toRaw(is.lovedItems)]; // Initial copy of the array

watch(
    () => is.lovedItems.length, // Watch only the length to detect add/remove
    (newLength, oldLength) => {
        const rawNewItems = toRaw(is.lovedItems);

        console.log('Previous items:', previousLovedItems);
        console.log('Current items:', rawNewItems);

        if (newLength > oldLength) {
            // A new object was added
            const newItem = rawNewItems.find(item => !previousLovedItems.includes(item));
            if (newItem) {
                console.log('New item added:', newItem);
                loveMessage.value = `+ ${newItem.name}`;
            }
        } else if (newLength < oldLength) {
            // An object was removed
            const removedItem = previousLovedItems.find(item => !rawNewItems.includes(item));
            if (removedItem) {
                console.log('Removed item:', removedItem);
                loveMessage.value = `- ${removedItem.name}`;
            }
        }

        // Update the previous array copy
        previousLovedItems = [...rawNewItems];
    }
);
</script>

<template><!-- <ButtonMenuItem @click="sn.navigateTo('/likes')">
    <Icon icon="teenyicons:heart-outline" />
    <span class=''>Loved</span> -->

<Transition name="toast">
    <div v-if="loveMessage && !gs.isMinimized" :key="loveMessage"
        class="badge  badge-sm flex items-center justify-start  text-nowrap bg-base-100/60 opacity-0">
        <span class='truncate max-w-24 !text-[10px] '>{{ loveMessage
            }}</span>
    </div>
</Transition>
<!-- </ButtonMenuItem> -->
</template>

<style scoped></style>