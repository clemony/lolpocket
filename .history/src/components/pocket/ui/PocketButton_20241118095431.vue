<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <DropdownButton :class="cn('', props.class)">
                <template #text>
                    <h4>
                        {{ pocket.name }}
                    </h4>
                </template>

                <slot />
            </DropdownButton>
        </DropdownMenuTrigger>

        <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
    </DropdownMenu>
</template>

<style scoped></style>
