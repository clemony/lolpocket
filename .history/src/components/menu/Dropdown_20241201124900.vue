<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { menu, menuGroup, menuItem, pocket } from 'types'

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class']
        size?: string
        variant?: string
        menu?: menu
        icon?: string
    }>(),
    {
        size: 'sm',
        variant: 'ghost',
        icon: 'teenyicons:caret-vertical-small-outline',
    }
)
const menu = ref(props.menu)
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
                    :icon="props.icon"
                    class="w-6 shrink-0 justify-end opacity-60" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            class="w-radix-dropdown-menu-trigger [&_svg]:size-4.5">
            <template v-for="menuGroup in menu">
                <DropdownMenuLabel v-if="menuGroup.title">
                    {{ menuGroup.title }}
                </DropdownMenuLabel>

                <template v-if="!menuGroup.type">
                    <DropdownMenuGroup>
                        <template v-for="item in menuGroup.items">
                            <DropdownMenuItem
                                v-if="!item.type"
                                @click.stop="item.action ? item.action : ''">
                                <span class="size-4.5">
                                    <icon :icon="item.icon" class="size-full" />
                                </span>
                                {{ item.title }}
                                <DropdownMenuShortcut>
                                    {{ item.shortcut }}
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuCheckboxItem
                                v-if="item.type == 'checkbox'"
                                v-model:checked="item.model">
                                {{ item.title }}
                                <DropdownMenuShortcut>
                                    {{ item.shortcut }}
                                </DropdownMenuShortcut>
                            </DropdownMenuCheckboxItem>
                        </template>
                    </DropdownMenuGroup>
                </template>

                <template v-if="menuGroup.type == 'radio'">
                    <DropdownMenuRadioGroup>
                        <DropdownMenuRadioItem v-for="item in menuGroup.items">
                            {{ item.title }}
                            <DropdownMenuShortcut>
                                {{ item.shortcut }}
                            </DropdownMenuShortcut>
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>

                    <DropdownMenuSeparator />
                </template>
            </template>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
