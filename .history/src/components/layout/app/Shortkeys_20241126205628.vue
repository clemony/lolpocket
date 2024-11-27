<script setup lang="ts">
import { commandModal, newPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>
<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="gs.commandOpen == false ? true : false"
        class="open-command"></div>
</template>
<style scoped></style>
