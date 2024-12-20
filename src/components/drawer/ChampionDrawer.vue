<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
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
