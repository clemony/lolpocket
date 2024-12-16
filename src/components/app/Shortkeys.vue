<script setup lang="ts">
import { newPocketDrawer } from '@components/drawer/data'
import { commandModal } from '@components/command/data'
import { toggleDrawerState } from '@utils/utils'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { useAccountStore } from '@stores/accountStore'

const as = useAccountStore()

function toggleCommand() {
    const a = as.commandOpen
    a == false ? (as.commandOpen = true) : (as.commandOpen = false)
    console.log(a)
    console.log('gs', as.commandOpen)
=======
import { useGeneralStore } from '@stores/generalStore'
<<<<<<< HEAD
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)

const as = useAccountStore()

function toggleCommand() {
    const a = as.commandOpen
    a == false ? (as.commandOpen = true) : (as.commandOpen = false)
    console.log(a)
<<<<<<< HEAD
    console.log('gs', gs.commandOpen)
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    console.log('gs', as.commandOpen)
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======

const gs = useGeneralStore()

function toggleCommand() {
    const a = gs.commandOpen
    a == false ? (gs.commandOpen = true) : (gs.commandOpen = false)
    console.log(a)
    console.log('gs', gs.commandOpen)
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
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
