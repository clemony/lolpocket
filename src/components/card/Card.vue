<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        :class="
            cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/card/Card.vue
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
=======
                '!border-b3 bg-b1/90 shadow-smooth rounded-xl backdrop-blur-md',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/base/card/Card.vue
=======
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/base/card/Card.vue
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/base/card/Card.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
                '!border-b3 bg-b1/95 shadow-smooth rounded-xl backdrop-blur-md',
>>>>>>> c29d3eca (update 84 files and delete 4 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
                props.class
            )
        ">
        <slot />
    </div>
</template>
