<script setup lang="ts">
import { type Component, computed } from 'vue'
import SidebarMenuButtonChild, {
    type SidebarMenuButtonProps,
} from './SidebarMenuButtonChild.vue'
import { useSidebar } from './utils'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<
        SidebarMenuButtonProps & {
            tooltip?: string | Component
            size?: string
        }
    >(),
    {
        as: 'button',
        variant: 'default',
        size: 'default',
    }
)

const { isMobile, state } = useSidebar()

const delegatedProps = computed(() => {
    const { tooltip, ...delegated } = props
    return delegated
})
</script>

<template>
    <SidebarMenuButtonChild
        v-if="!tooltip"
        v-bind="{ ...delegatedProps, as: props.as as string, ...$attrs }">
        <slot />
    </SidebarMenuButtonChild>

    <Tooltip v-else>
        <TooltipTrigger as-child>
            <SidebarMenuButtonChild
                v-bind="{
                    ...delegatedProps,
                    as: props.as as string,
                    ...$attrs,
                }"
                class="cursor-pointer">
                <slot />
            </SidebarMenuButtonChild>
        </TooltipTrigger>
        <TooltipContent
            side="right"
            align="center"
            :hidden="state !== 'collapsed' || isMobile"
            class="invisible"
            :class="{ visible: state == 'collapsed' }">
            <template v-if="typeof tooltip === 'string'">
                {{ tooltip }}
            </template>
            <component :is="tooltip" v-else />
        </TooltipContent>
    </Tooltip>
</template>
