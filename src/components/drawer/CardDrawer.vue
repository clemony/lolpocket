<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
=======
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

const imports = import.meta.glob('/public/img/cards/*.webp', {
    import: 'default',
    eager: true,
})
const arr = Object.values(imports)
const images = arr.forEach((image) => {
    image.toString().replace('/public', '')
})

const cards = [
    {
        name: 'Coven Ashe',
        id: 'ashe',
    },
    {
        name: 'Cosmic',
        id: 'cosmic',
    },
    {
        name: 'Eclipse Knight',
        id: 'eclipseknight',
    },
    {
        name: 'Moonfall',
        id: 'moonfall',
    },
    {
        name: 'Nidalee and Neeko ',
        id: 'neekonid',
    },
    {
        name: "Scout's Honor",
        id: 'scout',
    },
    {
        name: 'Spirit Blossom',
        id: 'spiritblossom',
    },
    {
        name: 'Starphone',
        id: 'ashe',
    },
]
console.log('gug', images)
</script>
<template>
    <div class="relative w-full justify-center">
        <DialogFooter class="absolute -bottom-12 left-0 w-full pt-5 pb-3">
            <DialogClose>
                <Button
                    v-if="!as.drawerPocket"
                    variant="neutral"
                    size="lg"
                    type="submit"
                    class="justify-self-end">
                    {{ as.drawerValue.submitText }}
                </Button>

                <Button
                    v-else
                    variant="neutral"
                    type="button"
                    size="md"
                    class="justify-self-end">
                    {{ as.drawerValue.submitText }}
                </Button>
            </DialogClose>
        </DialogFooter>
    </div>
</template>
<style scoped></style>
