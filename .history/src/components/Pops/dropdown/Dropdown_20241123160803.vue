<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { menu, menuGroup, menuItem, pocket } from 'types'

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class']
        size?: string
        variant?: string
        menu?: menu
        model?: any
    }>(),
    {
        size: 'sm',
        variant: 'ghost',
    }
)

const model = ref(props.model)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                :class="
                    cn(
                        'flex h-full w-full flex-nowrap items-center rounded-lg !border-0 px-3 text-base !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200 data-[state=open]:shadow-sm data-[state=open]:!ring-1 data-[state=open]:!ring-base-300/40',
                        props.class
                    )
                "
                :variant="props.variant"
                :size="props.size">
                <slot name="1" />
                <slot name="2" />

                <icon
                    icon="teenyicons:caret-vertical-small-outline"
                    class="w-4 shrink-0 justify-end opacity-60" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            class="w-radix-dropdown-menu-trigger [&_svg]:size-4.5">
            <template v-for="menuGroup in menu">
                <DropdownMenuGroup>
                    <DropdownMenuLabel v-if="menuGroup.title">
                        {{ menuGroup.title }}
                    </DropdownMenuLabel>

                    <DropdownMenuItem v-for="item in menuGroup.items">
                        {{ item.title }}
                        <DropdownMenuShortcut>
                            {{ item.shortcut }}
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuRadioGroup>
                    <slot />
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
            </template>
        </DropdownMenuContent>

        <DropdownMenuCheckboxItem v-model:checked="model">
            <DropdownMenuItemIndicator>
                <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Checkbox item
        </DropdownMenuCheckboxItem>
    </DropdownMenu>
</template>

<style scoped></style>
