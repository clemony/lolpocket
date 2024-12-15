<script setup lang="ts">
import { newPocketDrawer } from '@/client/components/drawer/data'
import { commandModal } from '@/client/components/command/data'
import { toggleDrawerState } from '@/client/utils/utils'
import { useGeneralStore } from '@/client/stores/generalStore'

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
        @shortkey="toggleDrawerState(newPocketDrawer)"
        class="open-new-pocket"></div>
    <div
        v-shortkey.once="['meta', 'k']"
        @shortkey="toggleCommand()"
        class="open-command"></div>
</template>
<style scoped></style>
