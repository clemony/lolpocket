<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
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
                    v-if="!ts.drawerPocket"
                    variant="neutral"
                    size="lg"
                    type="submit"
                    class="justify-self-end">
                    {{ ts.drawerValue.submitText }}
                </Button>

                <Button
                    v-else
                    variant="neutral"
                    type="button"
                    size="md"
                    class="justify-self-end">
                    {{ ts.drawerValue.submitText }}
                </Button>
            </DialogClose>
        </DialogFooter>
    </div>
</template>
<style scoped></style>
