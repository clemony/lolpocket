<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
<<<<<<< HEAD
<<<<<<< HEAD:src/components/base/sidebar/SidebarMenuButtonChild.vue
import { cn } from '@lib/utils'

=======
import { cn } from '@/client/lib/utils'
import { useGeneralStore } from '@/client/stores/generalStore'
=======
import { cn } from '@lib/utils'
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
const gs = useGeneralStore()
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/base/sidebar/SidebarMenuButtonChild.vue
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
