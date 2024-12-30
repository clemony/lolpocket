<script setup lang="ts">
import { newPocketDrawer } from '@components/drawer/data'
import { commandModal } from '@components/command/data'
import { toggleDrawerState } from '@/functions/utils'
import { useAccountStore } from '@stores/accountStore'

const as = useAccountStore()

function toggleCommand() {
    const a = as.commandOpen
    a == false ? (as.commandOpen = true) : (as.commandOpen = false)
    console.log(a)
    console.log('gs', as.commandOpen)
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
