<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { useAccountStore } from '@stores/accountStore'
import type { HTMLAttributes } from 'vue'

const as = useAccountStore()
=======
import { useGeneralStore } from '@/stores/generalStore'
import type { HTMLAttributes } from 'vue'

const gs = useGeneralStore()
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
import type { HTMLAttributes } from 'vue'

const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
import type { HTMLAttributes } from 'vue'

const as = useAccountStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>
<template>
    <Icon
        icon="teenyicons:left-small-outline"
        :class="
            cn(
                'ml-auto size-4.5 shrink-0 transition-transform duration-200 group-data-[state=open]:-rotate-90',
                props.class
            )
        " />
</template>
<style scoped></style>
