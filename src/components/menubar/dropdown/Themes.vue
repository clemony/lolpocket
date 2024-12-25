<script setup lang="ts">
import { themes } from '@assets/themes'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()

function handleChange(newTheme) {
    as.theme = newTheme
    console.log('💠 - handleChange - as.theme:', as.theme)
    console.log('💠 - handleChange - newTheme:', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
}
</script>
<template>
    <Collapsible>
        <CollapsibleTrigger as-child>
            <Button
                variant="ghost"
                size="sm"
                class="group flex w-full gap-4 rounded-sm pl-1.75">
                <icon
                    icon="teenyicons:paintbucket-outline"
                    class="!size-4.5 shrink-0" />

                Themes

                <ExpandIndicator />
            </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <div class="flex flex-col gap-1">
                <Label
                    v-for="theme in themes"
                    class="hover:bg-b2 flex h-10 items-center px-11">
                    <input
                        type="radio"
                        class="peer hidden"
                        name="themeChanger"
                        :value="theme.name"
                        :v-model="as.theme"
                        @change="handleChange(theme.name)" />

                    <div
                        class="flex items-center capitalize"
                        :class="{
                            'underline underline-offset-2':
                                as.theme == theme.name,
                        }">
                        {{ theme.name }}
                    </div>
                    <Grow />
                    <div
                        :data-theme="theme.name"
                        class="text-bc border-neutral pointer-events-auto grid size-8 place-items-center rounded-lg border p-1 shadow-sm transition-all duration-300 hover:opacity-100"
                        :class="{
                            'ring-neutral/60 inset-shadow-sm ring-1':
                                as.theme == theme.name &&
                                (theme.name == 'light' ||
                                    theme.name == 'sunset'),
                            'inset-shadow-sm ring-1 ring-white/60':
                                as.theme == theme.name &&
                                (theme.name == 'dusk' ||
                                    theme.name == 'midnight'),
                            'opacity-60': as.theme != theme.name,
                        }"
                        :style="{ background: theme.color }">
                        <icon
                            :icon="theme.icon"
                            class="[&_path]:stroke-bc !size-full stroke-2" />
                    </div>
                </Label>
            </div>
        </CollapsibleContent>
    </Collapsible>
</template>
<style scoped></style>
