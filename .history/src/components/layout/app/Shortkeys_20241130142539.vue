<script setup lang="ts">
import { newPocketDrawer } from '@/components/drawer/data'
import { commandModal } from '@/components/command/data'
import { toggleModalState } from '@utils/utils'
import { useGeneralStore } from '@stores/generalStore'

const gs = useGeneralStore()

function toggleCommand() {
    const a = gs.commandOpen
    a == false ? (gs.commandOpen = true) : (gs.commandOpen = false)
    console.log(a)
    console.log('gs', gs.commandOpen)
}
</script>
<template>
    <div
        v-shortkey.once="['meta', 'n']"
        @shortkey="toggleModalState(newPocketDrawer)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleCommand()"
        class="open-command"></div>
</template>
<style scoped></style>
