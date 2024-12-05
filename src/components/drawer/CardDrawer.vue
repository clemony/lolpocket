<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()

const imports = import.meta.glob('/public/img/cards/*.webp', {
    import: 'default',
    eager: true,
})
const arr = Object.values(imports)
const images = arr.forEach((image) => {
    image.toString().replace('/public', '')
})

console.log('gug', images)
</script>
<template>
    <div class="relative w-full justify-center">
        <DialogFooter class="absolute -bottom-12 left-0 w-full pb-3 pt-5">
            <DialogClose>
                <Button
                    v-if="!gs.drawerPocket"
                    variant="neutral"
                    size="lg"
                    type="submit"
                    class="justify-self-end">
                    {{ gs.drawerValue.submitText }}
                </Button>

                <Button
                    v-else
                    variant="neutral"
                    type="button"
                    size="md"
                    class="justify-self-end">
                    {{ gs.drawerValue.submitText }}
                </Button>
            </DialogClose>
        </DialogFooter>
    </div>
</template>
<style scoped></style>
