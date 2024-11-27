<script setup lang="ts">
import { commandModal, newPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const commandOpen = ref(gs.commandOpen)
const toggleCommand = useToggle(commandOpen)
</script>
<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketModal)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleCommand()"
        class="open-command"></div>
</template>
<style scoped></style>
