<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
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
>>>>>>> be133e04 (update 8 files and delete 426 files)
<<<<<<< HEAD:src/components/base/sidebar/SidebarMenuButtonChild.vue
import { cn } from '@lib/utils'

=======
import { cn } from '@/client/lib/utils'
import { useGeneralStore } from '@/client/stores/generalStore'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { cn } from '@lib/utils'
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
const gs = useGeneralStore()
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/base/sidebar/SidebarMenuButtonChild.vue
=======

>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
=======
import { cn } from '@lib/utils'
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
const gs = useGeneralStore()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/base/sidebar/SidebarMenuButtonChild.vue
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
import { cn } from '@lib/utils'

>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
const gs = useGeneralStore()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/base/sidebar/SidebarMenuButtonChild.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======

>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type SidebarMenuButtonVariants, sidebarMenuButtonVariants } from '.'

export interface SidebarMenuButtonProps extends PrimitiveProps {
    variant?: SidebarMenuButtonVariants['variant']
    size?: SidebarMenuButtonVariants['size']
    isActive?: boolean
    class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
    as: 'button',
    variant: 'default',
    size: 'default',
})
</script>

<template>
    <Primitive
        data-sidebar="menu-button"
        :data-size="size"
        :data-active="isActive"
        :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
        :as="as"
        :as-child="asChild"
        v-bind="$attrs"
        class="group gap-4 py-5">
        <slot />
    </Primitive>
</template>
